'use client'

import Image from 'next/image'
import { useState } from 'react'

const machines = [
  {
    image: '/img/vending_machine_modern3.png',
    name: 'Model Pro',
  },
  {
    image: '/img/vending_machine_modern.png',
    name: 'Model Elite',
  },
]

const features = [
  {
    icon: '01',
    title: 'Compact Design',
    description: 'Slim profile fits seamlessly into offices, break rooms, and lobbies without consuming valuable space.',
  },
  {
    icon: '02',
    title: 'Eco-Friendly',
    description: 'Energy-efficient cooling system and sustainable materials that minimize our carbon footprint.',
  },
  {
    icon: '03',
    title: 'Reliable Operation',
    description: 'Quiet, dependable performance designed to enhance your workplace without disruption.',
  },
]

export default function Machines() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? machines.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === machines.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="machines" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-accent-cyan font-semibold text-sm uppercase tracking-widest mb-4">
              Smart Technology
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Built for <span className="gradient-text">Modern Workplaces</span>
            </h2>

            <div className="space-y-6 mb-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-cyan/20 border border-accent-cyan/40 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-accent-cyan text-lg">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.getElementById('chi-siamo')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-accent-cyan/10 border border-accent-cyan/50 text-accent-cyan font-semibold rounded-lg hover:bg-accent-cyan hover:text-dark-bg transition-all duration-300"
            >
              Learn More
            </button>
          </div>

          {/* Carousel */}
          <div className="space-y-6">
            <div className="relative h-96 rounded-2xl border border-glass overflow-hidden bg-dark-card/50">
              {/* Carousel content */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-dark-card/80 to-dark-bg/80">
                <div className="relative w-full h-full">
                  {machines.map((machine, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        idx === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <Image
                        src={machine.image}
                        alt={machine.name}
                        fill
                        className="object-contain p-8"
                        priority={idx === 0}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-dark-bg/70 backdrop-blur border border-glass text-accent-cyan hover:bg-accent-cyan hover:text-dark-bg transition-all"
              >
                ❮
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-dark-bg/70 backdrop-blur border border-glass text-accent-cyan hover:bg-accent-cyan hover:text-dark-bg transition-all"
              >
                ❯
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-3">
              {machines.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentSlide
                      ? 'bg-accent-cyan w-8'
                      : 'bg-white/20 w-2 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            {/* Machine name */}
            <p className="text-center text-accent-cyan font-semibold">
              {machines[currentSlide].name}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
