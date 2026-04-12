import { Product } from "../../../types"
import { bm1525Characteristics } from "./characteristics"
import { bm1525Description } from "./description"
import { bm1525Images } from "./images"

export const bm1525Product: Product = {
  id: 6,
  name: "Насос высокого давления BM 1525 с регулятором давления и манометром",
  price: 25000,
  image: bm1525Images[0],
  images: bm1525Images,
  inStock: true,
  badge: "hit",
  category: "plunzhernye-nasosy",
  country: bm1525Characteristics.manufacturer,
  power: bm1525Characteristics.power,
  maxPressure: bm1525Characteristics.maxPressure,
  performance: bm1525Characteristics.performance,
  description: bm1525Description.overview,
  characteristics: bm1525Characteristics,
  detailedDescription: bm1525Description.details,
  assembly: bm1525Description.assembly,
}
