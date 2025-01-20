'use client'
import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import Realisation from '../../components/Realisation'

const page = () => {
  const [bannerData, setBannerData] = useState({ imageUrl: '', title: '' });

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const response = await fetch('https://admin.kadiprestige.com/api/pages/7');
        const data = await response.json();
        const banner = data.imageBannieres[0];
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
      <Realisation />
    </div>
  )
}

export default page