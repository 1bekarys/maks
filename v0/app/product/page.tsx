import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CatalogGrid } from "@/components/catalog-grid"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata = {
  title: "Каталог — Грандмакс",
  description: "Каталог насосного оборудования и комплектующих",
}

export default function ProductPage() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <div className="bg-background py-8 md:py-12">
        <div className="mx-auto w-[90%] max-w-[1200px]">
          <h1 className="text-3xl font-bold text-foreground mb-2">Каталог</h1>
          <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Каталог" }]} />

          <div className="mt-8 border-l-4 border-accent bg-secondary px-6 py-4">
            <p className="text-muted-foreground text-sm leading-relaxed">
              В нашем каталоге собраны товары, которые отвечают самым высоким стандартам качества. Мы позаботились о том, чтобы каждый нашёл именно то, что искал.
            </p>
          </div>

          <CatalogGrid />
        </div>
      </div>
      <Footer />
    </main>
  )
}
