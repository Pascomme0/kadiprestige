"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Presentation = () => {
  const [introData, setIntroData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://admin.kadiprestige.com/api/pages');
        const data = await response.json();
        const introSection = data.member.find(page => page.typePage.name === "Présentation")
          .sections.find(section => section.code === "INTRO");
        setIntroData(introSection.detailSections[0]);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchData();
  }, []);

  if (!introData) {
    return <div>Chargement...</div>;
  }

  // Concaténer l'URL de base avec le chemin de l'image
  const imageUrl = `https://admin.kadiprestige.com${introData.imagePath}`;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-16">
     
      <motion.h3 
        className="text-center text-red-600 font-bold text-2xl sm:text-3xl mb-8 sm:mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        À propos de nous
      </motion.h3>
      
      <div className="flex flex-col md:flex-row">
        <motion.div 
          className="w-full md:w-1/2 bg-blue-700 flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="text-white">
            <motion.h4 
              className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {introData.title}
            </motion.h4>
            <motion.p 
              className="text-sm sm:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {introData.description}
            </motion.p>
          </div>
        </motion.div>
        <motion.div 
          className="w-full md:w-1/2 mt-4 md:mt-0 hidden md:block"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image 
            src={imageUrl}
            alt="Image de présentation"
            width={500}
            height={300}
            layout="responsive"
            objectFit="cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Presentation;
