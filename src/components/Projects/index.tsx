import React from 'react'
import { TypingEffect } from '../TypingEffect'

export function Projects() {
  const projects = [
    {
      name: "E-ticaret Mikroservis Mimarisi",
      description: "Yüksek ölçeklenebilir e-ticaret backend sistemi",
      technologies: "Node.js, TypeScript, NestJS, PostgreSQL, Redis, Docker",
      github: "https://github.com/username/ecommerce-microservices",
      demo: "https://demo-ecommerce.example.com"
    },
    {
      name: "Gerçek Zamanlı Analitik Platformu",
      description: "Büyük veri işleme ve gerçek zamanlı analitik çözümü",
      technologies: "Node.js, TypeScript, Apache Kafka, Elasticsearch, Kibana",
      github: "https://github.com/username/realtime-analytics",
    },
    {
      name: "API Gateway ve Servis Mesh",
      description: "Mikroservisler için özelleştirilmiş API Gateway ve Servis Mesh uygulaması",
      technologies: "Node.js, TypeScript, Express.js, Redis, Consul",
      github: "https://github.com/username/api-gateway-service-mesh",
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-400">
          <TypingEffect text="Projelerim" />
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-md">
              <img
                src={`/placeholder.svg?height=200&width=300&text=${project.name}`}
                alt={project.name}
                width={300}
                height={200}
                className="mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-2 text-green-300">
                <TypingEffect text={project.name} />
              </h3>
              <p className="text-gray-300 mb-4">
                <TypingEffect text={project.description} />
              </p>
              <p className="text-sm text-gray-400 mb-4">
                <TypingEffect text={project.technologies} />
              </p>
              <div className="flex space-x-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                  <TypingEffect text="GitHub" />
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                    <TypingEffect text="Demo" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

