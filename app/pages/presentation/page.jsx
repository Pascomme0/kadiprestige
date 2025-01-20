'use client'
import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import Presentation from '../../components/Presentation'
import Pourquoi from '@/app/components/Pourquoi'
import CEOword from '@/app/components/CEOword'
import Services from '@/app/components/Services'

const Present = () => {
  const [bannerData, setBannerData] = useState({ imageUrl: '', title: '' });

  useEffect(() => {
    fetch('https://admin.kadiprestige.com/api/pages/5')
      .then(response => response.json())
      .then(data => {
        const imageBanniere = data.imageBannieres[0];
        setBannerData({
          imageUrl: `https://admin.kadiprestige.com${imageBanniere.path}`,
          title: imageBanniere.libelle
        });
      })
      .catch(error => console.error('Erreur lors de la récupération des données:', error));
  }, []);

  return (
    <div>
      <Banner imageUrl={bannerData.imageUrl} title={bannerData.title} />
      <Presentation />
      <Pourquoi />
      <Services />
      <CEOword />
    </div>
  )
}

export default Present