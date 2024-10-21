import React from 'react'
import Banner from '../../components/Banner'
import Presentation from '../../components/Presentation'
import Pourquoi from '@/app/components/Pourquoi'
import banner from '../../public/kpvoyage.jpg'
import CEOword from '@/app/components/CEOword'
import Services from '@/app/components/Services'
import presentation from '../../public/presentation.jpg'

const Present = () => {
  return (
    <div>
      <Banner imageUrl={presentation} title="Présentation" />
      <Presentation />
      <Pourquoi />
      <Services />
      <CEOword />

    </div>
  )
}

export default Present