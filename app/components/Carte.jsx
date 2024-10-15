import React from 'react';

const Carte = () => {
  return (
    <div className="w-full h-[600px]">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d127108.09207858627!2d-4.0600009545893165!3d5.397479750948928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d5.3974996!2d-3.9776574!5e0!3m2!1sfr!2sci!4v1729020443141!5m2!1sfr!2sci"
        width="100%"
        height="100%"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Carte;
