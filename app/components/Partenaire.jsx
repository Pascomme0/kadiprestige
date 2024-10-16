'use client'
import Image from 'next/image'
import { Users, Droplet, HardHat, Truck, Shirt } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import image from '../public/image.png'
import logo from '../public/logo.png'

export default function Partenaire() {
  const clientLogos = [
    { src: logo, alt: 'Logo SODECI' },
    { src: logo, alt: 'Logo Ministère de la Défense' },
    { src: logo, alt: 'Logo Ministère de  Nationale' },
    { src: logo, alt: 'Logo Kadi Prestige Eau' },
    { src: logo, alt: 'Logo ONG Kadi Prestige' },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [counts, setCounts] = useState({
    workers: 0,
    projects: 0,
    clients: 0,
    years: 0,
  });

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCounts(prevCounts => ({
          workers: Math.min(prevCounts.workers + 4, 403),
          projects: Math.min(prevCounts.projects + 30, 3000),
          clients: Math.min(prevCounts.clients + 1, 100),
          years: Math.min(prevCounts.years + 1, 15),
        }));
      }, 20);

      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-blue-700 text-white pt-16 pb-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm mb-4">Des solutions complètes pour vos besoins en hydraulique et bien plus</p>
          <h1 className="text-4xl font-bold mb-12 max-w-3xl leading-tight">
            KADI PRESTIGE : Votre partenaire de confiance pour tous vos projets hydrauliques et de développement
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pb-10">
            <div className="flex flex-col items-center">
              <Droplet className="h-12 w-12 mb-4" />
              <p className="text-lg text-center">
                Expertise en forage et adduction d'eau potable
              </p>
            </div>
            <div className="flex flex-col items-center">
              <HardHat className="h-12 w-12 mb-4" />
              <p className="text-lg text-center">
                BTP : routes et construction de bâtiments
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Truck className="h-12 w-12 mb-4" />
              <p className="text-lg text-center">
                Livraison de denrées alimentaires
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Shirt className="h-12 w-12 mb-4" />
              <p className="text-lg text-center">
                Confection de tenues et uniformes de travail
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-20">
        <div ref={ref} className="bg-red-600 text-white p-8 flex items-start shadow-lg">
          <div className="w-1/3 pr-8">
            <Image
              src={image}
              alt="Équipe KADI PRESTIGE en action"
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="w-2/3 space-y-6">
            {[
              { number: counts.workers, text: 'Employés qualifiés' },
              { number: counts.projects, text: "Projets réalisés en Côte d'Ivoire" },
              { number: counts.clients, text: 'Clients satisfaits' },
              { number: counts.years, text: "Années d'expérience" },
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b border-white pb-2 pt-6">
                <span className="text-5xl font-bold">{item.number}</span>
                <span className="text-xl">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="my-20 pb-10 px-4">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">Nos partenaires</h2>
          <p className="text-center text-gray-600 mb-12">KADI PRESTIGE collabore avec des acteurs majeurs en Côte d'Ivoire</p>
          <div className="flex justify-between items-center">
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center gap-4">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={70}
                  className="max-w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}