"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Search, ShoppingCart, Menu, X } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { categories } from "@/lib/categories"

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [catalogOpen, setCatalogOpen] = useState(false)
  const router = useRouter()
  const { totalItems, openDrawer } = useCart()

  const links = [
    { label: "Компания", href: "#about" },
    { label: "Информация", href: "#info" },
    { label: "Оплата и доставка", href: "#delivery" },
    { label: "Контакты", href: "#contacts" },
  ]

  return (
    <nav className="bg-card sticky top-0 z-50 border-b border-border">
      <div className="mx-auto w-[90%] max-w-[1200px] flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold text-primary tracking-tight">
          Грандмакс
        </Link>

        <button
          className="md:hidden text-foreground cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Открыть меню"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <div className="hidden md:flex items-center gap-8">
          <div
            className="relative"
            onMouseEnter={() => setCatalogOpen(true)}
            onMouseLeave={() => setCatalogOpen(false)}
          >
            <button 
              onClick={() => router.push("/product")}
              className="text-foreground font-medium hover:text-primary transition-colors text-[15px] cursor-pointer">
              Каталог
            </button>
            {catalogOpen && (
              <div className="absolute left-0 mt-0 w-48 bg-popover text-popover-foreground rounded-md border shadow-md z-50 py-1">
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/product/${category.slug}`}
                    className="block px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground font-medium hover:text-primary transition-colors text-[15px]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-foreground hover:text-primary transition-colors cursor-pointer" aria-label="Поиск">
            <Search className="h-5 w-5" />
          </button>
          <button
            onClick={openDrawer}
            className="text-foreground hover:text-primary transition-colors cursor-pointer relative"
            aria-label="Корзина"
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#c8a96e] text-[#ffffff] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems > 99 ? "99+" : totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="mx-auto w-[90%] max-w-[1200px] py-4 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="text-foreground font-medium text-[15px] px-2">Каталог</div>
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/product/${category.slug}`}
                  className="text-foreground text-sm hover:text-primary transition-colors pl-4"
                  onClick={() => setMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground font-medium hover:text-primary transition-colors text-[15px]"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-2 border-t border-border">
              <button className="text-foreground hover:text-primary transition-colors cursor-pointer" aria-label="Поиск">
                <Search className="h-5 w-5" />
              </button>
              <button
                onClick={() => {
                  setMenuOpen(false)
                  openDrawer()
                }}
                className="text-foreground hover:text-primary transition-colors cursor-pointer relative"
                aria-label="Корзина"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#c8a96e] text-[#ffffff] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems > 99 ? "99+" : totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
