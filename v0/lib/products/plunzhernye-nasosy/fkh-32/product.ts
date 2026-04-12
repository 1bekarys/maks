import { Product } from "../../../types"
import { fkh32Characteristics } from "./characteristics"
import { fkh32Description } from "./description"
import { fkh32Images } from "./images"

export const fkh32Product: Product = {
  id: 5,
  name: "Насос высокого давления FKH 32",
  price: null,
  image: fkh32Images[0],
  images: fkh32Images,
  inStock: false,
  category: "plunzhernye-nasosy",
  country: fkh32Characteristics.manufacturer,
  power: fkh32Characteristics.power,
  maxPressure: fkh32Characteristics.maxPressure,
  performance: fkh32Characteristics.performance,
  description: fkh32Description.overview,
  characteristics: fkh32Characteristics,
  detailedDescription: fkh32Description.details,
  assembly: fkh32Description.assembly,
}
