"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

const Pourquoi = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [imageSrc, setImageSrc] = useState('');

  const raisons = [
    {
      numero: 1,
      titre: "Expertise polyvalente",
      description: "Notre équipe possède une vaste expérience dans divers domaines, de l'hydraulique au BTP, garantissant des solutions complètes pour vos projets."
    },
    {
      numero: 2,
      titre: "Engagement social",
      description: "Au-delà de nos services, notre ONG s'engage activement dans l'autonomisation des femmes et l'aide aux personnes démunies."
    },
    {
      numero: 3,
      titre: "Qualité et fiabilité",
      description: "Nous nous engageons à fournir des services de haute qualité, respectant les normes les plus strictes pour assurer la satisfaction de nos clients."
    }
  ];

  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch('https://admin.kadiprestige.com/api/pages');
      const data = await response.json();
      const workSection = data.member[1].sections.find(section => section.code === 'WORK');
      if (workSection) {
        setImageSrc(`https://admin.kadiprestige.com${workSection.imagePath}`);
      }
    };

    fetchImage();
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
          Pourqoi travailler avec nous ?
        </motion.h2>
        <motion.p 
          className="text-[#818181] mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Kadi Prestige se distingue par son expertise diversifiée et son engagement envers l'excellence et la responsabilité sociale.
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
