import { notFound } from "next/navigation"
import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CategoryView } from "@/components/category-view"
import { categories, getCategoryBySlug, getProductsByCategory } from "@/lib/catalog-data"

export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) return { title: "Категория не найдена" }
  return {
    title: `${category.name} — Грандмакс`,
    description: `${category.name}: широкий выбор по доступным ценам.`,
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) notFound()
  const products = getProductsByCategory(slug)

  return (
    <main>
      <TopBar />
      <Navbar />
      <div className="bg-background py-8 md:py-12">
        <div className="mx-auto w-[90%] max-w-[1200px]">
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: "Каталог", href: "/product" },
              { label: category.name },
            ]}
          />
          <div className="mt-6">
            <CategoryView products={products} categoryName={category.name} currentSlug={slug} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
