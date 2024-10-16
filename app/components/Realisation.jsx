"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import voyage from '../public/voyage.png'
import { motion, AnimatePresence } from 'framer-motion';

const projets = [
  {
    titre: "Forage d'eau potable à Bouaké",
    description: "Réalisation d'un forage profond pour l'approvisionnement en eau potable de la communauté de Bouaké. Ce projet a permis d'améliorer significativement l'accès à l'eau propre pour plus de 5000 habitants de la région.",
    image: voyage
  },
  {
    titre: "Construction d'une école à Yamoussoukro",
    description: "Édification d'un établissement scolaire moderne à Yamoussoukro, comprenant 12 salles de classe, une bibliothèque et des installations sanitaires. Ce projet a augmenté la capacité d'accueil scolaire de la ville de 500 élèves.",
    image: voyage
  },
  {
    titre: "Rénovation du réseau d'adduction d'eau à Abidjan",
    description: "Modernisation et extension du réseau d'adduction d'eau dans plusieurs quartiers d'Abidjan. Cette initiative a permis d'améliorer la distribution d'eau pour plus de 100 000 résidents et de réduire les pertes d'eau de 30%.",
    image: voyage
  },
  {
    titre: "Construction d'un centre de santé à Man",
    description: "Érection d'un centre de santé communautaire à Man, équipé de services de consultation, de maternité et d'un laboratoire. Ce projet a considérablement amélioré l'accès aux soins de santé pour plus de 20 000 personnes dans la région.",
    image: voyage
  },
  {
    titre: "Aménagement d'un marché couvert à Korhogo",
    description: "Conception et construction d'un marché couvert moderne à Korhogo, offrant des espaces de vente sécurisés et hygiéniques pour plus de 200 commerçants locaux. Ce projet a dynamisé l'économie locale et amélioré les conditions de travail des vendeurs.",
    image: voyage
  },
  {
    titre: "Installation de panneaux solaires à Daloa",
    description: "Mise en place d'un système d'énergie solaire pour alimenter les bâtiments publics de Daloa. Cette initiative a réduit la dépendance aux énergies fossiles et diminué les coûts énergétiques de la municipalité de 40%.",
    image: voyage
  },
  // Ajoutez d'autres projets ici
];

export default function Realisation() {
  const [currentPage, setCurrentPage] = useState(1);
  const projetsParPage = 3;
  const indexOfLastProjet = currentPage * projetsParPage;
  const indexOfFirstProjet = indexOfLastProjet - projetsParPage;
  const currentProjets = projets.slice(indexOfFirstProjet, indexOfLastProjet);

  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -50 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-16"
    >
      <motion.h2 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center text-2xl font-bold text-[#073EA2] mb-2"
      >
        Ce que nous offrons
      </motion.h2>
      <motion.h3 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-center text-3xl font-bold text-[#E11D48] mb-12"
      >
        Nos projets réalisés
      </motion.h3>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          {currentProjets.map((projet, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center mb-12 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} p-8 rounded-lg`}
            >
              <motion.div 
                className="w-1/2 px-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image src={projet.image} alt={projet.titre} width={500} height={300} className="rounded-lg" />
              </motion.div>
              <motion.div 
                className="w-1/2 px-4"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.h4 
                  className="text-2xl font-bold text-[#073EA2] mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {projet.titre}
                </motion.h4>
                <motion.div 
                  className="w-16 h-1 bg-[#073EA2] mb-4"
                  initial={{ width: 0 }}
                  animate={{ width: 64 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                />
                <motion.p 
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  {projet.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex justify-center mt-8"
      >
        {Array.from({ length: Math.ceil(projets.length / projetsParPage) }, (_, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrentPage(i + 1)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === i + 1 ? 'bg-[#073EA2] text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {i + 1}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
}
