export default function ServicesAccueil() {
    const services = [
      { id: '01', title: 'Création de mode', description: 'lorem ipsum de vêtements pour les travailleurs' },
      { id: '02', title: 'Création de mode', description: 'lorem ipsum de vêtements pour les travailleurs' },
      { id: '03', title: 'Création de mode', description: 'lorem ipsum de vêtements pour les travailleurs' },
      { id: '04', title: 'Création de mode', description: 'lorem ipsum de vêtements pour les travailleurs' },
      { id: '05', title: 'Création de mode', description: 'lorem ipsum de vêtements pour les travailleurs' },
      { id: '06', title: 'Création de mode', description: 'lorem ipsum de vêtements pour les travailleurs' },
      { id: '07', title: 'Création de mode', description: 'lorem ipsum de vêtements pour les travailleurs' },
      { id: '08', title: 'Création de mode', description: 'lorem ipsum de vêtements pour les travailleurs' },
      { id: '09', title: 'Création de mode', description: 'lorem ipsum de vêtements pour les travailleurs' },
    ]
  
    return (
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-2">
            <span className="text-red-600 text-lg font-medium">Ce que nous faisons</span>
          </h2>
          <h3 className="text-center text-2xl font-bold text-blue-700 mb-12">Nos services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start mb-4">
                  <span className="text-blue-700 text-lg font-semibold mr-2">{service.id}</span>
                  <h4 className="text-red-600 text-lg  font-bold">{service.title}</h4>
                </div>
                <p className="text-blue-700  text-[19px] ">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }