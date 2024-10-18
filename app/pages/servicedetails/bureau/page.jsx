import React from 'react'
import Detailservice from '../../../components/Detailservice'
import banner from '../../../public/assurance.jpg'
import Banner from '../../../components/Banner'
import Pourquoi from '@/app/components/Pourquoi'
import mode from '../../../public/mode.jpg'


const page = () => {
  const serviceDetails = {
    titre: "Fourniture de matériel de bureau et consommables informatiques",
    description: "Chez Kadi Prestige, nous offrons un service complet de fourniture de matériel de bureau et de consommables informatiques pour répondre à tous vos besoins professionnels. Notre gamme étendue comprend des articles de papeterie, des meubles de bureau ergonomiques, des équipements technologiques de pointe et des consommables informatiques de haute qualité. Nous nous engageons à fournir des produits durables et écologiques, tout en garantissant la meilleure qualité et le meilleur rapport qualité-prix. Notre équipe d'experts est là pour vous conseiller et vous aider à choisir les solutions les plus adaptées à votre environnement de travail. Que vous soyez une petite entreprise ou une grande corporation, nous avons les ressources et l'expertise pour équiper votre bureau de manière efficace et professionnelle. Avec Kadi Prestige, assurez-vous d'avoir toujours à portée de main tout ce dont vous avez besoin pour un fonctionnement optimal de votre bureau.",
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