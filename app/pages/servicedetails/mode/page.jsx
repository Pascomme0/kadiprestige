'use client';

import React, { useEffect, useState } from 'react';
import Detailservice from '../../../components/Detailservice';
import Banner from '../../../components/Banner';
import Pourquoi from '@/app/components/Pourquoi';
import mode from '../../../public/mode.jpg';

const Page = () => {
  const [serviceDetails, setServiceDetails] = useState({
    titre: "",
    description: "",
    imageUrl: mode,
    couleurFond: "#ea1d24"
  })
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://admin.kadiprestige.com/api/detail_sections/26")
        const data = await response.json()

        setServiceDetails((prevState) => ({
          ...prevState,
          titre: data.title,
          description: data.description,
          imageUrl: `https://admin.kadiprestige.com${data.imagePath}`,
        }))
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <Banner imageUrl={mode} title={serviceDetails.titre} />
      <Detailservice {...serviceDetails} />
      <Pourquoi />
    </div>
  );
};

export default Page;
  