"use client"

import { useState, useMemo } from "react"
import { Product } from "@/lib/catalog-data"
import { CategorySidebar } from "./category-sidebar"
import { CategoryProducts } from "./category-products"

export interface FilterState {
  priceMin: string
  priceMax: string
  countries: string[]
  powerMin: string
  powerMax: string
  pressureMin: string
  pressureMax: string
  performance: string[]
  materials: string[]
  lengths: string[]
}

export function CategoryView({
  products,
  categoryName,
  currentSlug,
}: {
  products: Product[]
  categoryName: string
  currentSlug: string
}) {
  const [filters, setFilters] = useState<FilterState>({
    priceMin: "",
    priceMax: "",
    countries: [],
    powerMin: "",
    powerMax: "",
    pressureMin: "",
    pressureMax: "",
    performance: [],
    materials: [],
    lengths: [],
  })

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Price filter
      if (filters.priceMin) {
        if (!product.price || product.price < Number(filters.priceMin)) {
          return false
        }
      }
      if (filters.priceMax) {
        if (!product.price || product.price > Number(filters.priceMax)) {
          return false
        }
      }

      // Country filter
      if (filters.countries.length > 0) {
        if (!product.country || !filters.countries.includes(product.country)) {
          return false
        }
      }

      // Power filter
      if (filters.powerMin) {
        if (!product.power || product.power < Number(filters.powerMin)) {
          return false
        }
      }
      if (filters.powerMax) {
        if (!product.power || product.power > Number(filters.powerMax)) {
          return false
        }
      }

      // Pressure filter
      if (filters.pressureMin) {
        if (!product.maxPressure || product.maxPressure < Number(filters.pressureMin)) {
          return false
        }
      }
      if (filters.pressureMax) {
        if (!product.maxPressure || product.maxPressure > Number(filters.pressureMax)) {
          return false
        }
      }

      // Performance filter
      if (filters.performance.length > 0) {
        if (!product.performance || !filters.performance.includes(product.performance.toString())) {
          return false
        }
      }

      // Material filter
      if (filters.materials.length > 0) {
        if (!product.material || !filters.materials.includes(product.material)) {
          return false
        }
      }

      // Length filter
      if (filters.lengths.length > 0) {
        if (!product.length || !filters.lengths.includes(product.length.toString())) {
          return false
        }
      }

      return true
    })
  }, [products, filters])

  const handleResetFilters = () => {
    setFilters({
      priceMin: "",
      priceMax: "",
      countries: [],
      powerMin: "",
      powerMax: "",
      pressureMin: "",
      pressureMax: "",
      performance: [],
      materials: [],
      lengths: [],
    })
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <CategorySidebar
        currentSlug={currentSlug}
        products={products}
        filters={filters}
        onFiltersChange={setFilters}
        onReset={handleResetFilters}
      />
      <CategoryProducts products={filteredProducts} categoryName={categoryName} />
    </div>
  )
}
