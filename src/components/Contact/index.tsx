'use client'

import { useState } from 'react'
import { TypingEffect } from '../TypingEffect'

export function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('submitting')

    // In a real application, you would send this data to your server
    // For this example, we'll just simulate a successful submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setFormStatus('success')
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-400">
          <TypingEffect text="İletişim" />
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-300">
              <TypingEffect text="İletişim Bilgileri" />
            </h3>
            <p className="mb-2 text-gray-300">
              <TypingEffect text="E posta: burakozlece@hotmail.com" />
            </p>
            <p className="mb-4 text-gray-300">
              <TypingEffect text="Konum: Kayseri, Türkiye" />
            </p>
            <h3 className="text-xl font-semibold mb-4 text-green-300">
              <TypingEffect text="Sosyal Medya" />
            </h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/burak-ozlece/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                <TypingEffect text="LinkedIn" />
              </a>
              <a href="https://github.com/Burak-Ozlece" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                <TypingEffect text="GitHub" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-300">
              <TypingEffect text="Mesaj Gönder" />
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 mb-2">İsim</label>
                <input type="text" id="name" name="name" required className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input type="email" id="email" name="email" required className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-300 mb-2">Mesaj</label>
                <textarea id="message" name="message" required className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100" rows={4}></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-green-500 hover:bg-green-600 text-gray-900 font-bold py-2 px-4 rounded"
                disabled={formStatus === 'submitting'}
              >
                <TypingEffect text={formStatus === 'submitting' ? 'Gönderiliyor...' : 'Gönder'} />
              </button>
              {formStatus === 'success' && (
                <p className="mt-4 text-green-400">
                  <TypingEffect text="Mesajınız başarıyla gönderildi!" />
                </p>
              )}
              {formStatus === 'error' && (
                <p className="mt-4 text-red-400">
                  <TypingEffect text="Bir hata oluştu. Lütfen tekrar deneyin." />
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

