'use client'

import { getImagePath } from '@/lib/imagePath'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative py-20 md:py-32 lg:py-48 flex flex-col items-center justify-center overflow-hidden min-h-screen md:min-h-auto"
      style={{
        backgroundImage: `url('${getImagePath('/img/logo.jpg')}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/85 via-dark-bg/90 to-dark-bg/95 z-0" />

      {/* Floating orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-96 h-96 bg-accent-glow/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center fade-in relative z-10">

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
          <span className="gradient-text">The Future of Healthy</span>
          <br />
          <span className="text-white">Snacking</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 font-light leading-relaxed px-2">
          Skip the junk. Fuel your body with premium organic snacks and cold-pressed beverages. Our smart vending machines bring wellness to your workplace.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
          <button
            onClick={() => document.getElementById('prodotti')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-accent-cyan text-dark-bg font-bold text-sm sm:text-base rounded-xl hover:shadow-glow-lg hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Explore Products
          </button>
          <button
            onClick={() => document.getElementById('machines')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-accent-cyan text-accent-cyan font-bold text-sm sm:text-base rounded-xl hover:bg-accent-cyan/10 hover:shadow-glow-lg transition-all duration-300"
          >
            See Our Machines
          </button>
        </div>

        <div className="mt-12 md:mt-20 lg:mt-32 grid grid-cols-3 gap-3 sm:gap-4 md:gap-8 max-w-2xl mx-auto px-2">
          <div className="text-center p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl bg-dark-card/40 border border-glass hover:border-accent-cyan/40 transition-all hover:bg-dark-card/60">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent-cyan mb-1 sm:mb-2">100%</div>
            <p className="text-xs sm:text-sm text-gray-300 font-medium">Natural</p>
          </div>
          <div className="text-center p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl bg-dark-card/40 border border-glass hover:border-accent-cyan/40 transition-all hover:bg-dark-card/60">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent-cyan mb-1 sm:mb-2">0.05£</div>
            <p className="text-xs sm:text-sm text-gray-300 font-medium">Donation Per Sale</p>
          </div>
          <div className="text-center p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl bg-dark-card/40 border border-glass hover:border-accent-cyan/40 transition-all hover:bg-dark-card/60">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent-cyan mb-1 sm:mb-2">50+</div>
            <p className="text-xs sm:text-sm text-gray-300 font-medium">Products</p>
          </div>
        </div>
      </div>
    </section>
  )
}
