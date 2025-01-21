'use client'
import React, { useState, useEffect } from "react"
import Detailservice from '../../../components/Detailservice'
import banner from '../../../public/assurance.jpg'
import Banner from '../../../components/Banner'
import Pourquoi from '@/app/components/Pourquoi'
import mode from '../../../public/mode.jpg'


const Page = () => {
  const [serviceDetails, setServiceDetails] = useState({
    titre: "",
    description: "",
    imageUrl: banner,
    couleurFond: "#073ea2"
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://admin.kadiprestige.com/api/detail_sections/34")
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
  )
}

export default Page