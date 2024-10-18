import React from 'react'
import Detailservice from '../../../components/Detailservice'
import banner from '../../../public/epi.jpg'
import Banner from '../../../components/Banner'
import Pourquoi from '@/app/components/Pourquoi'
import mode from '../../../public/materiauxx.jpg'

const page = () => {
  const serviceDetails = {
    titre: "Fourniture d'équipement de protection individuelle (EPI)",
    description: "Chez Kadi Prestige, nous comprenons l'importance cruciale de la sécurité sur le lieu de travail. Notre service de fourniture d'équipements de protection individuelle (EPI) est conçu pour garantir la sécurité et le bien-être de vos employés dans tous les environnements de travail. Nous proposons une large gamme d'EPI de haute qualité, comprenant des casques, des lunettes de protection, des gants, des chaussures de sécurité, des masques respiratoires et bien plus encore. Nos équipements sont conformes aux normes de sécurité les plus strictes et sont sélectionnés pour leur durabilité, leur confort et leur efficacité. Que vous travailliez dans la construction, l'industrie, la santé ou tout autre secteur nécessitant une protection spécifique, nous avons les solutions adaptées à vos besoins. Faites confiance à Kadi Prestige pour équiper votre équipe avec les meilleurs EPI du marché, assurant ainsi un environnement de travail sûr et conforme aux réglementations en vigueur.",
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