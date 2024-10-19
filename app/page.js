import React from 'react'
import Whoweare from './components/Whoweare'
import Partenaire from './components/Partenaire'
import Testimonial from './components/Testimonial'
import Banner from './components/Banner'
import CTAbutton from './components/CTAbutton'
import Blog from './components/Blog'
import Services from './components/Services'
import Hero from './components/Hero'



const page = () => {

  return (
    <div>
      <Hero />
      <Whoweare />
      <Services />
      <Partenaire />
      <Testimonial />
      <Blog />
      <CTAbutton />
    </div>
  )
}
export default page