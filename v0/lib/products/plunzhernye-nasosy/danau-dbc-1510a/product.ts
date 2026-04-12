import { Product } from "../../../types"
import { danauDbc1510aCharacteristics } from "./characteristics"
import { danauDbc1510aDescription } from "./description"
import { danauDbc1510aImages } from "./images"

export const danauDbc1510aProduct: Product = {
  id: 8,
  name: "Насос высокого давления Danau DBC 1510A с регулятором давления",
  price: 24500,
  image: danauDbc1510aImages[0],
  images: danauDbc1510aImages,
  inStock: true,
  category: "plunzhernye-nasosy",
  country: danauDbc1510aCharacteristics.manufacturer,
  power: danauDbc1510aCharacteristics.power,
  maxPressure: danauDbc1510aCharacteristics.maxPressure,
  performance: danauDbc1510aCharacteristics.performance,
  description: danauDbc1510aDescription.overview,
  characteristics: danauDbc1510aCharacteristics,
  detailedDescription: danauDbc1510aDescription.details,
  assembly: danauDbc1510aDescription.assembly,
}
