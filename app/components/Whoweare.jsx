import React from 'react';
import Image from 'next/image';
import image from '../public/voyage.png'

const Whoweare = () => {
  return (
    <div className="max-w-10xl  py-16">
      <h2 className="text-center text-[#073EA2] font-bold text-2xl mb-8">Qui sommes nous ?</h2>
      <div className="border-b-4 border-red-600 w-24 mx-auto mb-8"></div>
      
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-[#EA1D24] flex items-center justify-center p-8">
          <div className="text-white">
            <h4 className="text-xl md:text-2xl font-bold mb-4">Nous sommes expérimenté dans la prestation de services</h4>
            <p className="text-sm md:text-base"> lorem ipsum dolor sit alet consortium
            lorem ipsum dolor sit alet consortium lorem ipsum dolor sit alet consortium lorem ipsum dolor sit alet consortium
            lorem ipsum dolor sit alet consortium lorem ipsum dolor sit alet consortium lorem ipsum dolor sit alet consortium
            lorem ipsum dolor sit alet consortium lorem ipsum dolor sit alet consortium  lorem ipsum dolor sit alet consortium lorem ipsum dolor sit alet consortium lorem ipsum dolor sit alet consortium
            lorem ipsum dolor sit alet consortium lorem ipsum dolor sit alet consortium lorem ipsum dolor sit alet consortium lorem ipsum dolor sit alet consortium lorem ipsum dolor sit alet consortium
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Image 
            src={image}
            alt="Construction site"
            width={500}
            height={300}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Whoweare;
