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
            alt="Mme. Lorem"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <div className="absolute -bottom-8 right-0 bg-red-600 text-white p-4 rounded-lg">
            <p className="font-bold">Mme. Lorem</p>
            <p className="text-sm">PDG Kadi prestige</p>
          </div>
        </div>
        
        <div className="md:w-1/2 md:pl-2">
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consor dolor sit amet dolor sit amet consor dolor sit amet. Lorem ipsum dolor sit amet consor dolor sit amet dolor sit amet consor dolor sit amet. Lorem ipsum dolor sit amet consor dolor sit amet dolor sit amet consor dolor sit amet.
          </p>
          
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consor dolor sit amet dolor sit amet consor dolor sit amet. Lorem ipsum dolor sit amet consor dolor sit amet dolor sit amet consor dolor sit amet. Lorem ipsum dolor sit amet consor dolor sit amet dolor sit amet consor dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  )
}
