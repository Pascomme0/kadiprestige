"use client"; // Ensure this is a Client Component

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import banner1 from '../public/materiauxx.jpg'; 
import banner2 from '../public/mode.jpg';
import banner3 from '../public/kpvoyage.jpg';

const images = [banner1, banner2, banner3];
const texts = [
  [<> Lorem ipsum <br />  dolor sit amet</>],
  [<> Lorem ipsum <br />  dolor sit amet</>],
  [<> Lorem ipsum <br />  dolor sit amet</>],
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative top-16 mb-10 h-screen bg-gray-100 overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence>
          {images.map((image, index) => (
            index === currentIndex && (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 60, scale: 0.90 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.95 }}
                transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
                className="absolute inset-0">
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-white text-4xl md:text-6xl font-bold text-center leading-10 px-4">
                    {texts[index]}
                  </motion.h2>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>      
    </div>
  );
};

export default Hero;
