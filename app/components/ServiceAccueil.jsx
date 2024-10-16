"use client";

import { motion } from 'framer-motion';

export default function ServicesAccueil() {
    const services = [
      { id: '01', title: 'Création de mode', description: 'lorem ipsum de vêtements pour les travailleurs' },
      { id: '02', title: 'Création de mode', description: 'lorem ipsum de vêtements pour les travailleurs' },
      { id: '03', title: 'Création de mode', description: 'lorem ipsum de vêtements pour les travailleurs' },
      { id: '04', title: 'Création de mode', description: 'lorem ipsum de vêtements pour les travailleurs' },
      { id: '05', title: 'Création de mode', description: 'lorem ipsum de vêtements pour les travailleurs' },
      { id: '06', title: 'Création de mode', description: 'lorem ipsum de vêtements pour les travailleurs' },
      { id: '07', title: 'Création de mode', description: 'lorem ipsum de vêtements pour les travailleurs' },
      { id: '08', title: 'Création de mode', description: 'lorem ipsum de vêtements pour les travailleurs' },
      { id: '09', title: 'Création de mode', description: 'lorem ipsum de vêtements pour les travailleurs' },
    ]
  
    return (
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-center mb-2"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-red-600 text-lg font-medium">Ce que nous faisons</span>
          </motion.h2>
          <motion.h3 
            className="text-center text-2xl font-bold text-blue-700 mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Nos services
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.id} 
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start mb-4">
                  <span className="text-blue-700 text-lg font-semibold mr-2">{service.id}</span>
                  <h4 className="text-red-600 text-lg font-bold">{service.title}</h4>
                </div>
                <p className="text-blue-700 text-[19px]">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }