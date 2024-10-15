import React from 'react';
import Image from 'next/image';
import voyage from '../public/voyage.png'

const CTAButton = () => {
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
        <h2 className="text-white text-3xl font-bold mb-6">
          Prenez directement contact <br /> avec nous
        </h2>
        <button className="bg-white text-[#042A70] font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300">
          Contacter
        </button>
      </div>
    </div>
  );
};

export default CTAButton;
