import React from 'react';
import Image from 'next/image';

const Banner = ({ imageUrl, title }) => {
  return (
    <div className="relative top-14 w-full h-[300px] sm:h-[500px]">
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-2xl sm:text-7xl font-bold text-center px-4">{title}</h1>
      </div>
    </div>
  );
};

export default Banner;
