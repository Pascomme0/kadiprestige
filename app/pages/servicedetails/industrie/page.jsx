import React from 'react'
import Detailservice from '../../../components/Detailservice'
import banner from '../../../public/assurance.jpg'
import Banner from '../../../components/Banner'
import Pourquoi from '@/app/components/Pourquoi'
import mode from '../../../public/mode.jpg'

const page = () => {
  const serviceDetails = {
    titre: "Maintenance industrielle",
    description: "Chez Kadi Prestige, notre service de maintenance industrielle est conçu pour optimiser la performance et la longévité de vos équipements industriels. Notre équipe d'experts qualifiés offre une gamme complète de services, incluant la maintenance préventive, prédictive et corrective. Nous utilisons des technologies de pointe pour diagnostiquer et résoudre rapidement les problèmes, minimisant ainsi les temps d'arrêt coûteux. Notre approche proactive aide à prévenir les pannes, à améliorer l'efficacité opérationnelle et à réduire les coûts de maintenance à long terme. Que ce soit pour l'entretien régulier, la réparation d'urgence ou la mise à niveau des systèmes, Kadi Prestige s'engage à fournir des solutions sur mesure qui répondent aux exigences spécifiques de votre industrie. Faites confiance à notre expertise pour maintenir vos installations en parfait état de fonctionnement, assurant ainsi la continuité et la productivité de vos opérations industrielles.",
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