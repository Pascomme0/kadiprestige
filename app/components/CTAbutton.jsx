'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import voyage from '../public/voyage.png'

const CTAButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="relative bg-gradient-to-r from-[#073ea2] to-[#ea1d24] p-8 rounded-lg overflow-hidden h-64 w-full max-w-4xl mx-auto my-24 flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image 
        src={voyage}
        alt="Fond de voyage"
        layout="fill"
        objectFit="cover"
        className="opacity-20"
      />
      <motion.div 
        className="relative z-10 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.h2 
          className="text-white text-3xl font-bold mb-8"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
         Contactez nous directement <br /> pour votre projet
        </motion.h2>
        <Link href="../pages/contact">
          <motion.button 
            className={`bg-white text-[#073ea2] font-semibold py-3 px-6 rounded-lg transition duration-300 ${isHovered ? 'bg-[#ea1d24] text-white transform scale-105' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isHovered ? 'Parlons-en !' : 'Contacter'}
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default CTAButton;
