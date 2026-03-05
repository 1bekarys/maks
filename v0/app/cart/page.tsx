"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, X, Trash2, Printer, ArrowLeft } from "lucide-react"
import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { useCart } from "@/lib/cart-context"

function formatPrice(price: number) {
  return new Intl.NumberFormat("ru-RU").format(price) + " \u20BD"
}

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, totalPrice } = useCart()

  return (
    <main>
      <TopBar />
      <Navbar />
      <div className="bg-background py-8 md:py-12 min-h-[60vh]">
        <div className="mx-auto w-[90%] max-w-[1200px]">
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: "Корзина" },
            ]}
          />

          <h1 className="text-3xl font-bold text-foreground mt-4 mb-8">Корзина</h1>

          {items.length === 0 ? (
            <div className="bg-card border border-border rounded-lg p-12 text-center">
              <p className="text-muted-foreground mb-4">Ваша корзина пуста</p>
              <Link
                href="/product"
                className="inline-block bg-primary text-primary-foreground font-semibold text-sm py-3 px-6 rounded hover:opacity-90 transition-opacity"
              >
                В каталог
              </Link>
            </div>
          ) : (
            <>
              {/* Table header */}
              <div className="hidden md:grid grid-cols-[1fr_2fr_auto_auto_auto_auto] gap-4 items-center px-4 py-3 border-b border-border text-xs font-medium text-muted-foreground uppercase tracking-wider">
                <span />
                <span>Наименование</span>
                <span className="w-[100px] text-right">Цена</span>
                <span className="w-[120px] text-center">Количество</span>
                <span className="w-[100px] text-right">Сумма</span>
                <span className="w-[40px]" />
              </div>

              {/* Cart items */}
              <div className="divide-y divide-border border-b border-border">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-1 md:grid-cols-[1fr_2fr_auto_auto_auto_auto] gap-4 items-center px-4 py-5"
                  >
                    {/* Image */}
                    <div className="w-[80px] h-[80px] bg-secondary rounded flex items-center justify-center overflow-hidden mx-auto md:mx-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Name & info */}
                    <div className="text-center md:text-left">
                      <h3 className="text-sm font-semibold text-foreground leading-snug">
                        {item.name}
                      </h3>
                      <p className="text-xs text-green-600 mt-1">{"В наличии"}</p>
                      {item.country && (
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {"Страна-производитель: "}{item.country}
                        </p>
                      )}
                    </div>

                    {/* Price */}
                    <div className="w-[100px] text-right">
                      <span className="text-sm font-medium text-foreground">
                        {formatPrice(item.price)}
                      </span>
                    </div>

                    {/* Quantity */}
                    <div className="w-[120px] flex items-center justify-center">
                      <div className="flex items-center border border-border rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-secondary transition-colors cursor-pointer"
                          aria-label="Уменьшить"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3 text-muted-foreground" />
                        </button>
                        <span className="px-3 text-sm font-medium text-foreground min-w-[32px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-secondary transition-colors cursor-pointer"
                          aria-label="Увеличить"
                        >
                          <Plus className="h-3 w-3 text-muted-foreground" />
                        </button>
                      </div>
                    </div>

                    {/* Subtotal */}
                    <div className="w-[100px] text-right">
                      <span className="text-sm font-bold text-foreground">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>

                    {/* Remove */}
                    <div className="w-[40px] flex justify-center">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors cursor-pointer p-1"
                        aria-label={`Удалить ${item.name}`}
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Clear + Total row */}
              <div className="flex items-center justify-between mt-6 flex-wrap gap-4">
                <button
                  onClick={clearCart}
                  className="flex items-center gap-2 border border-border text-muted-foreground hover:text-foreground hover:border-foreground text-sm font-medium py-2.5 px-5 rounded transition-colors cursor-pointer"
                >
                  <Trash2 className="h-4 w-4" />
                  ОЧИСТИТЬ КОРЗИНУ
                </button>
                <div className="text-right">
                  <span className="text-muted-foreground text-sm mr-2">{"Итого:"}</span>
                  <span className="text-2xl font-bold text-foreground">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
              </div>

              {/* Bottom action bar */}
              <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-border flex-wrap">
                <Link
                  href="/product"
                  className="flex items-center gap-2 border border-foreground text-foreground text-sm font-semibold py-3 px-6 rounded hover:bg-foreground hover:text-background transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  В КАТАЛОГ
                </Link>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => window.print()}
                    className="flex items-center gap-2 border border-border text-muted-foreground hover:text-foreground text-sm font-medium py-3 px-5 rounded transition-colors cursor-pointer"
                  >
                    <Printer className="h-4 w-4" />
                    РАСПЕЧАТАТЬ
                  </button>
                  <button className="bg-[#c8a96e] text-[#ffffff] text-sm font-bold py-3 px-8 rounded hover:opacity-90 transition-opacity cursor-pointer">
                    ОФОРМИТЬ ЗАКАЗ
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}
