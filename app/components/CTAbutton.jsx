'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import voyage from '../public/voyage.png'

const CTAButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative bg-red-600 p-8 rounded-lg overflow-hidden h-64 w-full max-w-4xl mx-auto my-24 flex items-center justify-center ">
      <Image 
        src={voyage}
        alt="Fond de voyage"
        layout="fill"
        objectFit="cover"
        className="opacity-20"
      />
      <div className="relative z-10 text-center">
        <h2 className="text-white text-3xl font-bold mb-8">
         Contactez nous directement <br /> pour votre projet
        </h2>
        <Link href="../pages/contact">
          <button 
            className={`bg-white text-[#042A70] font-semibold py-3 px-6 rounded-lg transition duration-300 ${isHovered ? 'bg-gray-100 transform scale-105' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? 'Parlons-en !' : 'Contacter'}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CTAButton;
