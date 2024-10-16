"use client";

import { Share2 } from 'lucide-react'
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    { title: 'Creation de mode', description: 'Nous confectionnons des vêtements personnalisés pour votre compte' },
    { title: 'Creation de mode', description: 'Nous confectionnons des vêtements personnalisés pour votre compte' },
    { title: 'Creation de mode', description: 'Nous confectionnons des vêtements personnalisés pour votre compte' },
    { title: 'Creation de mode', description: 'Nous confectionnons des vêtements personnalisés pour votre compte' },
    { title: 'Creation de mode', description: 'Nous confectionnons des vêtements personnalisés pour votre compte' },
    { title: 'Creation de mode', description: 'Nous confectionnons des vêtements personnalisés pour votre compte' },
    { title: 'Creation de mode', description: 'Nous confectionnons des vêtements personnalisés pour votre compte' },
    { title: 'Creation de mode', description: 'Nous confectionnons des vêtements personnalisés pour votre compte' },
    { title: 'Creation de mode', description: 'Nous confectionnons des vêtements personnalisés pour votre compte' },
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
            <motion.div 
              key={index} 
              className="border border-blue-600 p-6 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Share2 className="text-[#EA1D24] w-8 h-8 mb-4" />
              <h4 className="text-[#073EA2] font-semibold text-lg mb-2">{service.title}</h4>
              <p className="text-gray-600 text-[17px]">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}