import React from 'react'
import Banner from '../../components/Banner'
import FAQSection from '@/app/components/FAQsection'
import voyage from '../../public/KPvoyage.jpg'
import KPvoyage from '../../components/KPvoyage'

const page = () => {
  return (
    <div>
        <Banner imageUrl={voyage} title={<>Agence<br />de voyage</>} />
        <KPvoyage />
        <FAQSection />
    </div>
  )
}

export default page