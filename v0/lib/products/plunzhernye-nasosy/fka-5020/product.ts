import { Product } from "../../../types"
import { fka5020Characteristics } from "./characteristics"
import { fka5020Description } from "./description"
import { fka5020Images } from "./images"

export const fka5020Product: Product = {
  id: 1,
  name: "Насос высокого давления FKA 5020",
  price: 67400,
  image: fka5020Images[0],
  images: fka5020Images,
  inStock: true,
  category: "plunzhernye-nasosy",
  country: fka5020Characteristics.manufacturer,
  power: fka5020Characteristics.power,
  maxPressure: fka5020Characteristics.maxPressure,
  performance: fka5020Characteristics.performance,
  material: fka5020Characteristics.material,
  description: fka5020Description.overview,
  characteristics: fka5020Characteristics,
  detailedDescription: fka5020Description.details,
  assembly: fka5020Description.assembly,
}
