'use client'
import React, { useEffect, useState } from 'react'
import Detailservice from '../../../components/Detailservice'
import Banner from '../../../components/Banner'
import Pourquoi from '@/app/components/Pourquoi'
import mode from '../../../public/mode.jpg'

const page = () => {
  const [serviceDetails, setServiceDetails] = useState(null);

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const response = await fetch('https://admin.kadiprestige.com/api/detail_sections/26');
        const data = await response.json();
        setServiceDetails({
          titre: data.title,
          description: data.description,
          imageUrl: `https://admin.kadiprestige.com${data.imagePath}`,
          couleurFond: "#ea1d24" // Vous pouvez ajuster cette valeur si nécessaire
        });
        console.log(`URL de l'image: ${data.imagePath}`); // Vérification de l'URL de l'image
      } catch (error) {
        console.error("Erreur lors de la récupération des détails du service:", error);
      }
    };

    fetchServiceDetails();
  }, []);

  if (!serviceDetails) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <Banner imageUrl={mode} title={serviceDetails.titre} />
      <Detailservice {...serviceDetails} />
      <Pourquoi />
    </div>
  )
}

export default page