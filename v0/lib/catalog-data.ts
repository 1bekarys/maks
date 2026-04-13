import { categories } from "./categories"
import { allProducts } from "./products"
import type { Category, Product } from "./types"

// Re-export types and data for convenience
export type { Category, Product } from "./types"
export { categories } from "./categories"
export { allProducts } from "./products"

/**
 * Generate a URL-safe slug from a product ID
 * This keeps URLs clean and short instead of long Russian names
 * Example: "123" => "123"
 */
export function generateSlug(productId: number): string {
  return productId.toString()
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

export function getProductsByCategory(slug: string): Product[] {
  return allProducts.filter((p) => p.category === slug)
}

/**
 * Get a product by category slug and product ID (as string slug)
 */
export function getProductByCategoryAndSlug(
  categorySlug: string,
  productSlug: string
): Product | undefined {
  const productId = parseInt(productSlug, 10)
  return allProducts.find(
    (p) => p.category === categorySlug && p.id === productId
  )
}

/**
 * Get related products from the same category
 * Excludes the current product and returns a limited number
 */
export function getRelatedProducts(
  categorySlug: string,
  currentProductId: number,
  limit: number = 4
): Product[] {
  return allProducts
    .filter((p) => p.category === categorySlug && p.id !== currentProductId)
    .slice(0, limit)
}

/**
 * Generate static params for all products for static generation
 * Used in Next.js with generateStaticParams()
 */
export function getProductStaticParams() {
  return allProducts.map((product) => ({
    category: product.category,
    slug: product.id.toString(),
  }))
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("ru-RU").format(price) + " \u20BD"
}
