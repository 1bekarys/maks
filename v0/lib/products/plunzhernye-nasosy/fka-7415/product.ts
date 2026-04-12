import { Product } from "../../../types"
import { fka7415Characteristics } from "./characteristics"
import { fka7415Description } from "./description"
import { fka7415Images } from "./images"

export const fka7415Product: Product = {
  id: 4,
  name: "Насос высокого давления FKA 7415",
  price: 72000,
  image: fka7415Images[0],
  images: fka7415Images,
  inStock: true,
  category: "plunzhernye-nasosy",
  country: fka7415Characteristics.manufacturer,
  power: fka7415Characteristics.power,
  maxPressure: fka7415Characteristics.maxPressure,
  performance: fka7415Characteristics.performance,
  material: fka7415Characteristics.material,
  description: fka7415Description.overview,
  characteristics: fka7415Characteristics,
  detailedDescription: fka7415Description.details,
  assembly: fka7415Description.assembly,
}
