'use client'

import Image from 'next/image'
import { useState } from 'react'
import Modal from './Modal'
import { getImagePath } from '@/lib/imagePath'

const products = [
  {
    id: 'product6',
    name: 'RK Coconut Water',
    category: 'Hydration',
    description: 'Pure coconut water with natural electrolytes. Perfect for hydration and recovery.',
    image: '/img/products/RK-coconut-water-classic-330ml-shadow 2.png',
  },
  {
    id: 'snack1',
    name: 'Brite: Natural Energy',
    category: 'Energy Drink',
    description: 'Try Brite – truly natural, great-tasting nootropic drink that boosts mental performance without any of the downsides.',
    image: '/img/snack1.jpg',
  },
  {
    id: 'product7',
    name: 'EMILY Veg Crisps',
    category: 'Snacks',
    description: 'Crispy, delicious vegetable crisps made from rainbow roots. A healthier snacking choice.',
    image: '/img/products/EMILY-veg-crisps-rainbow-roots-30g 2.png',
  },
]

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)

  const scrollToCarousel = () => {
    const element = document.getElementById('vetrina')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <section id="prodotti" className="py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-12 md:mb-16">
            <p className="text-accent-cyan font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">
              Curated Selection
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Premium <span className="gradient-text">Natural Products</span>
            </h2>
            <p className="text-gray-400 max-w-2xl text-sm sm:text-base md:text-lg">
              Every item in our vending machines is meticulously selected. From organic snacks to cold-pressed juices, we've curated only the healthiest options for your workplace.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="group text-left cursor-pointer"
              >
                <div className="relative h-48 sm:h-56 md:h-72 mb-3 sm:mb-4 md:mb-6 rounded-lg sm:rounded-2xl overflow-hidden border border-glass bg-dark-card/50 group-hover:border-accent-cyan/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <Image
                    src={getImagePath(product.image)}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <p className="text-xs text-accent-cyan font-bold uppercase tracking-widest">
                    {product.category}
                  </p>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-accent-cyan transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 line-clamp-2">{product.description}</p>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={scrollToCarousel}
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-accent-cyan/10 border-2 border-accent-cyan text-accent-cyan font-bold text-sm sm:text-base rounded-lg sm:rounded-xl hover:bg-accent-cyan hover:text-dark-bg transition-all duration-300 group shadow-lg hover:shadow-glow-lg"
          >
            View Complete Catalog
            <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </section>

      {/* Modal */}
      {selectedProduct && (
        <Modal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          title={selectedProduct.name}
          description={selectedProduct.description}
          imagePath={selectedProduct.image}
        />
      )}
    </>
  )
}
