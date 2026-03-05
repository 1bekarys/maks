"use client"

import Image from "next/image"
import { useState } from "react"
import { ShoppingCart, Minus, Plus, LayoutGrid, List } from "lucide-react"
import { Product, formatPrice } from "@/lib/catalog-data"
import { useCart } from "@/lib/cart-context"

function ProductCard({ product, viewMode }: { product: Product; viewMode: "grid" | "list" }) {
  const [quantity, setQuantity] = useState(1)
  const { addItem, isItemInCart } = useCart()
  const itemInCart = isItemInCart(product.id)

  const handleAddToCart = () => {
    if (product.price) {
      addItem(
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          inStock: product.inStock,
        },
        quantity
      )
      setQuantity(1)
    }
  }

  if (viewMode === "list") {
    return (
      <div className="bg-card border border-border rounded-lg p-4 flex gap-5 items-start hover:shadow-md transition-shadow relative">
        {product.badge && (
          <span
            className={`absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
              product.badge === "new"
                ? "bg-green-500 text-[#ffffff]"
                : "bg-accent text-[#ffffff]"
            }`}
          >
            {product.badge === "new" ? "Новинка" : "Хит"}
          </span>
        )}
        <div className="w-[140px] h-[140px] flex-shrink-0 bg-secondary rounded flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={120}
            height={120}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground text-sm leading-snug mb-2">
            {product.name}
          </h3>
          <p className={`text-xs font-medium mb-2 ${product.inStock ? "text-green-600" : "text-accent"}`}>
            {product.inStock ? "В наличии" : "Под заказ"}
          </p>
          {product.price && (
            <p className="text-lg font-bold text-foreground">{formatPrice(product.price)}</p>
          )}
        </div>
        {product.inStock && product.price && (
          <div className="flex items-center gap-2 flex-shrink-0">
            {!itemInCart && (
              <div className="flex items-center border border-border rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1.5 hover:bg-secondary transition-colors cursor-pointer"
                  aria-label="Уменьшить"
                >
                  <Minus className="h-3 w-3 text-muted-foreground" />
                </button>
                <span className="px-2 text-sm font-medium text-foreground min-w-[28px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1.5 hover:bg-secondary transition-colors cursor-pointer"
                  aria-label="Увеличить"
                >
                  <Plus className="h-3 w-3 text-muted-foreground" />
                </button>
              </div>
            )}
            <button
              onClick={handleAddToCart}
              disabled={itemInCart}
              className={`text-sm font-semibold py-2 px-4 rounded flex items-center gap-2 transition-all ${
                itemInCart
                  ? "bg-green-600 text-white cursor-not-allowed opacity-75"
                  : "bg-primary text-primary-foreground hover:opacity-90 cursor-pointer"
              }`}>
              <ShoppingCart className="h-4 w-4" />
              {itemInCart ? "В корзине" : "В корзину"}
            </button>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden group hover:shadow-md transition-shadow relative">
      {product.badge && (
        <span
          className={`absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded ${
            product.badge === "new"
              ? "bg-green-500 text-[#ffffff]"
              : "bg-accent text-[#ffffff]"
          }`}
        >
          {product.badge === "new" ? "Новинка" : "Хит"}
        </span>
      )}

      <div className="relative aspect-square bg-secondary flex items-center justify-center p-5">
        <Image
          src={product.image}
          alt={product.name}
          width={240}
          height={240}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-foreground text-sm leading-snug mb-3 min-h-[40px]">
          {product.name}
        </h3>

        <p className={`text-xs font-medium mb-2 ${product.inStock ? "text-green-600" : "text-accent"}`}>
          {product.inStock ? "В наличии" : "Под заказ"}
        </p>

        {product.price && (
          <p className="text-xl font-bold text-foreground mb-4">{formatPrice(product.price)}</p>
        )}

        {product.inStock && product.price ? (
          <div className="flex items-center gap-2">
            {!itemInCart && (
              <div className="flex items-center border border-border rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1.5 hover:bg-secondary transition-colors cursor-pointer"
                  aria-label="Уменьшить"
                >
                  <Minus className="h-3 w-3 text-muted-foreground" />
                </button>
                <span className="px-2 text-sm font-medium text-foreground min-w-[28px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1.5 hover:bg-secondary transition-colors cursor-pointer"
                  aria-label="Увеличить"
                >
                  <Plus className="h-3 w-3 text-muted-foreground" />
                </button>
              </div>
            )}
            <button
              onClick={handleAddToCart}
              disabled={itemInCart}
              className={`flex-1 text-sm font-semibold py-2 px-3 rounded flex items-center justify-center gap-2 transition-all ${
                itemInCart
                  ? "bg-green-600 text-white cursor-not-allowed opacity-75"
                  : "bg-primary text-primary-foreground hover:opacity-90 cursor-pointer"
              }`}>
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden sm:inline">{itemInCart ? "В корзине" : "В корзину"}</span>
            </button>
          </div>
        ) : (
          <button className="w-full border border-primary text-primary text-sm font-semibold py-2 px-4 rounded hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
            Подробнее
          </button>
        )}
      </div>
    </div>
  )
}

export function CategoryProducts({
  products,
  categoryName,
}: {
  products: Product[]
  categoryName: string
}) {
  const [sortBy, setSortBy] = useState("name-asc")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const sorted = [...products].sort((a, b) => {
    switch (sortBy) {
      case "name-asc":
        return a.name.localeCompare(b.name, "ru")
      case "name-desc":
        return b.name.localeCompare(a.name, "ru")
      case "price-asc":
        return (a.price ?? Infinity) - (b.price ?? Infinity)
      case "price-desc":
        return (b.price ?? 0) - (a.price ?? 0)
      default:
        return 0
    }
  })

  return (
    <div className="flex-1 min-w-0">
      {/* Header bar */}
      <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
        <h1 className="text-2xl font-bold text-foreground">{categoryName}</h1>
        <div className="flex items-center gap-3">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-border rounded px-3 py-2 text-sm bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
          >
            <option value="name-asc">{"По наименованию (А-Я)"}</option>
            <option value="name-desc">{"По наименованию (Я-А)"}</option>
            <option value="price-asc">{"По цене (сначала дешевые)"}</option>
            <option value="price-desc">{"По цене (сначала дорогие)"}</option>
          </select>

          <div className="flex items-center border border-border rounded overflow-hidden">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 cursor-pointer transition-colors ${
                viewMode === "grid"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground"
              }`}
              aria-label="Сетка"
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 cursor-pointer transition-colors ${
                viewMode === "list"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground"
              }`}
              aria-label="Список"
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Product grid */}
      {sorted.length === 0 ? (
        <div className="bg-card border border-border rounded-lg p-12 text-center">
          <p className="text-muted-foreground">Товары в данной категории пока отсутствуют.</p>
        </div>
      ) : viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {sorted.map((product) => (
            <ProductCard key={product.id} product={product} viewMode="grid" />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {sorted.map((product) => (
            <ProductCard key={product.id} product={product} viewMode="list" />
          ))}
        </div>
      )}
    </div>
  )
}
