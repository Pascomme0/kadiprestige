"use client";

import Image from 'next/image'
import { Plane, CreditCard, Map, Tent, Shield, Ticket } from 'lucide-react'
import voyage from '../public/voyage.png'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const services = [
  { name: 'Tourisme', icon: Plane, color: 'bg-[#EA1D24] hover:bg-red-600' },
  { name: 'Visa', icon: CreditCard, color: 'bg-[#073EA2] hover:bg-red-600' },
  { name: 'Excursion', icon: Map, color: 'bg-[#073EA2] hover:bg-red-600' },
  { name: 'Colonie de vacances', icon: Tent, color: 'bg-[#073EA2] hover:bg-red-600' },
  { name: 'Assurance voyage', icon: Shield, color: 'bg-[#073EA2] hover:bg-red-600' },
  { name: 'Billeterie', icon: Ticket, color: 'bg-[#073EA2] hover:bg-red-600' },
]

export default function KPvoyage() {
  const [agenceData, setAgenceData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://admin.kadiprestige.com/api/pages');
      const data = await response.json();
      const agence = data.member.find(page => page.sections.some(section => section.code === 'AGENCE'));
      setAgenceData(agence);
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mt-28">
      <motion.div 
        className="flex flex-col md:flex-row gap-8 mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
         
          {agenceData && (
            <div>
              <h2 className="text-2xl font-bold text-[#073EA2] mb-4">{agenceData.sections[0].title}</h2>
              <p className="text-gray-600 text-[17px] mb-4 text-justify" dangerouslySetInnerHTML={{ __html: agenceData.sections[0].description }} />
            </div>
          )}
        </motion.div>
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {agenceData && agenceData.sections[0].imagePath ? (
            <img
              src={`https://admin.kadiprestige.com${agenceData.sections[0].imagePath}`}
              alt={agenceData.sections[0].title}
              className="rounded-lg"
              width={600}
              height={300}
            />
          ) : (
            <Image
              src={voyage}
              alt="Happy traveler with passport and tickets"
              width={600}
              height={300}
              className="rounded-lg"
            />
          )}
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`${service.color} rounded-lg p-4 text-white transition-colors duration-300 h-32 w-auto relative`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <div className="absolute top-4 left-4 bg-white rounded-full p-2">
              <service.icon className="w-6 h-6 text-gray-800" />
            </div>
            <h3 className="text-xl font-semibold mt-14">{service.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}