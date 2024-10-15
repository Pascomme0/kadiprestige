import React from 'react'
import Banner from '../../components/Banner'
import KPvoyage from '@/app/components/KPvoyage'
import FAQSection from '@/app/components/FAQsection'
import banner from '../../public/banner.jpg'
const page = () => {
  return (
    <div>
        <Banner imageUrl={banner} title="Agence de voyage" />
        <KPvoyage />
        <FAQSection />
    </div>
  )
}

export default page