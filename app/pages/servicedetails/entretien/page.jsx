import React from 'react'
import Detailservice from '../../../components/Detailservice'
import banner from '../../../public/assurance.jpg'
import Banner from '../../../components/Banner'
import Pourquoi from '@/app/components/Pourquoi'
import mode from '../../../public/mode.jpg'

const page = () => {
  const serviceDetails = {
    titre: "Entretien, Nettoyage, Aménagement de bureaux et espaces verts",
    description: "Chez Kadi Prestige, nous offrons un service complet d'entretien, de nettoyage et d'aménagement pour vos bureaux et espaces verts. Notre équipe qualifiée assure un environnement de travail propre, sain et agréable. Nous utilisons des techniques de nettoyage écologiques et efficaces pour maintenir vos locaux impeccables. Notre service d'aménagement de bureaux crée des espaces fonctionnels et esthétiques, optimisant votre productivité. Pour vos espaces verts, nous proposons un entretien régulier et un aménagement paysager créatif, contribuant à un cadre de travail verdoyant et relaxant. Que ce soit pour un nettoyage ponctuel ou un contrat d'entretien à long terme, Kadi Prestige s'engage à fournir un service de qualité supérieure, adapté à vos besoins spécifiques.",
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