import React from 'react'
import Detailservice from '../../../components/Detailservice'
import banner from '../../../public/assurance.jpg'
import Banner from '../../../components/Banner'
import Pourquoi from '@/app/components/Pourquoi'
import mode from '../../../public/mode.jpg'


const page = () => {
  const serviceDetails = {
    titre: "Drainage et Hydraulique",
    description: "Chez Kadi Prestige, notre service de Drainage et Hydraulique offre des solutions complètes pour la gestion de l'eau. Nous concevons et installons des systèmes de drainage efficaces pour prévenir les inondations et l'accumulation d'eau. Notre expertise s'étend également aux systèmes hydrauliques, assurant une distribution et une gestion optimales de l'eau dans divers contextes. Que ce soit pour des projets résidentiels, commerciaux ou industriels, notre équipe qualifiée utilise des technologies de pointe pour créer des solutions durables et respectueuses de l'environnement. Nous nous engageons à résoudre les problèmes d'eau complexes, à améliorer l'irrigation, et à optimiser l'utilisation des ressources hydriques. Avec Kadi Prestige, vous bénéficiez d'un service professionnel qui garantit une gestion de l'eau efficace et responsable pour tous vos besoins en drainage et hydraulique.",
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