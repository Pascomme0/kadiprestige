'use client'
import Image from 'next/image'
import { Users, Droplet, HardHat, Truck, Shirt } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-white">
      <motion.div 
        className="bg-blue-700 text-white pt-16 pb-32 px-4 sm:px-6 lg:px-8 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.p 
            className="text-lg mb-4"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Des solutions complètes pour vos besoins en hydraulique et bien plus
          </motion.p>
          <motion.h1 
            className="text-4xl font-bold mb-12 max-w-3xl leading-tight"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            KADI PRESTIGE : Votre partenaire de confiance pour tous vos projets hydrauliques et de développement
          </motion.h1>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-12 pb-10"
            variants={fadeInUp}
            transition={{ delay: 0.6, staggerChildren: 0.1 }}
          >
            {[
              { icon: Droplet, text: "Expertise en forage et adduction d'eau potable" },
              { icon: HardHat, text: "BTP : routes et construction de bâtiments" },
              { icon: Truck, text: "Livraison de denrées alimentaires" },
              { icon: Shirt, text: "Confection de tenues et uniformes de travail" }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center" 
                variants={fadeInUp}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 260, damping: 20 }}
                >
                  <item.icon className="h-12 w-12 mb-4" />
                </motion.div>
                <motion.p 
                  className="text-lg text-center"
                  variants={fadeInUp}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  {item.text}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-20">
        <motion.div 
          ref={ref} 
          className="bg-red-600 text-white p-8 flex items-start shadow-lg"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
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
              <motion.div 
                key={index} 
                className="flex justify-between items-center border-b border-white pb-2 pt-6"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-5xl font-bold">{item.number}</span>
                <span className="text-xl">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="my-20 pb-10 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-3xl font-bold text-center text-blue-700 mb-2"
            variants={fadeInUp}
          >
            Nos partenaires
          </motion.h2>
          <motion.p 
            className="text-center text-gray-600 mb-12"
            variants={fadeInUp}
          >
            KADI PRESTIGE collabore avec des acteurs majeurs en Côte d'Ivoire
          </motion.p>
          <motion.div 
            className="flex justify-between items-center"
            variants={fadeInUp}
            transition={{ staggerChildren: 0.1 }}
          >
            {clientLogos.map((logo, index) => (
              <motion.div 
                key={index} 
                className="flex items-center justify-center gap-4"
                variants={fadeInUp}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={70}
                  className="max-w-full h-auto"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}