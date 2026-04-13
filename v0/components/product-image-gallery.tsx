'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ProductImageGalleryProps {
  images: string[]
  productName: string
}

export function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  if (!images || images.length === 0) {
    return (
      <div className="bg-secondary rounded-lg w-full aspect-square flex items-center justify-center">
        <span className="text-muted-foreground">No images available</span>
      </div>
    )
  }

  const mainImage = images[selectedImageIndex]

  return (
    <div className="space-y-3">
      {/* Main Image */}
      <div className="relative bg-secondary rounded-lg overflow-hidden aspect-square w-full">
        <Image
          src={mainImage}
          alt={`${productName} - Image ${selectedImageIndex + 1}`}
          fill
          className="object-contain"
          priority={selectedImageIndex === 0}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={`relative flex-shrink-0 w-16 h-16 rounded border-2 overflow-hidden transition-colors ${
                index === selectedImageIndex
                  ? 'border-primary'
                  : 'border-border hover:border-primary/50'
              }`}
              aria-label={`Select image ${index + 1}`}
            >
              <Image
                src={image}
                alt={`${productName} thumbnail ${index + 1}`}
                fill
                className="object-contain"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
