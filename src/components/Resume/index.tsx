import React from 'react'
import { TypingEffect } from '../TypingEffect'

export function Resume() {
  const pdfUrl = "`${process.env.PUBLIC_URL}/KisiselBilgiler.pdf`";

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-green-400 mb-12">
          <TypingEffect text="Özgeçmiş" />
        </h2>

        {/* İş Deneyimi */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-green-400">
            <TypingEffect text="İş Deneyimi" />
          </h3>

          {/* Backend Developer */}
          <div className="mb-10">
            <h4 className="text-xl font-medium text-green-300 mb-2">
              <TypingEffect text="Back-End Developer - Libello Teknoloji Anonim Şirketi" />
            </h4>
            <p className="text-gray-400 mb-4">
              <TypingEffect text="Kasım 2022 - Halen Devam Ediyor" />
            </p>
            <ul className="grid gap-3 pl-4">
              {[
                "Şirketin kendi ürününün backend geliştirme süreçlerinde aktif rol aldım ve bakımını üstlendim.",
                "Farklı sistemlerle uyumlu çalışması için entegrasyonlar gerçekleştirdim ve performans odaklı çözümler geliştirdim.",
                "ASP.NET Core MVC yapısını kullanarak kullanıcı dostu ve ölçeklenebilir web uygulamaları geliştirdim.",
                "Controller, Model ve View katmanlarında çalışarak uygulamanın iş mantığını ve kullanıcı arayüzünü tasarladım.",
                "RabbitMQ mesajlaşma altyapısını kullanarak sistemlerin veri akışını optimize ettim.",
                "gRPC protokolü ile çalışmalar gerçekleştirdim.",
                "Kimlik doğrulama ve yetkilendirme süreçlerinde Identity, JWT ve SignalR teknolojilerini kullanarak güvenli ve gerçek zamanlı iletişim sağlayan çözümler geliştirdim.",
                "Console ve Windows Service uygulamaları yazarak otomasyon süreçlerini optimize ettim."
              ].map((text, index) => (
                <li key={index} className="relative pl-5 text-gray-300">
                  <span className="absolute left-0 top-[0.6em] w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                  <TypingEffect text={text} />
                </li>
              ))}
            </ul>
          </div>

          {/* Yazılım Destek Uzmanı */}
          <div className="mb-10">
            <h4 className="text-xl font-medium text-green-300 mb-2">
              <TypingEffect text="Yazılım Destek Uzmanı - Libello Teknoloji Anonim Şirketi" />
            </h4>
            <p className="text-gray-400 mb-4">
              <TypingEffect text="Ağustos 2022 - Kasım 2022" />
            </p>
            <ul className="grid gap-3 pl-4">
              {[
                "Müşterilere, şirketin sunduğu uygulamaya kayıt sürecinde rehberlik ederek teknik destek sağladım.",
                "Kullanıcıların ihtiyaçlarını anlayarak çözümler ürettim ve kayıt süreçlerini sorunsuz bir şekilde tamamlamalarını sağladım.",
                "Günlük hedeflere ulaşmak için etkin iletişim ve organizasyon becerileriyle müşteri memnuniyetini artırmaya odaklandım.",
                "Çeşitli geri bildirimler toplayarak ilgili birimlere raporladım, ürün geliştirme süreçlerine katkı sağladım."
              ].map((text, index) => (
                <li key={index} className="relative pl-5 text-gray-300">
                  <span className="absolute left-0 top-[0.6em] w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                  <TypingEffect text={text} />
                </li>
              ))}
            </ul>
          </div>

          {/* Stajyer */}
          <div className="mb-10">
            <h4 className="text-xl font-medium text-green-300 mb-2">
              <TypingEffect text="Stajyer - Solid Electron Anonim Şirketi" />
            </h4>
            <p className="text-gray-400">
              <TypingEffect text="Haziran 2022 - Temmuz 2022" />
            </p>
          </div>
        </div>

        {/* Teknik Yetkinlikler */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-green-400">
            <TypingEffect text="Teknik Yetkinlikler" />
          </h3>
          <ul className="grid gap-3 pl-4">
            {[
              "Programlama Dilleri: C#, Python, Javascript, Html, Css",
              "Frameworks: Entity Framework Core, ASP.NET Core, ASP.NET MVC",
              "Veritabanları: PostgreSQL, Microsoft SQL Server, Mysql, Redis",
              "DevOps: Docker, Nginx, RabbitMQ, gRPC, SignalR, Git, Github"
            ].map((text, index) => (
              <li key={index} className="relative pl-5 text-gray-300">
                <span className="absolute left-0 top-[0.6em] w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                <TypingEffect text={text} />
              </li>
            ))}
          </ul>
        </div>

        {/* Sertifikalar */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-green-400">
            <TypingEffect text="Sertifikalar" />
          </h3>
          <ul className="grid gap-3 pl-4">
            {[
              "RabbitMQ - Gençay Yıldız",
              "SignalR - Gençay Yıldız",
              "Uygulamalarla SQL Öğreniyorum - Ömer F. Çolakoğlu",
              "Python Sıfırdan İleri Seviye Programlama - Mustafa M. Coşkun",
              "Komple Uygulamalarla Web Geliştirme - Sadık E. Turan",
              "Versiyon Kontrolleri: Git ve GitHub - Atıl Samancıoğlu",
              "Her Yönüyle SQL Server - Ömer F. Çolakoğlu",
              "Veritabanı Saldırıları ve Veritabanı Güvenliği - Ömer F. Çolakoğlu",
              "API ve API Testi - Salih Kıralioğlu / Hüsnü F. Çavuş",
              "Mvc5 ile Sıfırdan Admin Panelli Dinamik CV Sitesi - Murat Yücedağ"
            ].map((text, index) => (
              <li key={index} className="relative pl-5 text-gray-300">
                <span className="absolute left-0 top-[0.6em] w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                <TypingEffect text={text} />
              </li>
            ))}
          </ul>
        </div>

        {/* İndirme Butonu */}
        <div className="text-center">
          <a 
            href={pdfUrl}
            download="Burak_Ozlece_CV.pdf"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
              />
            </svg>
            <span className="h-[25px] overflow-hidden">
              <TypingEffect text="Özgeçmişi İndir (PDF)" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

