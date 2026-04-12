import { Product } from "../../../types"
import { fka5620Characteristics } from "./characteristics"
import { fka5620Description } from "./description"
import { fka5620Images } from "./images"

export const fka5620Product: Product = {
  id: 2,
  name: "Насос высокого давления FKA 5620",
  price: 68100,
  image: fka5620Images[0],
  images: fka5620Images,
  inStock: true,
  category: "plunzhernye-nasosy",
  country: fka5620Characteristics.manufacturer,
  power: fka5620Characteristics.power,
  maxPressure: fka5620Characteristics.maxPressure,
  performance: fka5620Characteristics.performance,
  material: fka5620Characteristics.material,
  description: fka5620Description.overview,
  characteristics: fka5620Characteristics,
  detailedDescription: fka5620Description.details,
  assembly: fka5620Description.assembly,
}
