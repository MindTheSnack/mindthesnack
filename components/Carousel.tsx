'use client'

import Image from 'next/image'
import { useState } from 'react'
import Modal from './Modal'

const carouselProducts = [
  {
    id: 'snack1',
    name: 'Brite: Natural Energy Drink',
    category: 'Energy',
    description: 'Try Brite – truly natural, great-tasting nootropic drink that boosts mental performance without any of the downsides.',
    image: '/img/snack1.jpg',
  },
  {
    id: 'product6',
    name: 'RK Coconut Water',
    category: 'Hydration',
    description: 'Pure coconut water with natural electrolytes. Perfect for hydration and recovery.',
    image: '/img/products/RK-coconut-water-classic-330ml-shadow 2.png',
  },
  {
    id: 'product7',
    name: 'EMILY Veg Crisps',
    category: 'Snacks',
    description: 'Crispy, delicious vegetable crisps made from rainbow roots. A healthier snacking choice.',
    image: '/img/products/EMILY-veg-crisps-rainbow-roots-30g 2.png',
  },
  {
    id: 'product1',
    name: 'RK All Apple',
    category: 'Juice',
    description: 'Pure refreshment. A blend of the finest apple juice with no added sugars. Naturally energizing and delicious.',
    image: '/img/products/RK-OOH-250ml-all-apple-shadow.png',
  },
  {
    id: 'product2',
    name: 'RK Berry Blush',
    category: 'Juice',
    description: 'Mixed berry goodness. Rich in antioxidants and natural flavor, perfect for a healthy break.',
    image: '/img/products/RK-OOH-250ml-berry-blush-shadow.png',
  },
  {
    id: 'product3',
    name: 'RK Easy Green',
    category: 'Juice',
    description: 'Green juice at its finest. Packed with vegetables and fruits for a nutrient boost.',
    image: '/img/products/RK-OOH-250ml-easy-green-shadow.png',
  },
  {
    id: 'product4',
    name: 'RK Go Glow',
    category: 'Juice',
    description: 'Energize your day with our premium blend of exotic fruits and wellness ingredients.',
    image: '/img/products/RK-OOH-250ml-go-glow-shadow.png',
  },
  {
    id: 'product5',
    name: 'RK Only Orange',
    category: 'Juice',
    description: 'Fresh squeezed orange juice taste. Natural vitamin C boost for your wellness routine.',
    image: '/img/products/RK-OOH-250ml-only-orange-shadow.png',
  },
]
export default function Carousel() {
  const [selectedProduct, setSelectedProduct] = useState<typeof carouselProducts[0] | null>(null)

  return (
    <>
      <section id="vetrina" className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-8 md:mb-12">
            <p className="text-accent-cyan font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">
              Complete Collection
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Explore Our <span className="gradient-text">Full Range</span>
            </h2>
          </div>

          {/* Horizontal Scrollable Container */}
          <div className="overflow-x-auto pb-4 -mx-4 sm:mx-0 px-4 sm:px-0">
            <ul className="flex gap-3 sm:gap-4 md:gap-5 list-none">
              {carouselProducts.map((product) => (
                <li key={product.id} className="min-w-40 sm:min-w-48 md:min-w-56 lg:min-w-64 flex-shrink-0">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="group/card w-full text-left h-full cursor-pointer"
                  >
                    <div className="rounded-lg sm:rounded-2xl border border-glass bg-dark-card/50 group-hover/card:border-accent-cyan/50 transition-all duration-300 overflow-hidden p-4 sm:p-5 h-full flex flex-col">
                      <div className="relative w-full h-32 sm:h-40 md:h-48 mb-3 sm:mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-dark-bg to-dark-card/50 flex items-center justify-center">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain group-hover/card:scale-110 transition-transform duration-300"
                        />
                      </div>

                      <div className="flex-1 flex flex-col">
                        <p className="text-xs text-accent-cyan font-semibold uppercase tracking-wide mb-1">
                          {product.category}
                        </p>
                        <h4 className="text-sm font-bold text-white mb-2 group-hover/card:text-accent-cyan transition-colors line-clamp-2">
                          {product.name}
                        </h4>
                        <p className="text-xs text-gray-400 line-clamp-2">
                          {product.description}
                        </p>
                      </div>

                      <div className="mt-2 pt-2 border-t border-glass/50">
                        <p className="text-accent-cyan text-xs font-semibold group-hover/card:translate-x-1 transition-transform inline-flex items-center gap-1">
                          Learn More →
                        </p>
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
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