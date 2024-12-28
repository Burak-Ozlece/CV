import React from 'react'
import { TypingEffect } from '../TypingEffect'

export function Home() {
  return (
    <section id="home" className="py-20 text-center">
      <img
        src="/placeholder.svg"
        alt="Profile Picture"
        width={200}
        height={200}
        className="rounded-full mx-auto mb-4 border-2 border-green-400"
      />
      <h1 className="text-4xl font-bold mb-2 text-green-400">
        <TypingEffect text="Burak Özlece" />
      </h1>
      <p className="text-xl text-gray-400 mb-4">
        <TypingEffect text="Backend Developer | Teknolojiye Tutkulu Bir Problem Çözücü" />
      </p>
      <p className="max-w-2xl mx-auto text-gray-300">
        <TypingEffect text="Merhaba! Ben Burak. Node.js, TypeScript ve veritabanı teknolojileri konusunda uzmanlaşmış bir backend geliştiriciyim. Karmaşık problemleri çözmekten ve ölçeklenebilir sistemler tasarlamaktan keyif alıyorum." />
      </p>
    </section>
  )
}
