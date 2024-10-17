"use client";

import logo from '../public/logo.png';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkHoverVariants = {
    rest: { opacity: 1 },
    hover: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const underlineVariants = {
    rest: { width: 0, opacity: 0 },
    hover: {
      width: '100%',
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  const buttonHoverVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.4, ease: 'easeInOut' },
    },
  };

  const menuItems = ['Accueil', 'Presentation', 'Services', 'Realisation', 'Agence de voyage'];

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={logo} alt="Logo" width={40} height={40} className="w-24" />
          </Link>
          
          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-16 flex-col items-center space-y-4 p-4 shadow-md bg-white md:static md:flex md:flex-row md:space-x-6 md:space-y-0 md:p-0 md:shadow-none text-[15px] text-gray-800`}>
            {menuItems.map((item) => (
              <motion.div key={item} initial="rest" whileHover="hover" animate="rest" variants={linkHoverVariants} className="relative">
                <Link 
                  href={item === 'Accueil' ? '/' : item === 'Agence de voyage' ? '/agencedevoyage' : `/${item.toLowerCase()}`}
                  className="text-gray-800 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
                <motion.div className="absolute bottom-0 left-0 h-[2px] bg-[#EA1D24]" variants={underlineVariants} />
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/contact">
              <motion.button
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={buttonHoverVariants}
                className="px-4 py-2 text-sm font-medium text-white bg-[#EA1D24] rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EA1D24] transition-colors duration-200"
              >
                Contact
              </motion.button>
            </Link>

            <button
              className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#EA1D24]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
