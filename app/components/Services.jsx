import { Share2 } from 'lucide-react'

export default function Services() {
  const services = [
    { title: 'Creation de mode', description: 'Nous confectionnons des vêtements personnalisés pour votre compte' },
    { title: 'Creation de mode', description: 'Nous confectionnons des vêtements personnalisés pour votre compte' },
    { title: 'Creation de mode', description: 'Nous confectionnons des vêtements personnalisés pour votre compte' },
    { title: 'Creation de mode', description: 'Nous confectionnons des vêtements personnalisés pour votre compte' },
    { title: 'Creation de mode', description: 'Nous confectionnons des vêtements personnalisés pour votre compte' },
    { title: 'Creation de mode', description: 'Nous confectionnons des vêtements personnalisés pour votre compte' },
    { title: 'Creation de mode', description: 'Nous confectionnons des vêtements personnalisés pour votre compte' },
    { title: 'Creation de mode', description: 'Nous confectionnons des vêtements personnalisés pour votre compte' },
    { title: 'Creation de mode', description: 'Nous confectionnons des vêtements personnalisés pour votre compte' },
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-2">
          <span className="text-red-600 text-lg font-medium">Ce que nous offrons</span>
        </h2>
        <h3 className="text-center text-3xl font-bold text-blue-700 mb-12">Nos services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border border-gray-300 p-6 rounded-lg">
              <Share2 className="text-[#EA1D24] w-8 h-8 mb-4" />
              <h4 className="text-blue-700 font-medium text-lg mb-2">{service.title}</h4>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}