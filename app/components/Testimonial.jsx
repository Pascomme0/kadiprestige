"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';

const testimonials = [
  {
    quote: "Impressionné par le professionnalisme et l'attention aux détails.",
    author: "Clarisse Molou",
    role: "@spaceX"
  },
  {
    quote: "Une expérience fluide du début à la fin. Je recommande vivement !",
    author: "Kara Lionnel",
    role: "@google"
  },
  {
    quote: "Fiable et digne de confiance. A rendu ma vie tellement plus facile !",
    author: "Jane Michael",
    role: "@amazon"
  },
  {
    quote: "Impressionné par le professionnalisme et l'attention aux détails.",
    author: "Guy Demel",
    role: "@spaceX"
  },
  {
    quote: "Une expérience fluide du début à la fin. Je recommande vivement !",
    author: "Kara Lynn",
    role: "@google"
  }
];

const Testimonial = () => {
  return (
    <section className="py-16 my-24 bg-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-2xl font-bold text-[#073EA2] mb-2">Expériences Client Transformatives</h2>
      <p className="text-center text-lg text-gray-600 mb-12">Ils témoignent de notre professionnalisme et de notre expertise</p>
        
        <Swiper
          modules={[Autoplay]}
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
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg shadow-xl">
                <blockquote className="text-gray-600 mb-4">"{testimonial.quote}"</blockquote>
                <div className="flex items-center">
              
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
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

export default Testimonial;
