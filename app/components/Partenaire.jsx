'use client'
import Image from 'next/image'
import { Users, Droplet, HardHat, Truck, Shirt } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import image from '../public/image.png'
import logo from '../public/logo.png'
import { useMediaQuery } from 'react-responsive'

export default function Partenaire() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const clientLogos = [
    { src: logo, alt: 'Logo SODECI' },
    { src: logo, alt: 'Logo Ministère de la Défense' },
    { src: logo, alt: 'Logo Ministère de  Nationale' },
    { src: logo, alt: 'Logo Kadi Prestige Eau' },
    { src: logo, alt: 'Logo ONG Kadi Prestige' },
    { src: logo, alt: 'Logo ONG Kadi Prestige' },
    { src: logo, alt: 'Logo ONG Kadi Prestige' },
    { src: logo, alt: 'Logo ONG Kadi Prestige' },
    { src: logo, alt: 'Logo ONG Kadi Prestige' },
    { src: logo, alt: 'Logo ONG Kadi Prestige' },
    { src: logo, alt: 'Logo ONG Kadi Prestige' },
    { src: logo, alt: 'Logo ONG Kadi Prestige' },
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

  const [targetCounts, setTargetCounts] = useState({
    workers: 0,
    projects: 0,
    clients: 0,
    years: 0,
  });

  const [imagePath, setImagePath] = useState('');
  const [logos, setLogos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://admin.kadiprestige.com/api/pages');
        const data = await response.json();
        const pageData = data.member.find(page => page.typePage.name === "Accueil");
        const countSection = pageData.sections.find(section => section.code === "COUNT");
        const detailSections = countSection.detailSections;

        const newCounts = {
          workers: parseInt(detailSections.find(detail => detail.subTitle === "Employés qualifiés").title),
          projects: parseInt(detailSections.find(detail => detail.subTitle === "Projets réalisés en Côte d'Ivoire").title),
          clients: parseInt(detailSections.find(detail => detail.subTitle === "Clients satisfaits").title),
          years: parseInt(detailSections.find(detail => detail.subTitle === "Années d'expérience").title),
        };

        setTargetCounts(newCounts);
        setImagePath(countSection.imagePath);
      } catch (error) {
        console.error("Erreur lors de la récupération des données de l'API", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prevCounts => ({
        workers: Math.min(prevCounts.workers + 4, targetCounts.workers),
        projects: Math.min(prevCounts.projects + 30, targetCounts.projects),
        clients: Math.min(prevCounts.clients + 1, targetCounts.clients),
        years: Math.min(prevCounts.years + 1, targetCounts.years),
      }));
    }, 20);

    return () => clearInterval(interval);
  }, [targetCounts]);

  useEffect(() => {
    fetch('https://admin.kadiprestige.com/api/pages')
      .then(response => response.json())
      .then(data => {
        const pageData = data.member.find(page => page.typePage.name === "Accueil")
        const logoSection = pageData.sections.find(section => section.code === "LOGOS")
        const logoDetails = logoSection.detailSections
        setLogos(logoDetails.map(detail => ({
          src: `https://admin.kadiprestige.com${detail.imagePath}`,
          alt: detail.title
        })))
      })
      .catch(error => console.error('Erreur lors du chargement des logos', error))
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .overflow-hidden {
          width: 100%;
          white-space: nowrap;
        }
        .animate-scroll {
          display: inline-flex;
          animation: scroll 20s linear infinite;
        }
      `}</style>
      <motion.div 
        className="bg-blue-700 text-white pt-8 sm:pt-16 pb-16 sm:pb-32 px-4 sm:px-6 lg:px-8 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.p 
            className="text-base sm:text-lg mb-2 sm:mb-4"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Des solutions complètes pour vos besoins en hydraulique et bien plus
          </motion.p>
          <motion.h1 
            className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-12 max-w-3xl leading-tight"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            KADI PRESTIGE : Votre partenaire de confiance pour tous vos projets hydrauliques et de développement
          </motion.h1>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12 pb-5 sm:pb-10"
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
                  <item.icon className="h-8 w-8 sm:h-12 sm:w-12 mb-2 sm:mb-4" />
                </motion.div>
                <motion.p 
                  className="text-sm sm:text-lg text-center"
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-10 sm:-mt-20">
        <motion.div 
          ref={ref} 
          className="bg-red-600 text-white p-4 sm:p-8 flex flex-col sm:flex-row items-start shadow-lg"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          {!isMobile && imagePath && (
            <div className="w-full sm:w-1/3 pr-0 sm:pr-8 mb-4 sm:mb-0">
              <Image
                src={`https://admin.kadiprestige.com${imagePath}`}
                alt="Image de la section COUNT"
                width={300}
                height={300}
                className="w-full h-auto"
              />
            </div>
          )}
          <div className="w-full sm:w-2/3 space-y-4 sm:space-y-6">
            {[
              { number: counts.workers, text: 'Employés qualifiés' },
              { number: counts.projects, text: "Projets réalisés en Côte d'Ivoire" },
              { number: counts.clients, text: 'Clients satisfaits' },
              { number: counts.years, text: "Années d'expérience" },
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="flex justify-between items-center border-b border-white pb-2 pt-4 sm:pt-6"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-3xl sm:text-5xl font-bold">{item.number}</span>
                <span className="text-base sm:text-xl">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="my-10 sm:my-20 pb-5 sm:pb-10 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-2"
            variants={fadeInUp}
          >
            Nos partenaires
          </motion.h2>
          <motion.p 
            className="text-center text-sm sm:text-base text-gray-600 mb-6 sm:mb-12"
            variants={fadeInUp}
          >
            KADI PRESTIGE collabore avec des acteurs majeurs en Côte d'Ivoire
          </motion.p>
          <motion.div 
            className="overflow-hidden"
          >
            <div className="flex animate-scroll space-x-14">
              {logos.map((logo, index) => (
                <div key={index} className="flex-none w-1/5 p-4">
                  <Image 
                    src={logo.src} 
                    alt={logo.alt} 
                    width={175}
                    height={100}
                    className="max-w-full  h-auto" 
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}