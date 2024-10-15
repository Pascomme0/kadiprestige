import Image from 'next/image'
import { Plane, CreditCard, Map, Tent, Shield, Ticket } from 'lucide-react'
import voyage from '../public/voyage.png'

const services = [
  { name: 'Tourisme', icon: Plane, color: 'bg-red-500 hover:bg-red-600' },
  { name: 'Visa', icon: CreditCard, color: 'bg-[#073EA2] hover:bg-red-600' },
  { name: 'Excursion', icon: Map, color: 'bg-[#073EA2] hover:bg-red-600' },
  { name: 'Colonie de vacances', icon: Tent, color: 'bg-[#073EA2] hover:bg-red-600' },
  { name: 'Assurance voyage', icon: Shield, color: 'bg-[#073EA2] hover:bg-red-600' },
  { name: 'Billeterie', icon: Ticket, color: 'bg-[#073EA2] hover:bg-red-600' },
]

export default function KPvoyage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">
            <span className="text-red-500">KP VOYAGES</span>
          </h1>
          <h2 className="text-2xl text-blue-600 mb-4">est une agence de voyage</h2>
          <p className="text-gray-600 mb-4">
            Vous lorem ipsume delor sit alet consortium dolor sitari ametu consori Vous lorem ipsume delor sit alet consortium
            dolor sitariametu consoriVous lorem ipsume delor sit alet consortium dolor sitari ametu consoriVous lorem ipsume delor
            sit alet consortium dolor sitari ametu consoriVous lorem ipsume delor sit alet consortium dolor sitari ametu consori
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src={voyage}
            alt="Happy traveler with passport and tickets"
            width={600}
            height={300}
            className="rounded-lg "
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${service.color} rounded-lg p-4 text-white transition-colors duration-300 h-32 w-auto relative`}
          >
            <div className="absolute top-4 left-4 bg-white rounded-full p-2">
              <service.icon className="w-6 h-6 text-gray-800" />
            </div>
            <h3 className="text-xl font-semibold mt-14">{service.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}