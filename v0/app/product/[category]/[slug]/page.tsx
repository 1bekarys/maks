import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { TopBar } from '@/components/top-bar'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AddToCartButton } from '@/components/product-add-to-cart'
import { ProductImageGallery } from '@/components/product-image-gallery'
import {
  getProductByCategoryAndSlug,
  getProductStaticParams,
  getRelatedProducts,
  getCategoryBySlug,
  formatPrice,
} from '@/lib/catalog-data'

interface ProductPageProps {
  params: Promise<{
    category: string
    slug: string
  }>
}

/**
 * Generate static parameters for all products
 */
export async function generateStaticParams() {
  return getProductStaticParams()
}

/**
 * Generate dynamic metadata for SEO
 */
export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { category, slug } = await params
  const product = getProductByCategoryAndSlug(category, slug)

  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  const categoryData = getCategoryBySlug(category)

  return {
    title: `${product.name} — КОМПАМП`,
    description:
      product.description ||
      `Buy ${product.name} from KOMPAMП. Price: ${formatPrice(product.price || 0)}.`,
    keywords: [product.name, categoryData?.name || '', 'equipment'].filter(Boolean),
  }
}

// Product Specs Component
function ProductSpecsTable({ specs }: { specs: Record<string, any> }) {
  if (!specs || Object.keys(specs).length === 0) return null

  const specLabels: Record<string, string> = {
    manufacturer: 'Производитель',
    maxPressure: 'Макс. давление',
    waterTemperature: 'Температура воды',
    performance: 'Производительность',
    power: 'Мощность',
    material: 'Материал',
    length: 'Длина',
    country: 'Страна',
  }

  const formatValue = (value: any, key: string): string => {
    if (value === null || value === undefined) return '—'
    if (typeof value === 'number') {
      if (key.includes('pressure') || key.includes('Pressure')) return `${value} кПа`
      if (key.includes('temperature') || key.includes('Temperature')) return `${value}°C`
      if (key.includes('performance') || key.includes('Performance')) return `${value} л/мин`
      if (key.includes('power') || key.includes('Power')) return `${value} Вт`
      if (key.includes('length') || key.includes('Length')) return `${value} м`
      return String(value)
    }
    return String(value)
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <tbody>
          {Object.entries(specs).map(([key, value]) => (
            <tr key={key} className="border-b border-border">
              <td className="py-3 px-3 font-medium text-muted-foreground bg-secondary w-1/3">
                {specLabels[key] || key}
              </td>
              <td className="py-3 px-3 text-foreground">{formatValue(value, key)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { category, slug } = await params
  const product = getProductByCategoryAndSlug(category, slug)

  if (!product) {
    notFound()
  }

  const categoryData = getCategoryBySlug(category)
  const relatedProducts = getRelatedProducts(category, product.id, 4)

  return (
    <main>
      <TopBar />
      <Navbar />

      {/* Product Header Section */}
      <div className="bg-background py-8 md:py-12">
        <div className="mx-auto w-[90%] max-w-[1200px]">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: 'Главная', href: '/' },
              { label: 'Каталог', href: '/product' },
              { label: categoryData?.name || 'Категория', href: `/product/${category}` },
              { label: product.name },
            ]}
          />

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Left: Image Gallery */}
            <div className="flex flex-col gap-4">
              <ProductImageGallery
                images={product.images || [product.image]}
                productName={product.name}
              />
            </div>

            {/* Right: Product Info */}
            <div className="space-y-6">
              {/* Title and Badge */}
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground flex-1">
                    {product.name}
                  </h1>
                  {product.badge && (
                    <span
                      className={`inline-block px-3 py-1 rounded text-xs font-semibold text-white whitespace-nowrap flex-shrink-0 ${
                        product.badge === 'new' ? 'bg-blue-600' : 'bg-red-600'
                      }`}
                    >
                      {product.badge === 'new' ? 'Новинка' : 'Хит'}
                    </span>
                  )}
                </div>
                {product.country && (
                  <p className="text-sm text-muted-foreground">Производство: {product.country}</p>
                )}
              </div>

              {/* Price & Stock */}
              <div className="bg-secondary rounded-lg p-4 border border-border space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Цена</p>
                  <p className="text-3xl font-bold text-foreground">
                    {formatPrice(product.price || 0)}
                  </p>
                </div>

                {/* Stock Status */}
                <div className="flex items-center gap-2 text-sm">
                  <span
                    className={`inline-block px-2 py-1 rounded font-medium ${
                      product.inStock
                        ? 'bg-green-100 text-green-800'
                        : 'bg-orange-100 text-orange-800'
                    }`}
                  >
                    {product.inStock ? '✓ В наличии' : '⏱ Под заказ'}
                  </span>
                </div>

                {/* Add to Cart */}
                <AddToCartButton product={product} />

                {/* Contact Button */}
                <Button variant="outline" className="w-full">
                  Задать вопрос
                </Button>
              </div>

              {/* Quick Specs */}
              {product.characteristics && (
                <div className="bg-secondary rounded-lg p-4 border border-border space-y-3">
                  <h3 className="font-semibold text-foreground">Основные характеристики</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {product.maxPressure && (
                      <div className="flex justify-between p-2 bg-background rounded">
                        <span className="text-muted-foreground">Давление:</span>
                        <span className="font-medium text-foreground">{product.maxPressure} кПа</span>
                      </div>
                    )}
                    {product.performance && (
                      <div className="flex justify-between p-2 bg-background rounded">
                        <span className="text-muted-foreground">Производ.:</span>
                        <span className="font-medium text-foreground">{product.performance} л/мин</span>
                      </div>
                    )}
                    {product.power && (
                      <div className="flex justify-between p-2 bg-background rounded">
                        <span className="text-muted-foreground">Мощность:</span>
                        <span className="font-medium text-foreground">{product.power} Вт</span>
                      </div>
                    )}
                    {product.material && (
                      <div className="flex justify-between p-2 bg-background rounded">
                        <span className="text-muted-foreground">Материал:</span>
                        <span className="font-medium text-foreground">{product.material}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-background border-t border-border py-8 md:py-12">
        <div className="mx-auto w-[90%] max-w-[1200px]">
          {product.description || product.detailedDescription || product.assembly ? (
            <Tabs defaultValue="description" className="space-y-4">
              <TabsList className="bg-secondary border border-border">
                {product.description && <TabsTrigger value="description">Описание</TabsTrigger>}
                {product.detailedDescription && <TabsTrigger value="details">Детали</TabsTrigger>}
                {product.assembly && <TabsTrigger value="assembly">Комплектация</TabsTrigger>}
              </TabsList>

              {product.description && (
                <TabsContent value="description" className="text-foreground whitespace-pre-wrap leading-relaxed">
                  {product.description}
                </TabsContent>
              )}

              {product.detailedDescription && (
                <TabsContent value="details" className="text-foreground whitespace-pre-wrap leading-relaxed">
                  {product.detailedDescription}
                </TabsContent>
              )}

              {product.assembly && (
                <TabsContent value="assembly" className="text-foreground whitespace-pre-wrap leading-relaxed">
                  {product.assembly}
                </TabsContent>
              )}
            </Tabs>
          ) : null}
        </div>
      </div>

      {/* Specifications Section */}
      {product.characteristics && (
        <div className="bg-background border-t border-border py-8 md:py-12">
          <div className="mx-auto w-[90%] max-w-[1200px]">
            <h2 className="text-2xl font-bold text-foreground mb-6">Полные характеристики</h2>
            <ProductSpecsTable specs={product.characteristics} />
          </div>
        </div>
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="bg-background border-t border-border py-8 md:py-12">
          <div className="mx-auto w-[90%] max-w-[1200px]">
            <h2 className="text-2xl font-bold text-foreground mb-6">Похожие товары</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedProducts.map((relProduct) => (
                <Link
                  key={relProduct.id}
                  href={`/product/${category}/${relProduct.id}`}
                  className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative bg-secondary aspect-square">
                    <Image
                      src={relProduct.image}
                      alt={relProduct.name}
                      fill
                      className="object-contain p-4 hover:scale-105 transition-transform"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                  <div className="p-3">
                    <h4 className="font-semibold text-foreground text-sm line-clamp-2 mb-2">
                      {relProduct.name}
                    </h4>
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-primary">{formatPrice(relProduct.price || 0)}</p>
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded ${
                          relProduct.inStock
                            ? 'bg-green-100 text-green-800'
                            : 'bg-orange-100 text-orange-800'
                        }`}
                      >
                        {relProduct.inStock ? 'В наличии' : 'На заказ'}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Back Link */}
      <div className="bg-background border-t border-border py-8 md:py-12">
        <div className="mx-auto w-[90%] max-w-[1200px]">
          <Link
            href={`/product/${category}`}
            className="text-primary hover:underline font-medium"
          >
            ← Вернуться в категорию {categoryData?.name}
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}
