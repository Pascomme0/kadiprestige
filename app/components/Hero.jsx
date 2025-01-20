"use client"; // Ensure this is a Client Component

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero = () => {
  const [banners, setBanners] = useState([]);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const slicesRef = useRef([]);
  const overlayRef = useRef(null);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch('https://admin.kadiprestige.com/api/pages/4');
        const data = await response.json();
        setBanners(data.imageBannieres);
      } catch (error) {
        console.error("Erreur lors de la récupération des données de l'API", error);
      }
    };

    fetchBanners();
  }, []);

  useEffect(() => {
    if (banners.length === 0) return;

    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const textElement = textRef.current;
    const slices = slicesRef.current;
    const overlay = overlayRef.current;

    const tl = gsap.timeline({ repeat: -1 });

    banners.forEach((banner, index) => {
      const nextIndex = (index + 1) % banners.length;
      
      tl.set(slices, { backgroundImage: `url(https://admin.kadiprestige.com${banner.path})` })
        .fromTo(slices, 
          { x: (i) => i % 2 === 0 ? -100 : 100, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.05, duration: 1, ease: "power2.out" }
        )
        .fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.5 }, "<")
        .fromTo(textElement,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", onStart: () => {
            textElement.textContent = banner.libelle;
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

    // Effet de parallaxe
    gsap.to(container, {
      y: '30%',
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    // Effet de parallaxe pour le texte
    gsap.to(textElement, {
      y: '50%',
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [banners]);

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
          className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center"
          style={{ opacity: 0, zIndex: 11 }}
        >
          <h2
            ref={textRef}
            className="text-white text-4xl md:text-6xl font-bold text-center leading-10 px-4"
          >
            {banners.length > 0 ? banners[0].libelle : ''}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
