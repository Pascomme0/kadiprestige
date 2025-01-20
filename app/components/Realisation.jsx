"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import voyage from '../public/voyage.png'
import { useMediaQuery } from 'react-responsive';

export default function Realisation() {
  const [projets, setProjets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projetsParPage = 3;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://admin.kadiprestige.com/api/pages');
      const data = await response.json();
      const makeSection = data.member.find(page => page.sections.some(section => section.code === 'MAKE'));
      const makeProjects = makeSection.sections.find(section => section.code === 'MAKE').detailSections;

      const formattedProjects = makeProjects.map(projet => ({
        titre: projet.title,
        description: projet.description,
        image: `https://admin.kadiprestige.com${projet.imagePath}`
      }));

      setProjets(formattedProjects);
    };

    fetchData();
  }, []);

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
