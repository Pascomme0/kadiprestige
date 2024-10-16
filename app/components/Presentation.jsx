"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import image from '../public/voyage.png'

const Presentation = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-16">
      <motion.h2 
        className="text-center text-red-600 font-bold text-xl sm:text-2xl mb-4 sm:mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Kadi prestige
      </motion.h2>
      <motion.h3 
        className="text-center text-blue-700 font-bold text-2xl sm:text-3xl mb-8 sm:mb-12"
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
              Kadi prestige une entreprise spécialisée dans la prestation services.
            </motion.h4>
            <motion.p 
              className="text-sm sm:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Kadi Prestige est une entreprise ivoirienne polyvalente, experte en solutions hydrauliques et bien plus. Nous excellons dans l'exécution de travaux de forage et d'adduction d'eau potable, tout en étendant notre savoir-faire à divers domaines tels que le BTP, la livraison de denrées alimentaires, et la confection d'uniformes. Notre engagement va au-delà des services commerciaux, avec une ONG dédiée à l'autonomisation des femmes et à l'aide aux personnes démunies.
            </motion.p>
          </div>
        </motion.div>
        <motion.div 
          className="w-full md:w-1/2 mt-4 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image 
            src={image}
            alt="Construction site"
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
