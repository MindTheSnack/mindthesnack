'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { getImagePath } from '@/lib/imagePath'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  imagePath: string
  imagePosition?: string
}

export default function Modal({ isOpen, onClose, title, description, imagePath, imagePosition = 'center 35%' }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-dark-bg/80 backdrop-blur-md" />

      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div
          className={`bg-dark-card rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full transition-transform duration-300 border border-glass ${
            isOpen ? 'scale-100' : 'scale-90'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 w-12 h-12 bg-accent-cyan rounded-full flex items-center justify-center hover:scale-110 transition-transform font-bold text-dark-bg text-xl"
            aria-label="Close"
          >
            ×
          </button>

          {/* Image container with adjustable positioning */}
          <div
            className="relative w-full h-96 bg-gradient-to-b from-gray-200 to-gray-100 flex items-center justify-center"
            style={{ overflow: 'hidden' }}
          >
            <Image
              src={getImagePath(imagePath)}
              alt={title}
              fill
              className="object-cover"
              style={{ objectPosition: imagePosition }}
              onError={(e) => {
                const img = e.target as HTMLImageElement
                img.style.display = 'none'
              }}
            />
          </div>

          {/* Content */}
          <div className="p-10">
            <h3 className="text-3xl font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-200 leading-relaxed text-lg font-light">
              {description}
            </p>

            {/* Action hint */}
            <div className="mt-8 pt-6 border-t border-glass">
              <p className="text-sm text-gray-400 font-medium">
                Click outside to close
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
