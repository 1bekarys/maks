import { categories } from "./categories"
import { allProducts } from "./products"
import type { Category, Product } from "./types"

// Re-export types and data for convenience
export type { Category, Product } from "./types"
export { categories } from "./categories"
export { allProducts } from "./products"

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

export function getProductsByCategory(slug: string): Product[] {
  return allProducts.filter((p) => p.category === slug)
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("ru-RU").format(price) + " \u20BD"
}
