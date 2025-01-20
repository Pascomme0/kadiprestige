"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

const Pourquoi = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [imageSrc, setImageSrc] = useState('');
  const [raisons, setRaisons] = useState([]);
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');

  // Fonction pour supprimer les balises HTML
  const stripHTML = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://admin.kadiprestige.com/api/pages');
      const data = await response.json();
      const workSection = data.member.find(page => page.typePage.name === 'Présentation')
        .sections.find(section => section.code === 'WORK');
      
      if (workSection) {
        setImageSrc(`https://admin.kadiprestige.com${workSection.imagePath}`);
        setTitre(stripHTML(workSection.title)); // Nettoyage du titre
        setDescription(stripHTML(workSection.description)); // Nettoyage de la description
        setRaisons(workSection.detailSections.map((detail, index) => ({
          numero: index + 1,
          titre: stripHTML(detail.title), // Nettoyage du titre
          description: stripHTML(detail.description) // Nettoyage de la description
        })));
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center mx-auto justify-between p-8 bg-white">
      {!isMobile && (
        <motion.div 
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={imageSrc}
            alt="Image de construction"
            width={500}
            height={300}
            objectFit="cover"
          />
        </motion.div>
      )}
      <motion.div 
        className="w-full md:w-1/2 md:pl-8"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-3xl font-bold text-[#073EA2] mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {titre}
        </motion.h2>
        <motion.p 
          className="text-[#818181] mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>
        
        {raisons.map((raison, index) => (
          <motion.div 
            key={raison.numero} 
            className="flex items-start mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#073EA2] text-[#EA1D24]  font-bold flex items-center justify-center mr-4">
              {raison.numero}
            </div>
            <div>
              <h3 className="font-semibold text-lg text-[#073EA2]">{raison.titre}</h3>
              <p className="text-[#818181]">{raison.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Pourquoi;
