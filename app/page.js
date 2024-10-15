import React from 'react'
import Whoweare from './components/Whoweare'
import ServicesAccueil from './components/ServiceAccueil'
import Partenaire from './components/Partenaire'
import Testimonial from './components/Testimonial'
import Banner from './components/Banner'
import CTAbutton from './components/CTAbutton'
import banner from '../app/public/banner.jpg'

const page = () => {
  return (
    <div>
      <Banner imageUrl={banner} title="Accueil" />
      <Whoweare />
      <ServicesAccueil />
      <Partenaire />
      <Testimonial />
      <CTAbutton />
    </div>
  )
}
export default page