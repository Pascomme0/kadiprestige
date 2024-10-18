"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Detailservice = ({ titre, description, imageUrl, couleurFond }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h2 
            className="text-4xl font-bold mb-6 text-blue-700"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {titre}
          </motion.h2>
          <p className="text-gray-700 text-[17px] font-light leading-relaxed text-justify">{description}</p>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div 
            className="absolute inset-0 rounded-lg transform translate-x-4 translate-y-4"
            style={{ backgroundColor: couleurFond }}
          ></div>
          <div className="relative">
            <Image 
              src={imageUrl} 
              alt={titre}
              width={600}
              height={400}
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Detailservice;
