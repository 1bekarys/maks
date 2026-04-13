'use client'

import Link from 'next/link'
import { getCategoryBySlug } from '@/lib/catalog-data'

interface ProductBreadcrumbsProps {
  categorySlug: string
  productName: string
}

export function ProductBreadcrumbs({
  categorySlug,
  productName,
}: ProductBreadcrumbsProps) {
  const category = getCategoryBySlug(categorySlug)
  const categoryName = category?.name || categorySlug

  return (
    <nav className="flex items-center gap-2 text-sm text-gray-600" aria-label="Breadcrumb">
      <Link href="/product" className="hover:text-blue-600 transition-colors">
        Catalog
      </Link>
      <span className="text-gray-400">/</span>
      <Link
        href={`/product/${categorySlug}`}
        className="hover:text-blue-600 transition-colors"
      >
        {categoryName}
      </Link>
      <span className="text-gray-400">/</span>
      <span className="text-gray-900 font-medium">{productName}</span>
    </nav>
  )
}
