'use client';

import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import parse from 'html-react-parser';
import { useRouter } from 'next/navigation';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const router = useRouter();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://admin.kadiprestige.com/api/articles');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setArticles(data.member);
        setLoading(false);
      } catch (err) {
        setError('Failed to load articles');
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-red-600 text-center">
          <p className="text-xl font-semibold">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-colors"
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            Astuces et ressources
          </h2>
          <h3 className="text-3xl font-bold text-rose-600">
            Actualités
          </h3>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full transform transition duration-500 hover:scale-[1.02]">
                    <div
                      className="h-48 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(https://admin.kadiprestige.com${article.path})`,
                      }}
                    />
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-blue-700 mb-2">
                        {article.title}
                      </h4>
                      <div className="text-gray-600 mb-4 line-clamp-3">
                        {parse(article.description)}
                      </div>
                      <div className="flex justify-between items-center">
                        <button
                          onClick={() => router.push(`pages/detailsblogs/${article.id}`)}
                          className="bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition-colors duration-300 transform hover:scale-105"
                        >
                          Lire plus
                        </button>
                        <time className="text-sm text-gray-500">
                          {new Date(article.date).toLocaleDateString('fr-FR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors z-10"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors z-10"
            onClick={scrollNext}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
