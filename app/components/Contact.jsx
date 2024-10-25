"use client";

import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import voyage from '../public/voyage.png'
import { useMediaQuery } from 'react-responsive';
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [focusedInput, setFocusedInput] = useState(null);
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    message: ''
  });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [captchaToken, setCaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCaptchaChange = (value) => {
    setCaptchaToken(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).every(field => field.trim() !== '') && captchaToken) {
      console.log('Informations du formulaire:', formData);
      console.log('Token reCAPTCHA:', captchaToken);
      
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        message: ''
      });
      
      setMessageSent(true);
      
      setTimeout(() => {
        setMessageSent(false);
      }, 3000);

      recaptchaRef.current.reset();
      setCaptchaToken(null);
    } else {
      alert('Veuillez remplir tous les champs du formulaire et vérifier le reCAPTCHA.');
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row justify-between mb-28">
        <div className="flex flex-col items-center mb-6 md:mb-0">
          <div className="bg-red-100 rounded-full p-4 mb-6">
            <Mail className="text-red-600 w-9 h-9" />
          </div>
          <div className="text-center">
            <h3 className="text-blue-700 text-[20px] font-semibold mb-2">adresse mail</h3>
            <p className="text-gray-600 text-[17px]">kadiprestige@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col items-center mb-6 md:mb-0">
          <div className="bg-red-100 rounded-full p-4 mb-6">
            <Phone className="text-red-600 w-9 h-9" />
          </div>
          <div className="text-center">
            <h3 className="text-blue-700 text-[20px] font-semibold mb-2">Téléphone</h3>
            <p className="text-gray-600 text-[17px]">22 54 37 89 89</p>
            <p className="text-gray-600 text-[17px]">22 54 37 88 88</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-red-100 rounded-full p-4 mb-6">
            <MapPin className="text-red-600 w-9 h-9" />
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
                placeholder="Nom" 
                value={formData.nom}
                onChange={handleChange}
                className={`w-1/2 mr-2 p-2 border rounded focus:outline-none ${focusedInput === 'nom' ? 'border-red-600' : 'border-gray-300'}`}
                onFocus={() => handleFocus('nom')}
                onBlur={handleBlur}
                required
              />
              <input 
                type="text" 
                name="prenom"
                placeholder="Prénom" 
                value={formData.prenom}
                onChange={handleChange}
                className={`w-1/2 ml-2 p-2 border rounded focus:outline-none ${focusedInput === 'prenom' ? 'border-red-600' : 'border-gray-300'}`}
                onFocus={() => handleFocus('prenom')}
                onBlur={handleBlur}
                required
              />
            </div>
            <input 
              type="email" 
              name="email"
              placeholder="Email" 
              value={formData.email}
              onChange={handleChange}
              className={`w-full mb-4 p-2 border rounded focus:outline-none ${focusedInput === 'email' ? 'border-red-600' : 'border-gray-300'}`}
              onFocus={() => handleFocus('email')}
              onBlur={handleBlur}
              required
            />
            <textarea 
              name="message"
              placeholder="Message" 
              value={formData.message}
              onChange={handleChange}
              className={`w-full h-32 mb-4 p-2 border rounded focus:outline-none ${focusedInput === 'message' ? 'border-red-600' : 'border-gray-300'}`}
              onFocus={() => handleFocus('message')}
              onBlur={handleBlur}
              required
            ></textarea>
            
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6Ldt4msqAAAAAARK7SzSjbpqw1OAkzU7ID7HoDuK"
              onChange={handleCaptchaChange}
            />
            
            <button 
              type="submit" 
              className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors mt-4"
              disabled={!captchaToken}
            >
              Envoyer
            </button>
          </form>
          {messageSent && (
            <div className="absolute left-60 top-[1090px] mt-4 p-2 bg-green-100 text-green-700 rounded">
              Message envoyé avec succès !
            </div>
          )}
        </div>
        {!isMobile && (
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
        )}
      </div>
    </div>
  );
}
