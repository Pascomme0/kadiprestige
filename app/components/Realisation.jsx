"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import voyage from '../public/voyage.png'

const projets = [
  {
    titre: "Titre du projet",
    description: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.",
    image: voyage
  },
  {
    titre: "Titre du projet",
    description: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.",
    image: voyage
  },
  {
    titre: "Titre du projet",
    description: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.",
    image: voyage
  },
  {
    titre: "Titre du projet",
    description: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.",
    image: voyage
  },
  {
    titre: "Titre du projet",
    description: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.",
    image: voyage
  },
  {
    titre: "Titre du projet",
    description: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.",
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

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-center text-2xl font-bold text-[#073EA2] mb-2">Ce que nous offrons</h2>
      <h3 className="text-center text-3xl font-bold text-[#E11D48] mb-12">Nos projets réalisés</h3>

      {currentProjets.map((projet, index) => (
        <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center mb-12 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} p-8 rounded-lg`}>
          <div className="w-1/2 px-4">
            <Image src={projet.image} alt={projet.titre} width={500} height={300} className="rounded-lg" />
          </div>
          <div className="w-1/2 px-4">
            <h4 className="text-2xl font-bold text-[#073EA2] mb-2">{projet.titre}</h4>
            <div className="w-16 h-1 bg-[#073EA2] mb-4"></div>
            <p className="text-gray-600">{projet.description}</p>
          </div>
        </div>
      ))}

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
