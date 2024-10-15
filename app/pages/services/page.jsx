import React from 'react'
import Banner from '../../components/Banner'
import Services from '../../components/Services'
import banner from '../../public/banner.jpg'

const page = () => {
  return (
    <div>
      <Banner imageUrl={banner} title="Services" />
      <Services />
    </div>
  )
}

export default page