import React from 'react'
import Detailservice from '../../../components/Detailservice'
import banner from '../../../public/mode.jpg'
import Banner from '@/app/components/Banner'
import Services from '@/app/components/Services'

const page = () => {
  const serviceDetails = {
    titre: "Création de mode",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam.",
    imageUrl: banner,
    couleurFond: "#FFD700"
  }

  return (
    <div>
      <Banner imageUrl={banner} title={serviceDetails.titre} />
      <Detailservice {...serviceDetails} />
      <Services />
    </div>
  )
}

export default page