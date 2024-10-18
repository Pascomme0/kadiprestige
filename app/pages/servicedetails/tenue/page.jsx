import React from 'react'
import Detailservice from '../../../components/Detailservice'
import banner from '../../../public/tenue.jpg'
import Banner from '../../../components/Banner'
import Pourquoi from '@/app/components/Pourquoi'
import mode from '../../../public/mode.jpg'     

const page = () => {
  const serviceDetails = {
    titre: "Confection de tenue de travail",
    description: "Chez Kadi Prestige, notre service de confection de tenues de travail allie fonctionnalité, confort et style professionnel. Nous créons des uniformes sur mesure adaptés à tous les secteurs d'activité, en tenant compte des exigences spécifiques de chaque métier. Notre équipe de designers expérimentés travaille en étroite collaboration avec vous pour concevoir des tenues qui reflètent l'identité de votre entreprise tout en assurant la sécurité et le confort de vos employés. Nous utilisons des tissus de haute qualité, résistants et faciles d'entretien, pour garantir la durabilité de nos créations. Que vous ayez besoin de tenues pour l'industrie, l'hôtellerie, la santé ou tout autre domaine, nous vous offrons des solutions personnalisées qui répondent à vos besoins spécifiques. Avec Kadi Prestige, habillez votre équipe avec élégance et professionnalisme, renforçant ainsi l'image de marque de votre entreprise.",
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