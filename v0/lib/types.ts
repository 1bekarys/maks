export interface Category {
  slug: string
  name: string
  image: string
  productCount: number
}

export interface Product {
  id: number
  name: string
  price: number | null
  image: string
  images?: string[]
  inStock: boolean
  badge?: "new" | "hit"
  category: string
  country?: string
  power?: number
  maxPressure?: number
  performance?: number
  material?: string
  length?: number
  description?: string
  characteristics?: any
  detailedDescription?: string
  assembly?: string
}
