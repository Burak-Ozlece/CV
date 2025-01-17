import React from 'react'
import { TypingEffect } from '../TypingEffect'

export function Home() {
  const technologies = [
    'C#', '.NET', 'SignalR', 'Docker', 'Git', 'Github', 'gRPC', 'Nginx', 'JWT', 'Micro Service'
  ]
  const pictureUrl = `${process.env.PUBLIC_URL}/foto.jpg`;
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-8">
          {/* Profil Resmi */}
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-full bg-green-400/20 animate-pulse"></div>
            <img
              src={pictureUrl}
              alt="Profile Picture"
              width={300}
              height={300}
              style={{objectFit: "cover"}}
             className="relative w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] rounded-full border-4 border-green-400 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            />
          </div>

          {/* İsim */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-green-400 h-[50px] overflow-hidden">
              <TypingEffect text="Burak Özlece" />
            </h1>

            {/* Unvan */}
            <h2 className="text-2xl text-gray-400 font-medium h-[35px] overflow-hidden">
              <TypingEffect text="Backend Developer" />
            </h2>

            {/* Teknolojiler */}
            <div className="flex flex-wrap justify-center gap-2 py-4">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-800/50 text-green-400 rounded-full text-sm border border-gray-700 hover:border-green-400 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Açıklama */}
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-300 text-lg leading-relaxed overflow-hidden">
                Merhaba! Ben Burak, backend geliştirme teknolojileri üzerine yoğunlaşmış ve bu alanda kendimi sürekli geliştiren bir yazılım geliştiricisiyim. .NET, SignalR, Docker, gRPC, JWT gibi modern teknolojiler kullanarak ölçeklenebilir, güvenli ve performans odaklı sistemler tasarlamaktan büyük bir keyif alıyorum.Karmaşık problemlere yaratıcı çözümler bulmak, kullanıcı dostu ve verimli altyapılar oluşturmak benim en büyük tutkularımdan biri. Ekibinizde yer alarak projelerinize değer katmaya ve hedeflerinizi gerçeğe dönüştürmeye yardımcı olmaya hazırım!
              </p>
            </div>

            {/* CTA Butonları */}
            <div className="flex justify-center gap-4 pt-6">
              <a
                href="#contact"
                className="px-6 py-3 bg-green-500 text-gray-900 font-medium rounded-lg hover:bg-green-400 transition-colors duration-300"
              >
                İletişime Geç
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-green-500 text-green-400 font-medium rounded-lg hover:bg-green-500/10 transition-colors duration-300"
              >
                Projelerimi Gör
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
