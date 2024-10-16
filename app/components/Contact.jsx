"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import voyage from '../public/voyage.png'

export default function Contact() {
  const [focusedInput, setFocusedInput] = useState(null);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    message: ''
  });

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'pacomebrou2003@gmail.com',
          subject: 'Nouveau message de contact',
          text: `
            Nom: ${formData.nom}
            Prénom: ${formData.prenom}
            Email: ${formData.email}
            Message: ${formData.message}
          `
        }),
      });

      // Ce bloc de code gère la réponse de l'API après l'envoi du formulaire
      if (response.ok) {
        // Si la réponse est positive, on informe l'utilisateur et on réinitialise le formulaire
        alert('Message envoyé avec succès !');
        setFormData({ nom: '', prenom: '', email: '', message: '' });
      } else {
        // Si la réponse est négative, on affiche un message d'erreur
        alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
      }
    } catch (error) {
      // En cas d'erreur lors de l'exécution de la requête, on log l'erreur et on informe l'utilisateur
      console.error('Erreur:', error);
      alert('Une erreur s\'est produite. Veuillez réessayer plus tard.');
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row justify-between mb-28">
        <div className="flex flex-col items-center mb-6 md:mb-0">
          <div className="bg-red-100 rounded-full p-6 mb-6">
            <Mail className="text-red-600 w-10 h-10" />
          </div>
          <div className="text-center">
            <h3 className="text-blue-700 text-[20px] font-semibold mb-2">adresse mail</h3>
            <p className="text-gray-600 text-[17px]">kadiprestige@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col items-center mb-6 md:mb-0">
          <div className="bg-red-100 rounded-full p-6 mb-6">
            <Phone className="text-red-600 w-10 h-10" />
          </div>
          <div className="text-center">
            <h3 className="text-blue-700 text-[20px] font-semibold mb-2">Téléphone</h3>
            <p className="text-gray-600 text-[17px]">22 54 37 89 89</p>
            <p className="text-gray-600 text-[17px]">22 54 37 88 88</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-red-100 rounded-full p-6 mb-6">
            <MapPin className="text-red-600 w-10 h-10" />
          </div>
          <div className="text-center">
            <h3 className="text-blue-700 text-[20px] font-semibold mb-2">Localisation</h3>
            <p className="text-gray-600 text-[17px]">Abidjan, plateau</p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row mb-5">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">CONTACT</h2>
          <h3 className="text-xl text-red-600 mb-6">Restez en contact avec nous</h3>
          <form onSubmit={handleSubmit}>
            <div className="flex mb-4">
              <input 
                type="text" 
                name="nom"
                value={formData.nom}
                onChange={handleInputChange}
                placeholder="Nom" 
                className={`w-1/2 mr-2 p-2 border rounded focus:outline-none ${focusedInput === 'nom' ? 'border-red-600' : 'border-gray-300'}`}
                onFocus={() => handleFocus('nom')}
                onBlur={handleBlur}
              />
              <input 
                type="text" 
                name="prenom"
                value={formData.prenom}
                onChange={handleInputChange}
                placeholder="Prénom" 
                className={`w-1/2 ml-2 p-2 border rounded focus:outline-none ${focusedInput === 'prenom' ? 'border-red-600' : 'border-gray-300'}`}
                onFocus={() => handleFocus('prenom')}
                onBlur={handleBlur}
              />
            </div>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email" 
              className={`w-full mb-4 p-2 border rounded focus:outline-none ${focusedInput === 'email' ? 'border-red-600' : 'border-gray-300'}`}
              onFocus={() => handleFocus('email')}
              onBlur={handleBlur}
            />
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message" 
              className={`w-full h-32 mb-4 p-2 border rounded focus:outline-none ${focusedInput === 'message' ? 'border-red-600' : 'border-gray-300'}`}
              onFocus={() => handleFocus('message')}
              onBlur={handleBlur}
            ></textarea>
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
