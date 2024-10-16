"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import voyage from '../public/voyage.png'
import { motion } from 'framer-motion';

export default function Contact() {
  const [focusedInput, setFocusedInput] = useState(null);

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-16"
    >
      <div className="flex flex-col md:flex-row justify-between mb-28">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-center mb-6 md:mb-0"
        >
          <div className="bg-red-100 rounded-full p-6 mb-6">
            <Mail className="text-red-600 w-10 h-10" />
          </div>
          <div className="text-center">
            <h3 className="text-blue-700 text-[20px] font-semibold mb-2">adresse mail</h3>
            <p className="text-gray-600 text-[17px]">kadiprestige@gmail.com</p>
          </div>
        </motion.div>
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center mb-6 md:mb-0"
        >
          <div className="bg-red-100 rounded-full p-6 mb-6">
            <Phone className="text-red-600 w-10 h-10" />
          </div>
          <div className="text-center">
            <h3 className="text-blue-700 text-[20px] font-semibold mb-2">Téléphone</h3>
            <p className="text-gray-600 text-[17px]">22 54 37 89 89</p>
            <p className="text-gray-600 text-[17px]">22 54 37 88 88</p>
          </div>
        </motion.div>
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <div className="bg-red-100 rounded-full p-6 mb-6">
            <MapPin className="text-red-600 w-10 h-10" />
          </div>
          <div className="text-center">
            <h3 className="text-blue-700 text-[20px] font-semibold mb-2">Localisation</h3>
            <p className="text-gray-600 text-[17px]">Abidjan, plateau</p>
          </div>
        </motion.div>
      </div>
      
      <div className="flex flex-col md:flex-row mb-5">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
        >
          <h2 className="text-2xl font-bold text-blue-700 mb-2">CONTACT</h2>
          <h3 className="text-xl text-red-600 mb-6">Restez en contact avec nous</h3>
          <form>
            <div className="flex mb-4">
              <input 
                type="text" 
                placeholder="Nom" 
                className={`w-1/2 mr-2 p-2 border rounded focus:outline-none ${focusedInput === 'nom' ? 'border-red-600' : 'border-gray-300'}`}
                onFocus={() => handleFocus('nom')}
                onBlur={handleBlur}
              />
              <input 
                type="text" 
                placeholder="Prénom" 
                className={`w-1/2 ml-2 p-2 border rounded focus:outline-none ${focusedInput === 'prenom' ? 'border-red-600' : 'border-gray-300'}`}
                onFocus={() => handleFocus('prenom')}
                onBlur={handleBlur}
              />
            </div>
            <input 
              type="email" 
              placeholder="Email" 
              className={`w-full mb-4 p-2 border rounded focus:outline-none ${focusedInput === 'email' ? 'border-red-600' : 'border-gray-300'}`}
              onFocus={() => handleFocus('email')}
              onBlur={handleBlur}
            />
            <textarea 
              placeholder="Message" 
              className={`w-full h-32 mb-4 p-2 border rounded focus:outline-none ${focusedInput === 'message' ? 'border-red-600' : 'border-gray-300'}`}
              onFocus={() => handleFocus('message')}
              onBlur={handleBlur}
            ></textarea>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit" 
              className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors"
            >
              Envoyer
            </motion.button>
          </form>
        </motion.div>
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 relative"
        >
          <div className="absolute inset-0 bg-red-600 rounded-lg transform translate-x-4 translate-y-2"></div>
          <Image 
            src={voyage} 
            alt="Service client" 
            width={500} 
            height={300} 
            layout="responsive"
            className="rounded-lg relative z-10"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
