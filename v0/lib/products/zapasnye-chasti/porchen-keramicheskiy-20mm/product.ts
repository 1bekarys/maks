import { Product } from "../../../types"
import { porshenKeramicheskiy20mmCharacteristics } from "./characteristics"
import { porshenKeramicheskiy20mmDescription } from "./description"
import { porshenKeramicheskiy20mmImages } from "./images"

export const porshenKeramicheskiy20mmProduct: Product = {
  id: 31,
  name: "Поршень керамический 20 мм",
  price: 2500,
  image: porshenKeramicheskiy20mmImages[0],
  images: porshenKeramicheskiy20mmImages,
  inStock: true,
  badge: "hit",
  category: "zapasnye-chasti",
  country: porshenKeramicheskiy20mmCharacteristics.manufacturer,
  material: porshenKeramicheskiy20mmCharacteristics.material,
  power: porshenKeramicheskiy20mmCharacteristics.power,
  description: porshenKeramicheskiy20mmDescription.overview,
  characteristics: porshenKeramicheskiy20mmCharacteristics,
  detailedDescription: porshenKeramicheskiy20mmDescription.details,
  assembly: porshenKeramicheskiy20mmDescription.assembly,
}
