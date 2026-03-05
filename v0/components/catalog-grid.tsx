import Image from "next/image"
import Link from "next/link"
import { Camera } from "lucide-react"
import { categories } from "@/lib/catalog-data"

export function CatalogGrid() {
  return (
    <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px border border-border bg-border">
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/product/${cat.slug}`}
          className="bg-card flex flex-col items-center justify-center p-5 hover:bg-secondary transition-colors group"
        >
          <div className="w-full aspect-square relative flex items-center justify-center mb-4">
            {cat.image ? (
              <Image
                src={cat.image}
                alt={cat.name}
                width={180}
                height={180}
                className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-muted-foreground">
                <Camera className="h-12 w-12 mb-2 opacity-40" />
                <span className="text-xs uppercase tracking-wider opacity-40">
                  {"Нет фото"}
                </span>
              </div>
            )}
          </div>
          <h3 className="text-sm font-semibold text-foreground text-center leading-snug mb-1 group-hover:text-primary transition-colors">
            {cat.name}
          </h3>
          <p className="text-xs text-muted-foreground">
            {cat.productCount} {getProductWord(cat.productCount)}
          </p>
        </Link>
      ))}
    </div>
  )
}

function getProductWord(count: number): string {
  const abs = Math.abs(count) % 100
  const lastDigit = abs % 10
  if (abs > 10 && abs < 20) return "товаров"
  if (lastDigit > 1 && lastDigit < 5) return "товара"
  if (lastDigit === 1) return "товар"
  return "товаров"
}
