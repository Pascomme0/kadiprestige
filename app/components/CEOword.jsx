'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function CEOword() {
  const [ceoData, setCeoData] = useState(null);

  useEffect(() => {
    async function fetchCeoData() {
      try {
        const response = await fetch('https://admin.kadiprestige.com/api/pages');
        const data = await response.json();
        const ceoSection = data.member.find(page => 
          page.typePage.name === "Présentation"
        ).sections.find(section => 
          section.code === "CEO"
        );
        setCeoData(ceoSection);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    }

    fetchCeoData();
  }, []);

  const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  if (!ceoData) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center text-blue-700 mb-12"
      >
        Mot du DG
      </motion.h2>
      
      <div className="flex flex-col md:flex-row items-center bg-gray-50 p-14">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mb-8 md:mb-0 relative"
        >
          <Image
            src={`https://admin.kadiprestige.com${ceoData.imagePath}`}
            alt="Mme. Kadi Diallo"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute -bottom-8 right-0 bg-red-600 text-white p-4 rounded-lg"
          >
            <p className="font-bold">Mme. Kadi Diallo</p>
            <p className="text-sm">PDG Kadi prestige</p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 md:pl-2"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-600 mb-6"
          >
            {stripHtml(ceoData.description)}
          </motion.p>
          
        
        </motion.div>
      </div>
    </div>
  )
}
