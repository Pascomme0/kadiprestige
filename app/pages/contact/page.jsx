'use client'
import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import Contact from '../../components/Contact'
import Carte from '../../components/Carte'
import banner from '../../public/kpvoyage.jpg'
import contact from '../../public/contact.jpg'

const page = () => {
  const [bannerData, setBannerData] = useState({ imageUrl: '', title: '' });

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const response = await fetch('https://admin.kadiprestige.com/api/pages/9');
        const data = await response.json();
        console.log(data);
        const banner = data.imageBannieres.find(b => b.libelle === "Contact");
        setBannerData({
          imageUrl: `https://admin.kadiprestige.com${banner.path}`,
          title: banner.libelle
        });
      } catch (error) {
        console.error('Erreur lors de la récupération des données de la bannière:', error);
      }
    };

    fetchBannerData();
  }, []);

  return (
    <div>
      <Banner imageUrl={bannerData.imageUrl} title={bannerData.title} />
      <Contact />
      <Carte />
    </div>
  )
}

export default page