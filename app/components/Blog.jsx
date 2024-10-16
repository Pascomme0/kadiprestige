"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import voyage from '../public/voyage.png'

const blogPosts = [
  {
    title: "Titre de l'article du blog",
    excerpt: "Début de l'article lorem ipsum dolor sit amet consectetur...",
    image: voyage
  },
  {
    title: "Titre de l'article du blog",
    excerpt: "Début de l'article lorem ipsum dolor sit amet consectetur...",
    image: voyage
  },
  {
    title: "Titre de l'article du blog", 
    excerpt: "Début de l'article lorem ipsum dolor sit amet consectetur...",
    image: voyage
  }
];

const Blog = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <motion.h2 
        className="text-center text-xl font-semibold text-[#073EA2] mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Astuces et ressources
      </motion.h2>
      <motion.h3
        className="text-center text-3xl font-bold text-[#E11D48] mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Actualités
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div 
            key={index}
            className="bg-white rounded-lg shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image 
              src={post.image}
              alt={post.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-[#073EA2] mb-2">{post.title}</h4>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link href="../pages/detailblog">
                <motion.button
                  className="bg-[#EA1D24] text-white px-4 py-2 rounded-full hover:bg-[#C81E3E] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Lire plus
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default Blog;
