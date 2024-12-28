import { TypingEffect } from '../TypingEffect'

export function Resume() {
  return (
    <section id="resume" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-400">
          <TypingEffect text="Özgeçmiş" />
        </h2>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-green-400">
            <TypingEffect text="İş Deneyimi" />
          </h3>
          <div className="mb-4">
            <h4 className="text-xl font-medium text-green-300">
              <TypingEffect text="Kıdemli Backend Geliştirici - ABC Tech" />
            </h4>
            <p className="text-gray-400">
              <TypingEffect text="Ocak 2020 - Günümüz" />
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li><TypingEffect text="Yüksek trafikli mikroservis mimarisinin tasarımı ve uygulaması" /></li>
              <li><TypingEffect text="Veritabanı optimizasyonu ve performans iyileştirmeleri" /></li>
              <li><TypingEffect text="Ekip liderliği ve junior geliştiricilere mentorluk" /></li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="text-xl font-medium text-green-300">
              <TypingEffect text="Backend Geliştirici - XYZ Software" />
            </h4>
            <p className="text-gray-400">
              <TypingEffect text="Haziran 2018 - Aralık 2019" />
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li><TypingEffect text="RESTful API'ların geliştirilmesi ve bakımı" /></li>
              <li><TypingEffect text="Veritabanı şemalarının tasarımı ve yönetimi" /></li>
              <li><TypingEffect text="Birim testleri ve entegrasyon testlerinin yazılması" /></li>
            </ul>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-green-400">
            <TypingEffect text="Teknik Yetkinlikler" />
          </h3>
          <ul className="list-disc list-inside text-gray-300">
            <li><TypingEffect text="Programlama Dilleri: JavaScript, TypeScript, Python" /></li>
            <li><TypingEffect text="Frameworks: Node.js, Express.js, NestJS" /></li>
            <li><TypingEffect text="Veritabanları: PostgreSQL, MongoDB, Redis" /></li>
            <li><TypingEffect text="ORM: Sequelize, TypeORM" /></li>
            <li><TypingEffect text="Test: Jest, Mocha" /></li>
            <li><TypingEffect text="DevOps: Docker, Kubernetes, CI/CD (Jenkins, GitLab CI)" /></li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-green-400">
            <TypingEffect text="Sertifikalar" />
          </h3>
          <ul className="list-disc list-inside text-gray-300">
            <li><TypingEffect text="AWS Certified Developer - Associate" /></li>
            <li><TypingEffect text="MongoDB Certified Developer" /></li>
            <li><TypingEffect text="Node.js Certification from OpenJS Foundation" /></li>
          </ul>
        </div>
        <div className="mt-8 text-center">
          <a 
            href="/path-to-your-resume.pdf" 
            download 
            className="bg-green-500 hover:bg-green-600 text-gray-900 font-bold py-2 px-4 rounded"
          >
            <TypingEffect text="Özgeçmişi İndir (PDF)" />
          </a>
        </div>
      </div>
    </section>
  )
}

