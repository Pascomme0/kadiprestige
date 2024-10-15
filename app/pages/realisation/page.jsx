import React from 'react'
import Banner from '../../components/Banner'
import Realisation from '../../components/Realisation'
import banner from '../../public/banner.jpg'

const page = () => {
  return (
    <div>
      <Banner imageUrl={banner} title="Réalisation" />
      <Realisation />
    </div>
  )
}

export default page