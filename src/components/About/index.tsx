import React from 'react'
import { TypingEffect } from '../TypingEffect'

export function About() {
  const interestAreas = [
    'Mikroservis Mimarisi',
    'API Tasarımı ve Geliştirme',
    'DevOps ve CI/CD Süreçleri',
    'Yapay Zeka ve LLM Uygulamaları'
  ]

  const hobbies = [
    'Amatör Telsizcilik',
    'Kamp Yapmak',
    'Dağ Yürüyüşü',
    'Film İzlemek',
    'Bilgisayar Oyunu Oynamak'
  ]

  return (
    <section id="about" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-green-400 mb-12">
          <TypingEffect text="Hakkımda" />
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-green-400 mb-4">
              <TypingEffect text="Eğitim" />
            </h3>
            <p className="text-gray-300 mb-6">
              <TypingEffect text="Bilgisayar Programcılığı, Kayseri Üniversitesi, 2020-2022" />
            </p>

            <h3 className="text-2xl font-semibold text-green-400 mb-4">
              <TypingEffect text="Kariyer Hedefleri" />
            </h3>
            <p className="text-gray-300">
              <TypingEffect text="Teknik lider olarak ekipleri yönlendirip global ölçekte etki yaratacak projelerde yer almak." />
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-green-400 mb-4">
              <TypingEffect text="İlgi Alanları" />
            </h3>
            <ul className="space-y-2 mb-8">
              {interestAreas.map((area, index) => (
                <li key={index} className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  <TypingEffect text={area} />
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-semibold text-green-400 mb-4">
              <TypingEffect text="Hobiler" />
            </h3>
            <div className="flex flex-wrap gap-2">
              {hobbies.map((hobby, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-green-400 transition-colors duration-300"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

