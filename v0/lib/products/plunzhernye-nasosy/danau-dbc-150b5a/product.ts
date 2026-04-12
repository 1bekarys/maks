import { Product } from "../../../types"
import { danauDbc150b5aCharacteristics } from "./characteristics"
import { danauDbc150b5aDescription } from "./description"
import { danauDbc150b5aImages } from "./images"

export const danauDbc150b5aProduct: Product = {
  id: 7,
  name: "Насос высокого давления Danau DBC 150B5A/1509A/1508A с регулятором давления",
  price: 24000,
  image: danauDbc150b5aImages[0],
  images: danauDbc150b5aImages,
  inStock: true,
  category: "plunzhernye-nasosy",
  country: danauDbc150b5aCharacteristics.manufacturer,
  power: danauDbc150b5aCharacteristics.power,
  maxPressure: danauDbc150b5aCharacteristics.maxPressure,
  performance: danauDbc150b5aCharacteristics.performance,
  description: danauDbc150b5aDescription.overview,
  characteristics: danauDbc150b5aCharacteristics,
  detailedDescription: danauDbc150b5aDescription.details,
  assembly: danauDbc150b5aDescription.assembly,
}
