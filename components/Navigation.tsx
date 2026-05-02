'use client'

import { useEffect, useState } from 'react'

const sections = ['home', 'chi-siamo', 'partnership', 'prodotti', 'machines']
const labels: Record<string, string> = {
  'home': 'Home',
  'chi-siamo': 'About',
  'partnership': 'Partnership',
  'prodotti': 'Products',
  'machines': 'Machines',
}

export default function Navigation() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      let current = 'home'
      const sectionElements = sections.map(id => document.getElementById(id))

      sectionElements.forEach((el) => {
        if (el) {
          const top = el.offsetTop
          const height = el.clientHeight
          if (window.scrollY >= top - height / 3) {
            current = el.getAttribute('id') || 'home'
          }
        }
      })

      setActive(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 max-w-full px-2 sm:px-4 w-full sm:w-auto">
      <div className="bg-dark-bg/40 backdrop-blur-2xl border border-glass px-2 sm:px-2 md:px-2 py-2 sm:py-3 rounded-full shadow-2xl w-full">
        <div className="flex gap-1 sm:gap-2 md:gap-8 justify-center flex-wrap">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`px-2 sm:px-4 md:px-6 py-2 rounded-full font-semibold uppercase tracking-wider text-xs sm:text-xs md:text-sm transition-all duration-300 relative whitespace-nowrap ${
                active === id
                  ? 'bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/50'
                  : 'text-gray-300 hover:text-accent-cyan hover:bg-accent-cyan/10'
              }`}
            >
              {labels[id]}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
