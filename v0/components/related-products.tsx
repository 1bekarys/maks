'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/lib/types'
import { formatPrice } from '@/lib/catalog-data'

interface RelatedProductsProps {
  products: Product[]
  categorySlug: string
}

export function RelatedProducts({
  products,
  categorySlug,
}: RelatedProductsProps) {
  if (!products || products.length === 0) {
    return null
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Related Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => {
          const productUrl = `/product/${categorySlug}/${product.id}`

          return (
            <Link
              key={product.id}
              href={productUrl}
              className="group block space-y-3 hover:no-underline"
            >
              <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {product.name}
                </h4>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-600">
                    {formatPrice(product.price || 0)}
                  </span>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded ${
                      product.inStock
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {product.inStock ? 'In Stock' : 'On Order'}
                  </span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
