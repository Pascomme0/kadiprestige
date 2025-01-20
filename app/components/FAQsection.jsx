"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState(0)
  const [faqData, setFaqData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://admin.kadiprestige.com/api/pages')
      .then(response => response.json())
      .then(data => {
        const faqSection = data.member.find(page => 
          page.sections.some(section => section.code === 'FAQ')
        )
        const faqDetails = faqSection.sections.find(section => section.code === 'FAQ').detailSections
        setFaqData(faqDetails.map(detail => ({
          question: detail.title,
          answer: detail.description
        })))
        setLoading(false)
      })
      .catch(error => {
        setError('Erreur lors du chargement des données FAQ')
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Chargement...</p>
  if (error) return <p>{error}</p>

  return (
    <motion.div 
      className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-2 text-center">Vous avez quelques questions ?</h2>
          <p className="text-gray-600 mb-8 text-center">Voici quelques questions fréquemment posées</p>
        </motion.div>
        
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div 
              key={index} 
              className="border-b border-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <button
                className="flex justify-between items-center w-full py-4 text-left"
                onClick={() => setOpenQuestion(openQuestion === index ? -1 : index)}
                aria-expanded={openQuestion === index}
              >
                <span className="text-blue-700 text-[17px] font-medium">{faq.question}</span>
                <span className="text-2xl transition-transform duration-300" style={{
                  transform: openQuestion === index ? 'rotate(45deg)' : 'rotate(0deg)'
                }}>
                  +
                </span>
              </button>
              <motion.div 
                className="overflow-hidden"
                initial={{ height: 0 }}
                animate={{ height: openQuestion === index ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="pb-4 text-gray-600">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <Link href="../pages/contact">
            <button className="bg-[#EA1D24] text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors">
              J'ai une question
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}