import React from 'react'
import Banner from '../../components/Banner'
import Presentation from '../../components/Presentation'
import Pourquoi from '@/app/components/Pourquoi'
import banner from '../../public/banner.jpg'
import CEOword from '@/app/components/CEOword'
import Services from '@/app/components/Services'

const Present = () => {
  return (
    <div>
      <Banner imageUrl={banner} title="Présentation" />
      <Presentation />
      <Pourquoi />
      <Services />
      <CEOword />

    </div>
  )
}

export default Present