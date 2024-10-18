"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const temoignages = [
  {
    citation: "Kadi Prestige a réalisé un forage d'eau potable pour notre village. Leur expertise technique et leur professionnalisme sont remarquables.",
    auteur: "Amadou Koné",
    role: "Chef de village"
  },
  {
    citation: "Grâce à Kadi Prestige, notre école a maintenant accès à l'eau potable. Leur travail a considérablement amélioré les conditions d'hygiène pour nos élèves.",
    auteur: "Mariam Diallo",
    role: "Directrice d'école"
  },
  {
    citation: "Le service de canalisation de Kadi Prestige est exceptionnel. Ils ont effectué le raccordement au réseau SODECI rapidement et efficacement.",
    auteur: "Yves Kouassi",
    role: "Propriétaire immobilier"
  },
  {
    citation: "La qualité de l'eau 'Kadi Prestige' est excellente. Nous sommes ravis de l'utiliser dans notre restaurant.",
    auteur: "Fatou Bamba",
    role: "Restauratrice"
  },
  {
    citation: "Les uniformes confectionnés par Kadi Prestige sont de haute qualité et parfaitement adaptés à nos besoins. Un service client impeccable.",
    auteur: "Luc Koffi",
    role: "Directeur des ressources humaines"
  },
  {
    citation: "L'ONG de Kadi Prestige a transformé la vie de nombreuses femmes dans notre communauté grâce à leurs programmes d'autonomisation. Leur engagement est inspirant.",
    auteur: "Aya Touré",
    role: "Bénéficiaire du programme d'autonomisation"
  },
];

const Temoignage = () => {
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
                <blockquote className="text-white mb-4 flex-grow">"{temoignage.citation}"</blockquote>
                <div className="flex items-center mt-4">
                  <div>
                    <p className="font-semibold text-white">{temoignage.auteur}</p>
                    <p className="text-sm text-gray-200">{temoignage.role}</p>
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
