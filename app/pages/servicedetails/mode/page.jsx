'use client';

import React, { useEffect, useState } from 'react';
import Detailservice from '../../../components/Detailservice';
import Banner from '../../../components/Banner';
import Pourquoi from '@/app/components/Pourquoi';

const Page = () => {
  const [serviceDetails, setServiceDetails] = useState({
    titre: "",
    description: "",
    imageUrl: "",
    couleurFond: "#ea1d24",
  });

  const [bannerDetails, setBannerDetails] = useState({
    title: "",
    imageUrl: "",
  });

  useEffect(() => {
    // fetch details for the Detailservice component
    const fetchServiceDetails = async () => {
      try {
        const response = await fetch("https://admin.kadiprestige.com/api/detail_sections/26");
        const data = await response.json();

        setServiceDetails((prevState) => ({
          ...prevState,
          titre: data.title,
          description: data.description,
          imageUrl: `https://admin.kadiprestige.com${data.imagePath}`,
        }));
      } catch (error) {
        console.error("Error fetching service details:", error);
      }
    };

    // fetch details for the Banner component
    const fetchBannerDetails = async () => {
      try {
        const response = await fetch("https://admin.kadiprestige.com/api/detail_sections/35");
        const data = await response.json();

        setBannerDetails({
          title: data.title,
          imageUrl: `https://admin.kadiprestige.com${data.imagePath}`,
        });
      } catch (error) {
        console.error("Error fetching banner details:", error);
      }
    };

    fetchServiceDetails();
    fetchBannerDetails();
  }, []);

  return (
    <div>
      <Banner imageUrl={bannerDetails.imageUrl} title={bannerDetails.title} />
      <Detailservice {...serviceDetails} />
      <Pourquoi />
    </div>
  );
};

export default Page;
