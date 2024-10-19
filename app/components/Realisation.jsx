"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import voyage from '../public/voyage.png'
import { useMediaQuery } from 'react-responsive';

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
];

export default function Realisation() {
  const [currentPage, setCurrentPage] = useState(1);
  const projetsParPage = 3;
  const indexOfLastProjet = currentPage * projetsParPage;
  const indexOfFirstProjet = indexOfLastProjet - projetsParPage;
  const currentProjets = projets.slice(indexOfFirstProjet, indexOfLastProjet);
  
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-center text-2xl font-bold text-[#073EA2] mb-2">
        Ce que nous offrons
      </h2>
      <h3 className="text-center text-3xl font-bold text-[#E11D48] mb-12">
        Nos projets réalisés
      </h3>

      <div>
        {currentProjets.map((projet, index) => (
          <div 
            key={index}
            className={`flex ${isMobile ? 'flex-col' : index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center mb-12 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} p-8 rounded-lg`}
          >
            <div className={`${isMobile ? 'w-full mb-4' : 'w-1/2'} px-4`}>
              <Image src={projet.image} alt={projet.titre} width={500} height={300} className="rounded-lg w-full" />
            </div>
            <div className={`${isMobile ? 'w-full' : 'w-1/2'} px-4`}>
              <h4 className="text-2xl font-bold text-[#073EA2] mb-2">
                {projet.titre}
              </h4>
              <div className="w-16 h-1 bg-[#073EA2] mb-4" />
              <p className="text-gray-600">
                {projet.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        {Array.from({ length: Math.ceil(projets.length / projetsParPage) }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === i + 1 ? 'bg-[#073EA2] text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
