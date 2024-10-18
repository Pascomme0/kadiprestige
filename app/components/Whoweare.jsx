"use client";

import React from 'react';
import Image from 'next/image';
import image from '../public/voyage.png'
import { motion } from 'framer-motion';

const Whoweare = () => {
  return (
    <div className="max-w-10xl py-16">
      <motion.h2 
        className="text-center text-[#073EA2] font-bold text-2xl mb-8"
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Qui sommes nous ?
      </motion.h2>
      <motion.div 
        className="border-b-4 border-red-600 w-24 mx-auto mb-8"
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      
      <div className="flex flex-col md:flex-row">
        <motion.div 
          className="w-full md:w-1/2 bg-[#EA1D24] flex items-center justify-center p-8"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-white">
            <motion.h4 
              className="text-xl md:text-2xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Nous sommes experts en solutions hydrauliques et bien plus
            </motion.h4>
            <motion.p 
              className="text-sm md:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              KADI PRESTIGE est une entreprise ivoirienne spécialisée dans l'exécution de tous travaux de forage et d'adduction en eau potable. Notre expertise s'étend à divers domaines :
              <br/><br/>
              • BTP (routes et construction de bâtiments)
              <br/>
              • Canalisation et raccordement au réseau SODECI
              <br/>
              • Livraison de denrées alimentaires (casernes, cantines scolaires, orphelinats)
              <br/>
              • Production et distribution d'eau potable "Kadi Prestige"
              <br/>
              • Confection de tenues et uniformes de travail
              <br/><br/>
            </motion.p>
          </div>
        </motion.div>
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image 
            src={image}
            alt="Activités de KADI PRESTIGE"
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

export default Whoweare;
