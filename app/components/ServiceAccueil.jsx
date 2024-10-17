"use client";

import { motion } from 'framer-motion';

export default function ServicesAccueil() {
    const services = [
      { id: '01', title: 'Création de mode', description: 'Conception et réalisation de collections uniques et tendance pour tous les styles' },
      { id: '02', title: 'Confection de tenue de travail', description: 'Fabrication sur mesure de vêtements professionnels adaptés à chaque métier' },
      { id: '03', title: 'Livraison de denrées alimentaires', description: 'Service de livraison rapide et fiable de produits alimentaires frais et de qualité' },
      { id: '04', title: 'Drainage et Hydraulique', description: 'Solutions expertes pour la gestion des eaux et l\'optimisation des systèmes hydrauliques' },
      { id: '05', title: 'BTP', description: 'Réalisation de projets de construction et de rénovation dans le respect des normes et délais' },
      { id: '06', title: 'Industrie', description: 'Services et solutions innovantes pour optimiser les processus industriels' },
      { id: '07', title: 'Entretien, Nettoyage,Aménagement de bureaux et espaces verts', description: 'Maintenance complète pour des espaces de travail propres, fonctionnels et agréables' },
      { id: '08', title: 'Fourniture d\'équipement de protection individuelle (EPI)', description: 'Gamme complète d\'EPI pour assurer la sécurité et le confort des travailleurs' },
      { id: '09', title: 'Fourniture de matériel de bureau et consommables informatiques', description: 'Approvisionnement en fournitures et équipements essentiels pour un bureau efficace' },
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