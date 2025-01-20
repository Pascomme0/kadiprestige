'use client'
import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import FAQSection from '@/app/components/FAQsection'
import KPvoyage from '../../components/KPvoyage'

const page = () => {
  const [bannerData, setBannerData] = useState({ imageUrl: '', title: '' });

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const response = await fetch('https://admin.kadiprestige.com/api/pages/8');
        const data = await response.json();
        const imagePath = `https://admin.kadiprestige.com${data.imageBannieres[0].path}`;
        const title = data.imageBannieres[0].libelle;
        setBannerData({ imageUrl: imagePath, title: title });
      } catch (error) {
        console.error('Erreur lors de la récupération des données de la bannière:', error);
      }
    };

    fetchBannerData();
  }, []);

  return (
    <div>
        <Banner imageUrl={bannerData.imageUrl} title={<>{bannerData.title}</>} />
        <KPvoyage />
        <FAQSection />
    </div>
  )
}

export default page