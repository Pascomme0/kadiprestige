'use client'
import Image from 'next/image'
import cheffe from '../public/image.png'
import { motion } from 'framer-motion'

export default function CEOword() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center text-blue-700 mb-12"
      >
        Mot du DG
      </motion.h2>
      
      <div className="flex flex-col md:flex-row items-center bg-gray-50 p-14">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mb-8 md:mb-0 relative"
        >
          <Image
            src={cheffe}
            alt="Mme. Kadi Diallo"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute -bottom-8 right-0 bg-red-600 text-white p-4 rounded-lg"
          >
            <p className="font-bold">Mme. Kadi Diallo</p>
            <p className="text-sm">PDG Kadi prestige</p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 md:pl-2"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-600 mb-6"
          >
            Chez Kadi Prestige, notre mission est de fournir des solutions innovantes et durables dans les domaines de l'hydraulique, du BTP et bien plus encore. Depuis notre création, nous nous efforçons d'apporter une valeur ajoutée à chaque projet que nous entreprenons, en mettant l'accent sur la qualité, l'efficacité et la satisfaction du client.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-gray-600 mb-6"
          >
            Notre engagement va au-delà des services commerciaux. Nous sommes fiers de notre ONG qui œuvre pour l'autonomisation des femmes et l'aide aux personnes démunies. Cette dimension sociale est au cœur de notre identité d'entreprise. Chez Kadi Prestige, nous croyons fermement que le succès commercial et la responsabilité sociale vont de pair pour créer un impact positif durable dans notre communauté.
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}
