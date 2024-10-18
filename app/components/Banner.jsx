'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';


const Banner = ({ imageUrl, title }) => {
  const bannerRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const banner = bannerRef.current;
    const image = imageRef.current;
    const overlay = overlayRef.current;
    const titleElement = titleRef.current;

    gsap.set(image, { scale: 1.2, opacity: 0 });
    gsap.set(overlay, { opacity: 1 });
    gsap.set(titleElement, { y: 50, opacity: 0 });

    const tl = gsap.timeline();

    tl.to(image, { duration: 1.5, scale: 1, opacity: 1, ease: "power3.out" })
      .to(overlay, { duration: 1, opacity: 1, ease: "power2.inOut" }, "-=0.5")
      .to(titleElement, { duration: 1, y: 0, opacity: 1, ease: "back.out(1.7)" }, "-=0.5");

  }, []);

  return (
    <div ref={bannerRef} className="relative top-14 mb-16 w-full h-[300px] sm:h-[500px]">
      <div ref={imageRef} className="absolute inset-0">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div ref={overlayRef} className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 ref={titleRef} className="text-white text-2xl sm:text-7xl font-bold text-center px-4">{title}</h1>
      </div>
    </div>
  );
};

export default Banner;
