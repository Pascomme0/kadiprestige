"use client"

import { useState } from 'react'
import { MessageSquare } from 'lucide-react'

export default function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState(0)

  const faqData = [
    {
      question: "Comment ça marche ?",
      answer: "Vous lorem ipsum dolor sit amet consectetur elit amet? Vous lorem ipsum dolor sit amet consectetur elit amet? Vous lorem ipsum dolor sit amet consectetur elit amet? Vous lorem ipsum dolor sit amet consectetur elit amet?"
    },
    {
      question: "Comment ça marche ?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      question: "Comment ça marche ?",
      answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "Comment ça marche ?",
      answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  ]

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-start">
          <div className="w-2/3 pr-8">
            <h2 className="text-3xl font-bold mb-2">Vous avez quelques questions ?</h2>
            <p className="text-gray-600 mb-8">Voici quelques questions fréquemment posées</p>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    className="flex justify-between items-center w-full py-4 text-left"
                    onClick={() => setOpenQuestion(openQuestion === index ? -1 : index)}
                    aria-expanded={openQuestion === index}
                  >
                    <span className="text-blue-600 font-medium">{faq.question}</span>
                    <span className="text-2xl transition-transform duration-300" style={{
                      transform: openQuestion === index ? 'rotate(45deg)' : 'rotate(0deg)'
                    }}>
                      +
                    </span>
                  </button>
                  <div 
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{ maxHeight: openQuestion === index ? '1000px' : '0' }}
                  >
                    <p className="pb-4 text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors">
                J'ai une question
              </button>
            </div>
          </div>        
          <div className="w-1/3 flex justify-center">
            <MessageSquare className="w-40 h-40 mt-28 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  )
}