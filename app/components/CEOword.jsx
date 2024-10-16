import Image from 'next/image'
import cheffe from '../public/image.png'

export default function CEOword() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">Mot du DG</h2>
      
      <div className="flex flex-col md:flex-row items-center bg-gray-50 p-14">
        <div className="md:w-1/2 mb-8 md:mb-0 relative">
          <Image
            src={cheffe}
            alt="Mme. Kadi Diallo"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <div className="absolute -bottom-8 right-0 bg-red-600 text-white p-4 rounded-lg">
            <p className="font-bold">Mme. Kadi Diallo</p>
            <p className="text-sm">PDG Kadi prestige</p>
          </div>
        </div>
        
        <div className="md:w-1/2 md:pl-2">
          <p className="text-gray-600 mb-6">
            Chez Kadi Prestige, notre mission est de fournir des solutions innovantes et durables dans les domaines de l'hydraulique, du BTP et bien plus encore. Depuis notre création, nous nous efforçons d'apporter une valeur ajoutée à chaque projet que nous entreprenons, en mettant l'accent sur la qualité, l'efficacité et la satisfaction du client.
          </p>
          
          <p className="text-gray-600 mb-6">
            Notre engagement va au-delà des services commerciaux. Nous sommes fiers de notre ONG qui œuvre pour l'autonomisation des femmes et l'aide aux personnes démunies. Cette dimension sociale est au cœur de notre identité d'entreprise. Chez Kadi Prestige, nous croyons fermement que le succès commercial et la responsabilité sociale vont de pair pour créer un impact positif durable dans notre communauté.
          </p>
        </div>
      </div>
    </div>
  )
}
