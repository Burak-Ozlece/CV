import React from 'react'
import { Home } from './components/Home/index'
import { About } from './components/About/index'
import { Resume } from './components/Resume/index'
import { Projects } from './components/Projects/index'
import { Contact } from './components/Contact/index'
import { TypingEffect } from './components/TypingEffect'

function App() {
  return (
    <div className="dark">
      <div className={`bg-gray-900 text-gray-100 min-h-screen`}>
        {/* Header/Navigation */}
        <div className="container mx-auto flex justify-between items-center p-4">
          <nav className="flex space-x-4">
            <a href="#home" className="hover:text-green-400">Ana Sayfa</a>
            <a href="#about" className="hover:text-green-400">Hakkımda</a>
            <a href="#resume" className="hover:text-green-400">Özgeçmiş</a>
            <a href="#projects" className="hover:text-green-400">Projelerim</a>
            <a href="#contact" className="hover:text-green-400">İletişim</a>
          </nav>
        </div>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <Home />
          <About />
          <Resume />
          <Projects />
          <Contact />
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-100 p-4 mt-8">
          <div className="container mx-auto text-center">
            <TypingEffect text="© 2023 Burak Özlece. Tüm hakları saklıdır." />
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
