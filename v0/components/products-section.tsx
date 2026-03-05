"use client"

import Image from "next/image"
import { ShoppingCart, Minus, Plus } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/lib/cart-context"

interface Product {
  id: number
  name: string
  price: number | null
  image: string
  inStock: boolean
  badge?: "new" | "hit"
}

const products: Product[] = [
  {
    id: 1,
    name: "Шланг высокого давления двуоплеточный 20 м. 350 бар",
    price: 8900,
    image: "/images/product-hose.jpg",
    inStock: true,
    badge: "new",
  },
  {
    id: 2,
    name: "Пистолет для мойки высокого давления",
    price: 2500,
    image: "/images/product-pistol.jpg",
    inStock: true,
    badge: "hit",
  },
  {
    id: 3,
    name: "Каналопромывочная форсунка, резьба 3/8 дюйма",
    price: 2200,
    image: "/images/product-nozzle.jpg",
    inStock: true,
  },
  {
    id: 4,
    name: "Насос высокого давления BM 1525 с регулятором давления",
    price: 25000,
    image: "/images/product-pump.jpg",
    inStock: true,
  },
]

function formatPrice(price: number) {
  return new Intl.NumberFormat("ru-RU").format(price) + " \u20BD"
}

function ProductCard({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

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

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden group hover:shadow-lg transition-shadow relative">
      {product.badge && (
        <span
          className={`absolute top-3 left-3 z-10 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded ${
            product.badge === "new"
              ? "bg-green-500 text-[#ffffff]"
              : "bg-[#c8a96e] text-[#ffffff]"
          }`}
        >
          {product.badge === "new" ? "Новинка" : "Хит"}
        </span>
      )}

      <div className="relative aspect-square bg-[#f5f6f8] flex items-center justify-center p-6">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-[#1f2d3d] text-sm leading-snug mb-3 min-h-[40px]">
          {product.name}
        </h3>

        {product.inStock ? (
          <>
            <p className="text-green-600 text-xs font-medium mb-2">В наличии</p>
            <p className="text-xl font-bold text-[#1f2d3d] mb-4">
              {product.price ? formatPrice(product.price) : ""}
            </p>

            <div className="flex items-center gap-3">
              <div className="flex items-center border border-border rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-[#f1f3f6] transition-colors cursor-pointer"
                  aria-label="Уменьшить количество"
                >
                  <Minus className="h-3 w-3 text-[#6b7b8d]" />
                </button>
                <span className="px-3 text-sm font-medium text-[#1f2d3d] min-w-[32px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-[#f1f3f6] transition-colors cursor-pointer"
                  aria-label="Увеличить количество"
                >
                  <Plus className="h-3 w-3 text-[#6b7b8d]" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 bg-[#1e4f8a] text-[#ffffff] text-sm font-semibold py-2.5 px-4 rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer">
                <ShoppingCart className="h-4 w-4" />
                В корзину
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="text-[#6b7b8d] text-xs font-medium mb-2">Нет в наличии</p>
            <button className="w-full border border-[#1e4f8a] text-[#1e4f8a] text-sm font-semibold py-2.5 px-4 rounded hover:bg-[#1e4f8a] hover:text-[#ffffff] transition-colors cursor-pointer">
              Подробнее
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export function ProductsSection() {
  return (
    <section id="catalog" className="bg-[#f5f6f8] py-16 md:py-20">
      <div className="mx-auto w-[90%] max-w-[1200px]">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-[#1f2d3d]">Наша продукция</h2>
          <a
            href="/product"
            className="text-sm font-semibold text-[#1e4f8a] hover:underline uppercase tracking-wider"
          >
            Весь каталог
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
