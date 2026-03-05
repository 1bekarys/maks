"use client"

import Link from "next/link"
import { useState } from "react"
import { LayoutGrid, ChevronDown, ChevronUp, SlidersHorizontal, RotateCcw } from "lucide-react"
import { categories } from "@/lib/catalog-data"

export function CategorySidebar({ currentSlug }: { currentSlug: string }) {
  const [priceMin, setPriceMin] = useState("")
  const [priceMax, setPriceMax] = useState("")
  const [filtersOpen, setFiltersOpen] = useState(true)

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
                  placeholder="0"
                  value={priceMin}
                  onChange={(e) => setPriceMin(e.target.value)}
                  className="w-full border border-border rounded px-2 py-1.5 text-sm bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <span className="text-muted-foreground text-xs">{"—"}</span>
                <input
                  type="number"
                  placeholder="72 000"
                  value={priceMax}
                  onChange={(e) => setPriceMax(e.target.value)}
                  className="w-full border border-border rounded px-2 py-1.5 text-sm bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            {/* Country filter */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">
                {"Страна-производитель"}
              </h4>
              <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                <input type="checkbox" className="rounded border-border accent-primary" defaultChecked />
                <span>{"Китай"}</span>
                <span className="text-muted-foreground text-xs ml-auto">{"(25)"}</span>
              </label>
            </div>

            {/* Power filter */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">{"Мощность, Вт"}</h4>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="5 500"
                  className="w-full border border-border rounded px-2 py-1.5 text-sm bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <span className="text-muted-foreground text-xs">{"—"}</span>
                <input
                  type="number"
                  placeholder="18 000"
                  className="w-full border border-border rounded px-2 py-1.5 text-sm bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            {/* Max pressure filter */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">
                {"Максимальное давление, кПа"}
              </h4>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="19 000"
                  className="w-full border border-border rounded px-2 py-1.5 text-sm bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <span className="text-muted-foreground text-xs">{"—"}</span>
                <input
                  type="number"
                  placeholder="25 000"
                  className="w-full border border-border rounded px-2 py-1.5 text-sm bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-2 pt-2">
              <button className="w-full bg-primary text-primary-foreground font-semibold py-2.5 rounded text-sm uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer">
                Показать
              </button>
              <button className="w-full flex items-center justify-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer py-1.5">
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
