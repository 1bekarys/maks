import { Product } from "../../../types"
import { penokomplekt1lCharacteristics } from "./characteristics"
import { penokomplekt1lDescription } from "./description"
import { penokomplekt1lImages } from "./images"

export const penokomplekt1lProduct: Product = {
  id: 28,
  name: "Пенокомплект с бачком 1 л",
  price: 2800,
  image: penokomplekt1lImages[0],
  images: penokomplekt1lImages,
  inStock: true,
  category: "prochie-aksessuary",
  country: penokomplekt1lCharacteristics.manufacturer,
  description: penokomplekt1lDescription.overview,
  characteristics: penokomplekt1lCharacteristics,
  detailedDescription: penokomplekt1lDescription.details,
  assembly: penokomplekt1lDescription.assembly,
}
