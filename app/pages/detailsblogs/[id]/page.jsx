'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import parse from 'html-react-parser';
import Link from 'next/link';

const ArticleDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`https://admin.kadiprestige.com/api/articles/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch article details');
        }
        const data = await response.json();
        setArticle(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load article details');
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600 text-xl">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white  rounded-xl overflow-hidden">
      <Link href="#" onClick={() => router.back()} className="flex items-center text-blue-700 mt-8 mb-4">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H3m0 0l6-6m-6 6l6 6" />
            </svg>
            Retour
          </Link>
        <div
          className="h-64 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://admin.kadiprestige.com${article.path})`,
          }}
        />
        <div className="p-6">
         
          <h1 className="text-3xl font-bold text-blue-700 mb-4">{article.title}</h1>
          <h1 className="text-gray-700  mb-6"> {parse(article.description)}</h1>
          <time className="block text-sm text-gray-500">
            Publié le :{' '}
            {new Date(article.date).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
