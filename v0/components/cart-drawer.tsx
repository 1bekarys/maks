"use client"

import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useEffect } from "react"

function formatPrice(price: number) {
  return new Intl.NumberFormat("ru-RU").format(price) + " \u20BD"
}

export function CartDrawer() {
  const { items, removeItem, totalPrice, totalItems, isDrawerOpen, closeDrawer } = useCart()

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isDrawerOpen])

  return (
    <>
      {/* Blurred backdrop */}
      <div
        className={`fixed inset-0 z-[100] backdrop-blur-sm bg-transparent transition-opacity duration-300 ${
          isDrawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 z-[101] h-full w-full max-w-md bg-card shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Корзина"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <h2 className="text-lg font-bold text-foreground">
            {"Корзина"}{" "}
            <span className="text-muted-foreground font-normal text-sm">
              ({totalItems})
            </span>
          </h2>
          <button
            onClick={closeDrawer}
            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer p-1"
            aria-label="Закрыть корзину"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-5 text-center">
              <p className="text-muted-foreground text-sm mb-4">Корзина пуста</p>
              <button
                onClick={closeDrawer}
                className="text-primary font-semibold text-sm hover:underline cursor-pointer"
              >
                Перейти в каталог
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4 px-5 py-4">
                  <div className="w-[70px] h-[70px] flex-shrink-0 bg-secondary rounded flex items-center justify-center overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={70}
                      height={70}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-foreground leading-snug line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {item.quantity} {"шт."}
                    </p>
                  </div>
                  <div className="flex flex-col items-end justify-between flex-shrink-0">
                    <span className="text-sm font-bold text-foreground whitespace-nowrap">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-muted-foreground hover:text-destructive transition-colors cursor-pointer"
                      aria-label={`Удалить ${item.name}`}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border px-5 py-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{"Итого:"}</span>
              <span className="text-xl font-bold text-foreground">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <Link
              href="/cart"
              onClick={closeDrawer}
              className="w-full bg-primary text-primary-foreground text-sm font-semibold py-3 px-4 rounded text-center hover:opacity-90 transition-opacity block"
            >
              Перейти в корзину
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
