import React from 'react'
import Detailservice from '../../../components/Detailservice'
import banner from '../../../public/tenue.jpg'
import Banner from '../../../components/Banner'
import Pourquoi from '@/app/components/Pourquoi'
import mode from '../../../public/mode.jpg'

const page = () => {
  const serviceDetails = {
    titre: "Création de mode",
    description: "Chez Kadi Prestige, notre service de création de mode est dédié à l'expression de votre style unique. Notre équipe de designers talentueux travaille en étroite collaboration avec vous pour créer des vêtements sur mesure qui reflètent votre personnalité et répondent à vos besoins spécifiques. Que ce soit pour des tenues de tous les jours, des vêtements de travail élégants ou des créations haute couture pour des occasions spéciales, nous mettons notre expertise à votre service. Nous utilisons des tissus de haute qualité et des techniques de couture avancées pour garantir des finitions impeccables. Notre processus créatif inclut des consultations personnalisées, des essayages minutieux et des ajustements précis pour assurer une coupe parfaite. Avec Kadi Prestige, vivez une expérience de mode unique où votre vision prend vie, créant des pièces intemporelles qui vous feront vous sentir confiant et élégant en toute occasion.",
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