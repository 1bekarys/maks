import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CategoryView } from "@/components/category-view"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { getCategoryBySlug, getProductsByCategory } from "@/lib/catalog-data"
import { notFound } from "next/navigation"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category: categorySlug } = await params
  const category = getCategoryBySlug(categorySlug)
  
  if (!category) {
    return {
      title: "Категория не найдена",
    }
  }

  return {
    title: `${category.name} — Грандмакс`,
    description: `Каталог ${category.name.toLowerCase()}`,
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category: categorySlug } = await params
  const category = getCategoryBySlug(categorySlug)
  
  if (!category) {
    notFound()
  }

  const products = getProductsByCategory(categorySlug)

  return (
    <main>
      <TopBar />
      <Navbar />
      <div className="bg-background py-8 md:py-12">
        <div className="mx-auto w-[90%] max-w-[1200px]">
          <h1 className="text-3xl font-bold text-foreground mb-2">{category.name}</h1>
          <Breadcrumbs 
            items={[
              { label: "Главная", href: "/" },
              { label: "Каталог", href: "/product" },
              { label: category.name }
            ]} 
          />

          <div className="mt-8">
            <CategoryView 
              products={products}
              categoryName={category.name}
              currentSlug={categorySlug}
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
