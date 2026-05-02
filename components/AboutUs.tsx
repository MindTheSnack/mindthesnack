'use client'

import Image from 'next/image'
import { useState } from 'react'
import Modal from './Modal'

const founders = [
  {
    id: 'founder1',
    name: 'Mariano Leone',
    title: 'Co-Founder & Director',
    description: 'Mariano founded MindTheSnack with the vision of changing the vending world. Passionate about sports and nutrition, he drives our mission to make wellness accessible.',
    image: '/img/founder1.jpg',
    cardPosition: 'center 15%',
    modalPosition: 'center 16%',
  },
  {
    id: 'founder2',
    name: 'Vito Gasparro',
    title: 'Co-Founder & Operations Director',
    description: 'Vito manages the entire logistics chain ensuring products arrive fresh every day. As a sustainability expert, he ensures every decision prioritizes environmental responsibility.',
    image: '/img/founder2.jpg',
    cardPosition: 'object-top',
    modalPosition: 'center 16%',
  },
]

export default function AboutUs() {
  const [selectedFounder, setSelectedFounder] = useState<typeof founders[0] | null>(null)

  return (
    <>
      <section id="chi-siamo" className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-16 md:mb-20">
            {/* Content */}
            <div>
              <p className="text-accent-cyan font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">
                Our Story
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
                Building the <span className="gradient-text">Future of Wellness</span>
              </h2>

              <div className="space-y-4 sm:space-y-6 text-gray-300 leading-relaxed">
                <p className="text-base sm:text-lg">
                  MindTheSnack was born from a simple observation: workplace vending machines were failing employees. They offered convenience without nutrition, choices without conscience.
                </p>

                <p className="text-base sm:text-lg">
                  We decided to change that. By combining premium organic products with smart vending technology, we're transforming break time into an opportunity for genuine wellness.
                </p>

                <p className="text-base sm:text-lg text-gray-400">
                  Every snack sold fuels a person's body and a charitable mission. Every machine placed represents our commitment to creating healthier, more conscious workplaces.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-glass">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-accent-cyan mb-1 sm:mb-2">50+</div>
                  <p className="text-xs sm:text-sm text-gray-400">Premium Products</p>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-accent-cyan mb-1 sm:mb-2">100%</div>
                  <p className="text-xs sm:text-sm text-gray-400">Organic</p>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-accent-cyan mb-1 sm:mb-2">0.05 </div>
                  <p className="text-xs sm:text-sm text-gray-400">To Charity</p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  icon: '●',
                  title: 'Natural & Organic',
                  desc: 'Every product is carefully curated to meet strict health and sustainability standards.',
                },
                {
                  icon: '●',
                  title: 'Environmentally Conscious',
                  desc: 'From packaging to operations, we prioritize sustainability at every step.',
                },
                {
                  icon: '●',
                  title: 'Social Impact',
                  desc: 'We donate to Time to Help, transforming snack breaks into meaningful community support.',
                },
                {
                  icon: '●',
                  title: 'Innovation-Driven',
                  desc: 'Smart vending technology combined with human curation for the best experience.',
                },
              ].map((value, idx) => (
                <div key={idx} className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-dark-card/40 border border-glass/50 hover:border-accent-cyan/40 transition-all">
                  <span className="text-accent-cyan font-bold flex-shrink-0 text-lg sm:text-xl">{value.icon}</span>
                  <div className="min-w-0">
                    <h4 className="font-bold text-white mb-1 text-sm sm:text-base">{value.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-300">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Section */}
          <div className="border-t border-glass pt-16 md:pt-20">
            <p className="text-accent-cyan font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">
              Leadership Team
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12">
              Meet Our <span className="gradient-text">Founders</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl">
              {founders.map((founder) => (
                <button
                  key={founder.id}
                  onClick={() => setSelectedFounder(founder)}
                  className="group text-left cursor-pointer"
                >
                  <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-lg sm:rounded-2xl border border-glass bg-dark-card/50 group-hover:border-accent-cyan/50 transition-all duration-300 h-56 sm:h-64 md:h-80">
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />

                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      style={{ objectPosition: founder.cardPosition === 'object-top' ? 'center top' : founder.cardPosition }}
                    />

                    {/* Info on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20">
                      <h4 className="text-lg sm:text-2xl font-bold text-white mb-1">{founder.name}</h4>
                      <p className="text-accent-cyan text-xs sm:text-sm font-semibold">{founder.title}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                    {founder.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-3 sm:mt-4 text-accent-cyan text-xs sm:text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                    View Profile →
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedFounder && (
        <Modal
          isOpen={!!selectedFounder}
          onClose={() => setSelectedFounder(null)}
          title={selectedFounder.name}
          description={selectedFounder.description}
          imagePath={selectedFounder.image}
          imagePosition={selectedFounder.modalPosition}
        />
      )}
    </>
  )
}
