"use client"

import Link from "next/link"
import { useState, useMemo } from "react"
import { LayoutGrid, ChevronDown, ChevronUp, SlidersHorizontal, RotateCcw } from "lucide-react"
import { categories, Product } from "@/lib/catalog-data"
import type { FilterState } from "./category-view"

export function CategorySidebar({
  currentSlug,
  products,
  filters,
  onFiltersChange,
  onReset,
}: {
  currentSlug: string
  products: Product[]
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
  onReset: () => void
}) {
  const [filtersOpen, setFiltersOpen] = useState(true)

  // Dynamically extract unique values from products
  const countries = useMemo(() => {
    const uniqueCountries = [...new Set(products.filter((p) => p.country).map((p) => p.country!))]
    return uniqueCountries.sort()
  }, [products])

  const countryCount = useMemo(() => {
    return products.filter((p) => p.country && filters.countries.includes(p.country)).length
  }, [products, filters.countries])

  const minPrice = useMemo(() => {
    const prices = products.filter((p) => p.price).map((p) => p.price!)
    return prices.length > 0 ? Math.min(...prices) : 0
  }, [products])
  const maxPrice = useMemo(() => {
    const prices = products.filter((p) => p.price).map((p) => p.price!)
    return prices.length > 0 ? Math.max(...prices) : 0
  }, [products])

  const minPower = useMemo(() => {
    const powers = products.filter((p) => p.power).map((p) => p.power!)
    return powers.length > 0 ? Math.min(...powers) : 0
  }, [products])
  const maxPower = useMemo(() => {
    const powers = products.filter((p) => p.power).map((p) => p.power!)
    return powers.length > 0 ? Math.max(...powers) : 0
  }, [products])

  const minPressure = useMemo(() => {
    const pressures = products.filter((p) => p.maxPressure).map((p) => p.maxPressure!)
    return pressures.length > 0 ? Math.min(...pressures) : 0
  }, [products])
  const maxPressure = useMemo(() => {
    const pressures = products.filter((p) => p.maxPressure).map((p) => p.maxPressure!)
    return pressures.length > 0 ? Math.max(...pressures) : 0
  }, [products])

  const handleCountryToggle = (country: string) => {
    const newCountries = filters.countries.includes(country)
      ? filters.countries.filter((c) => c !== country)
      : [...filters.countries, country]
    onFiltersChange({ ...filters, countries: newCountries })
  }

  return (
    <aside className="w-full lg:w-[260px] lg:flex-shrink-0">
      {/* Category nav */}
      <div className="bg-card border border-border rounded-lg overflow-hidden mb-4">
        <div className="flex items-center gap-2 px-4 py-3 bg-primary text-primary-foreground">
          <LayoutGrid className="h-4 w-4" />
          <span className="font-semibold text-sm">Товары</span>
        </div>
        <nav className="flex flex-col">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/product/${cat.slug}`}
              className={`px-4 py-2.5 text-sm border-b border-border last:border-b-0 transition-colors ${
                cat.slug === currentSlug
                  ? "text-primary font-semibold bg-secondary"
                  : "text-foreground hover:text-primary hover:bg-secondary/50"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Filters */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <button
          onClick={() => setFiltersOpen(!filtersOpen)}
          className="w-full flex items-center justify-between gap-2 px-4 py-3 bg-primary text-primary-foreground cursor-pointer"
        >
          <span className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            <span className="font-semibold text-sm">Фильтр по параметрам</span>
          </span>
          {filtersOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>

        {filtersOpen && (
          <div className="p-4 flex flex-col gap-5">
            {/* Price filter */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Цена</h4>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder={minPrice.toString()}
                  value={filters.priceMin}
                  onChange={(e) => onFiltersChange({ ...filters, priceMin: e.target.value })}
                  className="w-full border border-border rounded px-2 py-1.5 text-sm bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <span className="text-muted-foreground text-xs">{"—"}</span>
                <input
                  type="number"
                  placeholder={maxPrice.toString()}
                  value={filters.priceMax}
                  onChange={(e) => onFiltersChange({ ...filters, priceMax: e.target.value })}
                  className="w-full border border-border rounded px-2 py-1.5 text-sm bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            {/* Country filter */}
            {countries.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">
                  {"Страна-производитель"}
                </h4>
                {countries.map((country) => (
                  <label key={country} className="flex items-center gap-2 text-sm text-foreground cursor-pointer mb-2">
                    <input
                      type="checkbox"
                      checked={filters.countries.includes(country)}
                      onChange={() => handleCountryToggle(country)}
                      className="rounded border-border accent-primary"
                    />
                    <span>{country}</span>
                    <span className="text-muted-foreground text-xs ml-auto">
                      {`(${products.filter((p) => p.country === country).length})`}
                    </span>
                  </label>
                ))}
              </div>
            )}

            {/* Power filter */}
            {products.some((p) => p.power) && (
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">{"Мощность, Вт"}</h4>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder={minPower.toString()}
                    value={filters.powerMin}
                    onChange={(e) => onFiltersChange({ ...filters, powerMin: e.target.value })}
                    className="w-full border border-border rounded px-2 py-1.5 text-sm bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <span className="text-muted-foreground text-xs">{"—"}</span>
                  <input
                    type="number"
                    placeholder={maxPower.toString()}
                    value={filters.powerMax}
                    onChange={(e) => onFiltersChange({ ...filters, powerMax: e.target.value })}
                    className="w-full border border-border rounded px-2 py-1.5 text-sm bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
            )}

            {/* Max pressure filter */}
            {products.some((p) => p.maxPressure) && (
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">
                  {"Максимальное давление, кПа"}
                </h4>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder={minPressure.toString()}
                    value={filters.pressureMin}
                    onChange={(e) => onFiltersChange({ ...filters, pressureMin: e.target.value })}
                    className="w-full border border-border rounded px-2 py-1.5 text-sm bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <span className="text-muted-foreground text-xs">{"—"}</span>
                  <input
                    type="number"
                    placeholder={maxPressure.toString()}
                    value={filters.pressureMax}
                    onChange={(e) => onFiltersChange({ ...filters, pressureMax: e.target.value })}
                    className="w-full border border-border rounded px-2 py-1.5 text-sm bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-col gap-2 pt-2">
              <button className="w-full bg-primary text-primary-foreground font-semibold py-2.5 rounded text-sm uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer">
                Показать
              </button>
              <button
                onClick={onReset}
                className="w-full flex items-center justify-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer py-1.5"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Сбросить
              </button>
            </div>
          </div>
        )}
      </div>
    </aside>
  )
}
