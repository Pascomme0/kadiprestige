import React from 'react'
import Banner from '../../components/Banner'
import Services from '../../components/Services'
import service from '../../public/service.jpg'

const page = () => {
  return (
    <div>
      <Banner imageUrl={service} title="Services" />
      <Services />
    </div>
  )
}

export default page