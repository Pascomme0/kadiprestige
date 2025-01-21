"use client"

import React, { useState, useEffect } from "react"
import Detailservice from "../../../components/Detailservice"
import banner from "../../../public/tenue.jpg"
import Banner from "../../../components/Banner"
import Pourquoi from "@/app/components/Pourquoi"
import mode from "../../../public/mode.jpg"

const Page = () => {
  const [serviceDetails, setServiceDetails] = useState({
    titre: "",
    description: "",
    imageUrl: banner,
    couleurFond: "#ea1d24",
  })

  const [bannerDetails, setBannerDetails] = useState({
    title: "",
    imageUrl: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://admin.kadiprestige.com/api/detail_sections/27")
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
    };
    const fetchBannerDetails = async () => {
      try {
        const response = await fetch("https://admin.kadiprestige.com/api/detail_sections/36");
        const data = await response.json();

        setBannerDetails({
          title: data.title,
          imageUrl: `https://admin.kadiprestige.com${data.imagePath}`,
        });
      } catch (error) {
        console.error("Error fetching banner details:", error);
      }
    };

    fetchData();
    fetchBannerDetails();
  }, [])

  return (
    <div>
      <Banner imageUrl={bannerDetails.imageUrl} title={bannerDetails.title} />
      <Detailservice {...serviceDetails} />
      <Pourquoi />
    </div>
  )
}

export default Page

