import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logoblanc.png'

const Footer = () => {
  return (
    <footer className="bg-[#052869] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et adresse */}
          <div>
            <Image src={logo} alt="Kadi Prestige Logo" width={150} height={50} />
            <p className="mt-4">
              Cocody Angré 8ème tranche,<br />
              Station First Petrolium en face de SICOMEX
            </p>
          </div>

          {/* Liens utiles */}
          <div>
            <h3 className="font-bold mb-4">Liens utiles</h3>
            <ul>
              {['Accueil', 'Presentation', 'Services', 'Realisation', 'Agence de voyage'].map((item) => (
                <li key={item} className="mb-2">
                  <Link href={`/${item.toLowerCase()}`}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-bold mb-4">Contacts</h3>
            <ul>
              {['+225 0101720785', '+225 0767413645', '+225 2722205737', 'kpvoyages2016@gmail.com', 'kadiprestige@gmail.com'].map((item) => (
                <li key={item} className="mb-2">{item}</li>
              ))}
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="font-bold mb-4">Nos réseaux</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Image src="/path/to/facebook-icon.png" alt="Facebook" width={24} height={24} />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Image src="/path/to/linkedin-icon.png" alt="LinkedIn" width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
