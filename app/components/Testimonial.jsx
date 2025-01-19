"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const Temoignage = () => {
  const [temoignages, setTemoignages] = React.useState([]);

  React.useEffect(() => {
    const fetchTemoignages = async () => {
      const response = await fetch('https://admin.kadiprestige.com/api/commentaires');
      const data = await response.json();
      setTemoignages(data.member); // Met à jour l'état avec les commentaires récupérés
    };

    fetchTemoignages();
  }, []);

  const cleanHTML = (html) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || '';
  };

  return (
    <section className="py-16 my-24 bg-gradient-to-r from-[#073ea2] to-[#ea1d24] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-2">Ce que disent nos clients</h2>
        <p className="text-center text-lg text-gray-200 mb-12">L'excellence au service de vos besoins en eau et bien plus</p>
        
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {temoignages.map((temoignage, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-xl h-full flex flex-col backdrop-blur-sm">
                <blockquote className="text-white mb-4 flex-grow">"{cleanHTML(temoignage.description)}"</blockquote>
                <div className="flex items-center mt-4">
                  <div>
                    <p className="font-semibold text-white">{temoignage.author}</p>
                    <p className="text-sm text-gray-200">{temoignage.fonction}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Temoignage;
