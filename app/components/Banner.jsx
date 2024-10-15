import React from 'react';
import Image from 'next/image';

const Banner = ({ imageUrl, title }) => {
  return (
    <div className="relative w-full h-[360px]">
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">{title}</h1>
      </div>
    </div>
  );
};

export default Banner;
