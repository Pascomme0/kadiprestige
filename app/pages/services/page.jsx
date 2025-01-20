'use client'
import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import Services from '../../components/Services'

const page = () => {
  const [bannerData, setBannerData] = useState({ imageUrl: '', title: '' });

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const response = await fetch('https://admin.kadiprestige.com/api/pages/6');
        const data = await response.json();
        const imagePath = data.imageBannieres[0].path;
        const title = data.imageBannieres[0].libelle;
        setBannerData({ imageUrl: imagePath, title });
      } catch (error) {
        console.error('Erreur lors de la récupération des données de la bannière:', error);
      }
    };

    fetchBannerData();
  }, []);

  return (
    <div>
      <Banner imageUrl={`https://admin.kadiprestige.com${bannerData.imageUrl}`} title={bannerData.title} />
      <Services />
    </div>
  )
}

export default page