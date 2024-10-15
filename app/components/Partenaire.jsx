'use client'
import Image from 'next/image'
import { Users } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import image from '../public/image.png'
import logo from '../public/logo.png'

export default function Partenaire() {
  const clientLogos = [
    { src: logo, alt: 'Logo client 1' },
    { src: logo, alt: 'Logo client 2' },
    { src: logo, alt: 'Logo client 3' },
    { src: logo, alt: 'Logo client 4' },
    { src: logo, alt: 'Logo client 5' },
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
          years: Math.min(prevCounts.years + 1, 5),
        }));
      }, 20);

      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-blue-700 text-white pt-16 pb-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm mb-4">Nous avons des solutions pour tous vos besoins</p>
          <h1 className="text-4xl font-bold mb-12 max-w-3xl leading-tight">
            Nos consultations permettront d'examiner et de conseillera sur comment devenir plus efficace et meilleur
          </h1>
          <div className="grid grid-cols-4 gap-8 pb-10">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex flex-col items-center">
                <Users className="h-12 w-12 mb-4" />
                <p className="text-xs text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-20">
        <div ref={ref} className="bg-red-600 text-white p-8 flex items-start shadow-lg">
          <div className="w-1/3 pr-8">
            <Image
              src={image}
              alt="Business meeting"
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="w-2/3 space-y-6">
            {[
              { number: counts.workers, text: 'De travailleurs qualifiés' },
              { number: counts.projects, text: 'Projets réalisés' },
              { number: counts.clients, text: 'Clients satisfaits' },
              { number: counts.years, text: "années d'expérience" },
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b border-white pb-2 pt-6">
                <span className="text-5xl font-bold">{item.number}</span>
                <span className="text-xl">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 pb-10">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">Nos clients</h2>
          <p className="text-center text-gray-600 mb-12">Nous avons travaillé avec plusieurs clients</p>
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