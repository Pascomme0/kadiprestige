import React from 'react'
import Detailservice from '../../../components/Detailservice'
import banner from '../../../public/assurance.jpg'
import Banner from '../../../components/Banner'
import Pourquoi from '@/app/components/Pourquoi'
import mode from '../../../public/mode.jpg'


const page = () => {
  const serviceDetails = {
    titre: "BTP",
    description: "Chez Kadi Prestige, notre service BTP (Bâtiment et Travaux Publics) offre une expertise complète dans la construction et la rénovation. Nous prenons en charge tous types de projets, des petites rénovations résidentielles aux grands chantiers commerciaux et industriels. Notre équipe qualifiée assure la gestion de projet, la construction, la rénovation, et la maintenance des bâtiments. Nous nous engageons à respecter les normes de sécurité les plus strictes et à utiliser des matériaux de haute qualité pour garantir la durabilité et la qualité de nos réalisations. Que ce soit pour la construction de nouvelles structures, la rénovation d'anciens bâtiments, ou des travaux d'infrastructure, Kadi Prestige est votre partenaire de confiance pour tous vos besoins en BTP.",
    imageUrl: banner,
    couleurFond: "#ea1d24"
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