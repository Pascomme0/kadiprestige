"use client";

import { Share2, Scissors, Shirt, Truck, Droplet, Building2, Factory, Brush, HardHat, Printer } from 'lucide-react'
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Services() {
  const services = [
    {icon: Scissors, title: 'Création de mode', description: 'Conception et réalisation de collections uniques et tendance pour tous les styles', link: '../pages/servicedetails/mode' },
    {icon: Shirt, title: 'Confection de tenue de travail', description: 'Fabrication sur mesure de vêtements professionnels adaptés à chaque métier', link: '../pages/servicedetails/tenue' },
    {icon: Truck, title: 'Livraison de denrées alimentaires', description: 'Service de livraison rapide et fiable de produits alimentaires frais et de qualité', link: '../pages/servicedetails/livraisondenree' },
    {icon: Droplet, title: 'Drainage et Hydraulique', description: 'Solutions expertes pour la gestion des eaux et l\'optimisation des systèmes hydrauliques', link: '../pages/servicedetails/drainage' },
    {icon: Building2, title: 'BTP', description: 'Réalisation de projets de construction et de rénovation dans le respect des normes et délais', link: '../pages/servicedetails/btp' },
    {icon: Factory, title: 'Industrie', description: 'Services et solutions innovantes pour optimiser les processus industriels', link: '../pages/servicedetails/industrie' },
    {icon: Brush, title: 'Entretien, Nettoyage,Aménagement de bureaux et espaces verts', description: 'Maintenance complète pour des espaces de travail propres, fonctionnels et agréables', link: '../pages/servicedetails/entretien' },
    {icon: HardHat, title: 'Fourniture d\'équipement de protection individuelle (EPI)', description: 'Gamme complète d\'EPI pour assurer la sécurité et le confort des travailleurs', link: '../pages/servicedetails/epi' },
    {icon: Printer, title: 'Fourniture de matériel de bureau et consommables informatiques', description: 'Approvisionnement en fournitures et équipements essentiels pour un bureau efficace', link: '../pages/servicedetails/bureau' },
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-center mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-red-600 text-lg font-medium">Ce que nous offrons</span>
        </motion.h2>
        <motion.h3 
          className="text-center text-3xl font-bold text-blue-700 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Nos services
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link href={service.link} key={index}>
              <motion.div 
                className="border border-blue-600 p-6 rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <service.icon className="text-[#EA1D24] w-8 h-8 mb-4" />
                <h4 className="text-[#073EA2] font-semibold text-lg mb-2">{service.title}</h4>
                <p className="text-gray-600 text-[17px]">{service.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}