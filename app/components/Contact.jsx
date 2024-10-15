import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import voyage from '../public/voyage.png'

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row justify-between mb-28">
        <div className="flex flex-col items-center mb-6 md:mb-0">
          <div className="bg-red-100 rounded-full p-3 mb-2">
            <Mail className="text-red-600 w-6 h-6" />
          </div>
          <div className="text-center">
            <h3 className="text-blue-700 font-semibold">adresse mail</h3>
            <p className="text-gray-600 text-sm">kadiprestige@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col items-center mb-6 md:mb-0">
          <div className="bg-red-100 rounded-full p-3 mb-2">
            <Phone className="text-red-600 w-6 h-6" />
          </div>
          <div className="text-center">
            <h3 className="text-blue-700 font-semibold">Téléphone</h3>
            <p className="text-gray-600 text-sm">22 54 37 89 89</p>
            <p className="text-gray-600 text-sm">22 54 37 88 88</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-red-100 rounded-full p-3 mb-2">
            <MapPin className="text-red-600 w-6 h-6" />
          </div>
          <div className="text-center">
            <h3 className="text-blue-700 font-semibold">Localisation</h3>
            <p className="text-gray-600 text-sm">Abidjan, plateau</p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">CONTACT</h2>
          <h3 className="text-xl text-red-600 mb-6">Restez en contact avec nous</h3>
          <form>
            <div className="flex mb-4">
              <input type="text" placeholder="Nom" className="w-1/2 mr-2 p-2 border border-gray-300 rounded" />
              <input type="text" placeholder="Prénom" className="w-1/2 ml-2 p-2 border border-gray-300 rounded" />
            </div>
            <input type="email" placeholder="Email" className="w-full mb-4 p-2 border border-gray-300 rounded" />
            <textarea placeholder="Message" className="w-full h-32 mb-4 p-2 border border-gray-300 rounded"></textarea>
            <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors">
              Envoyer
            </button>
          </form>
        </div>
        <div className="md:w-1/2 relative">
          <div className="absolute inset-0 bg-red-600 rounded-lg transform translate-x-4 translate-y-2"></div>
          <Image 
            src={voyage} 
            alt="Service client" 
            width={500} 
            height={300} 
            layout="responsive"
            className="rounded-lg relative z-10"
          />
        </div>
      </div>
    </div>
  );
}
