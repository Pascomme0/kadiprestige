import React from 'react'
import Banner from '../../components/Banner'
import Contact from '../../components/Contact'
import Carte from '../../components/Carte'
import banner from '../../public/banner.jpg'
const page = () => {
  return (
    <div>
      <Banner imageUrl={banner} title="Contact" />
      <Contact />
      <Carte />
    </div>
  )
}

export default page