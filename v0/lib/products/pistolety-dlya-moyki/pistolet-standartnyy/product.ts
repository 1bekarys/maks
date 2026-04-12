import { Product } from "../../../types"
import { pistoletStandartnyyCharacteristics } from "./characteristics"
import { pistoletStandartnyyDescription } from "./description"
import { pistoletStandartnyyImages } from "./images"

export const pistoletStandartnyyProduct: Product = {
  id: 21,
  name: "Пистолет для мойки высокого давления",
  price: 2500,
  image: pistoletStandartnyyImages[0],
  images: pistoletStandartnyyImages,
  inStock: true,
  badge: "hit",
  category: "pistolety-dlya-moyki",
  country: pistoletStandartnyyCharacteristics.manufacturer,
  material: pistoletStandartnyyCharacteristics.material,
  description: pistoletStandartnyyDescription.overview,
  characteristics: pistoletStandartnyyCharacteristics,
  detailedDescription: pistoletStandartnyyDescription.details,
  assembly: pistoletStandartnyyDescription.assembly,
}
