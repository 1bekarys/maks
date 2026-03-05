export interface Category {
  slug: string
  name: string
  image: string
  productCount: number
}

export interface Product {
  id: number
  name: string
  price: number | null
  image: string
  inStock: boolean
  badge?: "new" | "hit"
  category: string
  country?: string
  power?: number
  maxPressure?: number
  performance?: number
}

export const categories: Category[] = [
  {
    slug: "plunzhernye-nasosy",
    name: "Плунжерные насосы",
    image: "/images/cat-plunger-pumps.jpg",
    productCount: 25,
  },
  {
    slug: "moyki-vysokogo-davleniya",
    name: "Мойки высокого давления",
    image: "/images/cat-pressure-washers.jpg",
    productCount: 5,
  },
  {
    slug: "perekhodniki-i-soedineniya",
    name: "Переходники и соединения",
    image: "/images/cat-adapters.jpg",
    productCount: 26,
  },
  {
    slug: "katushki-dlya-shlangov",
    name: "Катушки для шлангов",
    image: "/images/cat-hose-reels.jpg",
    productCount: 5,
  },
  {
    slug: "nasadki-forsunki",
    name: "Насадки, форсунки",
    image: "/images/cat-nozzles.jpg",
    productCount: 38,
  },
  {
    slug: "pistolety-dlya-moyki",
    name: "Пистолеты для мойки",
    image: "/images/cat-wash-guns.jpg",
    productCount: 3,
  },
  {
    slug: "bystrorazyomnye-soedineniya",
    name: "Быстроразъёмные соединения",
    image: "/images/cat-quick-connect.jpg",
    productCount: 25,
  },
  {
    slug: "shlangi-vysokogo-davleniya",
    name: "Шланги высокого давления",
    image: "/images/cat-hoses.jpg",
    productCount: 4,
  },
  {
    slug: "prochie-aksessuary",
    name: "Прочие аксессуары",
    image: "",
    productCount: 2,
  },
  {
    slug: "zapasnye-chasti",
    name: "Запасные части",
    image: "/images/cat-spare-parts.jpg",
    productCount: 24,
  },
]

export const allProducts: Product[] = [
  // Плунжерные насосы
  { id: 1, name: "Насос высокого давления FKA 5020", price: 67400, image: "/images/cat-plunger-pumps.jpg", inStock: true, category: "plunzhernye-nasosy", country: "Китай", power: 5500, maxPressure: 20000, performance: 20 },
  { id: 2, name: "Насос высокого давления FKA 5620", price: 68100, image: "/images/cat-plunger-pumps.jpg", inStock: true, category: "plunzhernye-nasosy", country: "Китай", power: 7500, maxPressure: 20000, performance: 21 },
  { id: 3, name: "Насос высокого давления FKA 6615", price: 70200, image: "/images/cat-plunger-pumps.jpg", inStock: true, category: "plunzhernye-nasosy", country: "Китай", power: 11000, maxPressure: 25000, performance: 25 },
  { id: 4, name: "Насос высокого давления FKA 7415", price: 72000, image: "/images/cat-plunger-pumps.jpg", inStock: true, category: "plunzhernye-nasosy", country: "Китай", power: 15000, maxPressure: 25000, performance: 30 },
  { id: 5, name: "Насос высокого давления FKH 32", price: null, image: "/images/cat-plunger-pumps.jpg", inStock: false, category: "plunzhernye-nasosy", country: "Китай", power: 5500, maxPressure: 19000, performance: 32 },
  { id: 6, name: "Насос высокого давления BM 1525 с регулятором давления и манометром", price: 25000, image: "/images/product-pump.jpg", inStock: true, badge: "hit", category: "plunzhernye-nasosy", country: "Китай", power: 5500, maxPressure: 25000, performance: 15 },
  { id: 7, name: "Насос высокого давления Danau DBC 150B5A/1509A/1508A с регулятором давления", price: 24000, image: "/images/cat-plunger-pumps.jpg", inStock: true, category: "plunzhernye-nasosy", country: "Китай", power: 5500, maxPressure: 19000, performance: 15 },
  { id: 8, name: "Насос высокого давления Danau DBC 1510A с регулятором давления", price: 24500, image: "/images/cat-plunger-pumps.jpg", inStock: true, category: "plunzhernye-nasosy", country: "Китай", power: 5500, maxPressure: 19000, performance: 15 },
  { id: 9, name: "Насос высокого давления Danau DBD 1810A с регулятором давления", price: 26500, image: "/images/cat-plunger-pumps.jpg", inStock: true, badge: "new", category: "plunzhernye-nasosy", country: "Китай", power: 7500, maxPressure: 19000, performance: 18 },

  // Мойки высокого давления
  { id: 10, name: "Мойка высокого давления 200 бар 15 л/мин", price: 89000, image: "/images/cat-pressure-washers.jpg", inStock: true, category: "moyki-vysokogo-davleniya", country: "Китай", power: 5500, maxPressure: 20000 },
  { id: 11, name: "Мойка высокого давления 250 бар 15 л/мин", price: 95000, image: "/images/cat-pressure-washers.jpg", inStock: true, badge: "hit", category: "moyki-vysokogo-davleniya", country: "Китай", power: 7500, maxPressure: 25000 },
  { id: 12, name: "Мойка высокого давления 150 бар 12 л/мин", price: 65000, image: "/images/cat-pressure-washers.jpg", inStock: true, category: "moyki-vysokogo-davleniya", country: "Китай", power: 5500, maxPressure: 15000 },

  // Переходники и соединения
  { id: 13, name: "Переходник М22х1.5 наружная - 3/8 наружная", price: 350, image: "/images/cat-adapters.jpg", inStock: true, category: "perekhodniki-i-soedineniya" },
  { id: 14, name: "Переходник М22х1.5 внутренняя - 3/8 внутренняя", price: 380, image: "/images/cat-adapters.jpg", inStock: true, category: "perekhodniki-i-soedineniya" },
  { id: 15, name: "Штуцер 3/8 наружная - 3/8 наружная", price: 250, image: "/images/cat-adapters.jpg", inStock: true, category: "perekhodniki-i-soedineniya" },

  // Катушки для шлангов
  { id: 16, name: "Катушка для шланга высокого давления 20 м", price: 15000, image: "/images/cat-hose-reels.jpg", inStock: true, category: "katushki-dlya-shlangov" },
  { id: 17, name: "Катушка для шланга высокого давления 40 м", price: 22000, image: "/images/cat-hose-reels.jpg", inStock: true, badge: "new", category: "katushki-dlya-shlangov" },

  // Насадки, форсунки
  { id: 18, name: "Каналопромывочная форсунка, резьба 3/8 дюйма", price: 2200, image: "/images/product-nozzle.jpg", inStock: true, category: "nasadki-forsunki" },
  { id: 19, name: "Форсунка веерная 25 градусов 1/4", price: 350, image: "/images/cat-nozzles.jpg", inStock: true, category: "nasadki-forsunki" },
  { id: 20, name: "Грязевая фреза 3/8 дюйма 350 бар", price: 3500, image: "/images/cat-nozzles.jpg", inStock: true, badge: "hit", category: "nasadki-forsunki" },

  // Пистолеты для мойки
  { id: 21, name: "Пистолет для мойки высокого давления", price: 2500, image: "/images/product-pistol.jpg", inStock: true, badge: "hit", category: "pistolety-dlya-moyki" },
  { id: 22, name: "Пистолет для мойки ВД с вращающимся соединением", price: 3800, image: "/images/cat-wash-guns.jpg", inStock: true, category: "pistolety-dlya-moyki" },

  // Быстроразъёмные соединения
  { id: 23, name: "Быстросъёмная муфта 3/8 внутренняя", price: 450, image: "/images/cat-quick-connect.jpg", inStock: true, category: "bystrorazyomnye-soedineniya" },
  { id: 24, name: "Быстросъёмный штекер 3/8 наружная", price: 400, image: "/images/cat-quick-connect.jpg", inStock: true, category: "bystrorazyomnye-soedineniya" },
  { id: 25, name: "Быстросъёмная муфта 1/4 внутренняя", price: 380, image: "/images/cat-quick-connect.jpg", inStock: true, badge: "new", category: "bystrorazyomnye-soedineniya" },

  // Шланги высокого давления
  { id: 26, name: "Шланг высокого давления двуоплёточный 20 м 350 бар", price: 8900, image: "/images/product-hose.jpg", inStock: true, badge: "new", category: "shlangi-vysokogo-davleniya" },
  { id: 27, name: "Шланг высокого давления однооплёточный 10 м 250 бар", price: 4500, image: "/images/cat-hoses.jpg", inStock: true, category: "shlangi-vysokogo-davleniya" },

  // Прочие аксессуары
  { id: 28, name: "Пенокомплект с бачком 1 л", price: 2800, image: "/images/cat-nozzles.jpg", inStock: true, category: "prochie-aksessuary" },

  // Запасные части
  { id: 29, name: "Комплект клапанов для насоса FKA", price: 3200, image: "/images/cat-spare-parts.jpg", inStock: true, category: "zapasnye-chasti" },
  { id: 30, name: "Комплект уплотнений для насоса BM 1525", price: 1800, image: "/images/cat-spare-parts.jpg", inStock: true, category: "zapasnye-chasti" },
  { id: 31, name: "Поршень керамический 20 мм", price: 2500, image: "/images/cat-spare-parts.jpg", inStock: true, badge: "hit", category: "zapasnye-chasti" },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

export function getProductsByCategory(slug: string): Product[] {
  return allProducts.filter((p) => p.category === slug)
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("ru-RU").format(price) + " \u20BD"
}
