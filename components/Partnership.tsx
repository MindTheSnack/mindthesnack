'use client'

import Image from 'next/image'

export default function Partnership() {
  return (
    <section id="partnership" className="py-16 md:py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-2xl sm:rounded-3xl border border-glass bg-gradient-to-br from-dark-card/40 to-dark-card/20 backdrop-blur-xl overflow-hidden">
          {/* Gradient background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl -z-10" />

          <div className="p-6 sm:p-8 md:p-16 grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center order-first md:order-none">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/20 to-accent-glow/10 rounded-full blur-2xl" />
                <Image
                  src="/img/timetohelplogo.jpg"
                  alt="Time to Help Logo"
                  fill
                  className="object-contain rounded-full bg-white/5 p-4 sm:p-6"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-accent-cyan font-semibold text-xs sm:text-sm uppercase tracking-widest mb-4">
                Our Social Mission
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
                Every Snack,<br />
                <span className="gradient-text">Every Impact</span>
              </h2>

              <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                With every purchase, you're not just choosing health—you're choosing to make a difference. <strong>£0.05 from each sale</strong> goes directly to <strong>Time to Help</strong>, a London-based charity transforming lives.
              </p>

              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6 sm:mb-8">
                Together, we're converting workplace snack breaks into meaningful support for homeless communities. Your team's wellness fuels someone else's survival.
              </p>

              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-accent-cyan to-accent-glow rounded-full" />
                <span className="text-accent-cyan font-semibold text-sm sm:text-base">Join the wellness revolution</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
