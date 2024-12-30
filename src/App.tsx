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
        <header className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 z-50">
          <div className="container mx-auto flex justify-between items-center p-4">
            <span className="hidden md:block text-xl font-bold text-green-400 h-[30px] overflow-hidden w-[150px]">
              <TypingEffect text="Backend Dev" />
            </span>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#home" className="hover:text-green-400 transition-colors duration-200">Ana Sayfa</a></li>
                <li><a href="#about" className="hover:text-green-400 transition-colors duration-200">Hakkımda</a></li>
                <li><a href="#resume" className="hover:text-green-400 transition-colors duration-200">Özgeçmiş</a></li>
                <li><a href="#projects" className="hover:text-green-400 transition-colors duration-200">Projelerim</a></li>
                <li><a href="#contact" className="hover:text-green-400 transition-colors duration-200">İletişim</a></li>
              </ul>
            </nav>
          </div>
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
