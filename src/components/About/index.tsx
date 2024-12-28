import React from 'react'
import { TypingEffect } from '../TypingEffect'

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-400">
          <TypingEffect text="Hakkımda" />
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-green-400">Eğitim</h3>
            <p className="mb-4 text-gray-300">
              <TypingEffect text="Bilgisayar Mühendisliği, XYZ Üniversitesi, 2018" />
            </p>
            <h3 className="text-xl font-semibold mb-2 text-green-400">Kariyer Hedefleri</h3>
            <p className="mb-4 text-gray-300">
              <TypingEffect text="Yüksek ölçekli sistemler geliştirmek ve genç geliştiricilere mentorluk yapmak." />
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-green-400">İlgi Alanları</h3>
            <ul className="list-disc list-inside mb-4 text-gray-300">
              <li><TypingEffect text="Dağıtık sistemler" /></li>
              <li><TypingEffect text="Veritabanı optimizasyonu" /></li>
              <li><TypingEffect text="Açık kaynak projelere katkı" /></li>
              <li><TypingEffect text="Makine öğrenimi" /></li>
            </ul>
            <h3 className="text-xl font-semibold mb-2 text-green-400">Hobiler</h3>
            <p className="text-gray-300">
              <TypingEffect text="Satranç, dağ yürüyüşü, bilim kurgu kitapları" />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

