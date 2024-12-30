import React, { useState } from 'react'
import { Home } from './components/Home/index'
import { About } from './components/About/index'
import { Resume } from './components/Resume/index'
import { Projects } from './components/Projects/index'
import { Contact } from './components/Contact/index'
import { TypingEffect } from './components/TypingEffect'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="dark">
      <div className={`bg-gray-900 text-gray-100 min-h-screen`}>
        {/* Header/Navigation */}
        <header className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 z-50">
          <div className="container mx-auto flex justify-between items-center p-4">
            <span className="hidden md:block text-xl font-bold text-green-400 h-[30px] overflow-hidden w-[150px]">
              <TypingEffect text="Backend Dev" />
            </span>

            {/* Hamburger Menu Button */}
            <button 
              className="md:hidden text-gray-400 hover:text-green-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li><a href="#home" className="hover:text-green-400 transition-colors duration-200">Ana Sayfa</a></li>
                <li><a href="#about" className="hover:text-green-400 transition-colors duration-200">Hakkımda</a></li>
                <li><a href="#resume" className="hover:text-green-400 transition-colors duration-200">Özgeçmiş</a></li>
                <li><a href="#projects" className="hover:text-green-400 transition-colors duration-200">Projelerim</a></li>
                <li><a href="#contact" className="hover:text-green-400 transition-colors duration-200">İletişim</a></li>
              </ul>
            </nav>
          </div>

          {/* Mobile Navigation */}
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-900/95 border-b border-gray-800`}>
            <ul className="flex flex-col items-center py-4">
              <li className="py-2"><a href="#home" className="hover:text-green-400 transition-colors duration-200">Ana Sayfa</a></li>
              <li className="py-2"><a href="#about" className="hover:text-green-400 transition-colors duration-200">Hakkımda</a></li>
              <li className="py-2"><a href="#resume" className="hover:text-green-400 transition-colors duration-200">Özgeçmiş</a></li>
              <li className="py-2"><a href="#projects" className="hover:text-green-400 transition-colors duration-200">Projelerim</a></li>
              <li className="py-2"><a href="#contact" className="hover:text-green-400 transition-colors duration-200">İletişim</a></li>
            </ul>
          </nav>
        </header>

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
            <div className="h-[25px] overflow-hidden">
              <TypingEffect text="© 2023 Burak Özlece. Tüm hakları saklıdır." />
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
