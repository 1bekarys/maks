import { Category } from "./types"
import { getProductCountByCategory } from "./products"

export const categories: Category[] = [
  {
    slug: "plunzhernye-nasosy",
    name: "Плунжерные насосы",
    image: "/images/cat-plunger-pumps.jpg",
    productCount: getProductCountByCategory("plunzhernye-nasosy"),
  },
  {
    slug: "moyki-vysokogo-davleniya",
    name: "Мойки высокого давления",
    image: "/images/cat-pressure-washers.jpg",
    productCount: getProductCountByCategory("moyki-vysokogo-davleniya"),
  },
  {
    slug: "perekhodniki-i-soedineniya",
    name: "Переходники и соединения",
    image: "/images/cat-adapters.jpg",
    productCount: getProductCountByCategory("perekhodniki-i-soedineniya"),
  },
  {
    slug: "katushki-dlya-shlangov",
    name: "Катушки для шлангов",
    image: "/images/cat-hose-reels.jpg",
    productCount: getProductCountByCategory("katushki-dlya-shlangov"),
  },
  {
    slug: "nasadki-forsunki",
    name: "Насадки, форсунки",
    image: "/images/cat-nozzles.jpg",
    productCount: getProductCountByCategory("nasadki-forsunki"),
  },
  {
    slug: "pistolety-dlya-moyki",
    name: "Пистолеты для мойки",
    image: "/images/cat-wash-guns.jpg",
    productCount: getProductCountByCategory("pistolety-dlya-moyki"),
  },
  {
    slug: "bystrorazyomnye-soedineniya",
    name: "Быстроразъёмные соединения",
    image: "/images/cat-quick-connect.jpg",
    productCount: getProductCountByCategory("bystrorazyomnye-soedineniya"),
  },
  {
    slug: "shlangi-vysokogo-davleniya",
    name: "Шланги высокого давления",
    image: "/images/cat-hoses.jpg",
    productCount: getProductCountByCategory("shlangi-vysokogo-davleniya"),
  },
  {
    slug: "prochie-aksessuary",
    name: "Прочие аксессуары",
    image: "",
    productCount: getProductCountByCategory("prochie-aksessuary"),
  },
  {
    slug: "zapasnye-chasti",
    name: "Запасные части",
    image: "/images/cat-spare-parts.jpg",
    productCount: getProductCountByCategory("zapasnye-chasti"),
  },
]
