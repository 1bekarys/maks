import { Product } from "../../../types"
import { fka6615Characteristics } from "./characteristics"
import { fka6615Description } from "./description"
import { fka6615Images } from "./images"

export const fka6615Product: Product = {
  id: 3,
  name: "Насос высокого давления FKA 6615",
  price: 70200,
  image: fka6615Images[0],
  images: fka6615Images,
  inStock: true,
  category: "plunzhernye-nasosy",
  country: fka6615Characteristics.manufacturer,
  power: fka6615Characteristics.power,
  maxPressure: fka6615Characteristics.maxPressure,
  performance: fka6615Characteristics.performance,
  material: fka6615Characteristics.material,
  description: fka6615Description.overview,
  characteristics: fka6615Characteristics,
  detailedDescription: fka6615Description.details,
  assembly: fka6615Description.assembly,
}
