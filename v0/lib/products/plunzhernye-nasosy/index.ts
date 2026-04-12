import { Product } from "../../types"
import { fka5020Product } from "./fka-5020/product"
import { fka5620Product } from "./fka-5620/product"
import { fka6615Product } from "./fka-6615/product"
import { fka7415Product } from "./fka-7415/product"
import { fkh32Product } from "./fkh-32/product"
import { bm1525Product } from "./bm-1525/product"
import { danauDbc150b5aProduct } from "./danau-dbc-150b5a/product"
import { danauDbc1510aProduct } from "./danau-dbc-1510a/product"

export const plunzhernye_nasosy: Product[] = [
  fka5020Product,
  fka5620Product,
  fka6615Product,
  fka7415Product,
  fkh32Product,
  bm1525Product,
  danauDbc150b5aProduct,
  danauDbc1510aProduct,
  {
    id: 9,
    name: "Насос высокого давления Danau DBD 1810A с регулятором давления",
    price: 26500,
    image: "/images/cat-plunger-pumps.jpg",
    inStock: true,
    badge: "new",
    category: "plunzhernye-nasosy",
    country: "Китай",
    power: 7500,
    maxPressure: 19000,
    performance: 18,
  },
]
