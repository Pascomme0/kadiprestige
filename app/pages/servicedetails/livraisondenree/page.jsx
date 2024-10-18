import React from 'react'
import Detailservice from '../../../components/Detailservice'
import banner from '../../../public/assurance.jpg'
import Banner from '../../../components/Banner'
import Pourquoi from '@/app/components/Pourquoi'
import mode from '../../../public/mode.jpg'

const page = () => {
  const serviceDetails = {
    titre: "Livraison de denrées alimentaires",
    description: "Chez Kadi Prestige, notre service de livraison de denrées alimentaires est conçu pour répondre à tous vos besoins en matière d'approvisionnement alimentaire. Nous nous engageons à fournir des produits frais et de haute qualité, livrés directement à votre porte. Notre équipe expérimentée assure une manipulation soigneuse et un transport dans des conditions optimales pour préserver la fraîcheur et la qualité des aliments. Que vous soyez un particulier, un restaurant, une entreprise ou une institution, nous adaptons nos services à vos exigences spécifiques. Nous proposons une large gamme de produits, des fruits et légumes frais aux produits laitiers, en passant par les viandes, les poissons et les produits d'épicerie. Avec Kadi Prestige, bénéficiez d'un service de livraison fiable, ponctuel et personnalisé, garantissant la satisfaction de vos besoins alimentaires en toute simplicité.",
    imageUrl: banner,
    couleurFond: "#073ea2"
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