"use client"; // Ensure this is a Client Component

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import banner1 from '../public/materiauxx.jpg'; 
import banner2 from '../public/mode.jpg';
import banner3 from '../public/kpvoyage.jpg';

const images = [banner1, banner2, banner3];
const texts = [
  "Lorem ipsum dolor sit amet",
  "Consectetur adipiscing elit",
  "Sed do eiusmod tempor incididunt",
];

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const slicesRef = useRef([]);
  const overlayRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const textElement = textRef.current;
    const slices = slicesRef.current;
    const overlay = overlayRef.current;

    const tl = gsap.timeline({ repeat: -1 });

    images.forEach((image, index) => {
      const nextIndex = (index + 1) % images.length;
      
      tl.set(slices, { backgroundImage: `url(${image.src})` })
        .fromTo(slices, 
          { x: (i) => i % 2 === 0 ? -100 : 100, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.05, duration: 1, ease: "power2.out" }
        )
        .fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.5 }, "<")
        .fromTo(textElement,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", onStart: () => {
            textElement.textContent = texts[index];
          }}
        )
        .to({}, { duration: 2 }) // Pause
        .to(textElement, { y: -50, opacity: 0, duration: 0.5, ease: "power2.in" })
        .to(overlay, { opacity: 0, duration: 0.5 }, "<")
        .to(slices, { 
          x: (i) => i % 2 === 0 ? -100 : 100, 
          opacity: 0, 
          stagger: 0.05, 
          duration: 1, 
          ease: "power2.in"
        });
    });

    return () => tl.kill();
  }, []);

  return (
    <div className="relative top-16 mb-10 h-screen overflow-hidden">
      <div ref={containerRef} className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            ref={(el) => slicesRef.current[i] = el}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              clipPath: `inset(${i * 10}% 0 ${90 - i * 10}% 0)`,
              zIndex: i + 1
            }}
          />
        ))}
        <div 
          ref={overlayRef}
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          style={{ opacity: 0, zIndex: 11 }}
        >
          <h2
            ref={textRef}
            className="text-white text-4xl md:text-6xl font-bold text-center leading-10 px-4"
          >
            {texts[0]}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
