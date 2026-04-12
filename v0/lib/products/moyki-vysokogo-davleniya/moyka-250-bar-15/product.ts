import { Product } from "../../../types"
import { moyka250bar15Characteristics } from "./characteristics"
import { moyka250bar15Description } from "./description"
import { moyka250bar15Images } from "./images"

export const moyka250bar15Product: Product = {
  id: 11,
  name: "Мойка высокого давления 250 бар 15 л/мин",
  price: 95000,
  image: moyka250bar15Images[0],
  images: moyka250bar15Images,
  inStock: true,
  badge: "hit",
  category: "moyki-vysokogo-davleniya",
  country: moyka250bar15Characteristics.manufacturer,
  power: moyka250bar15Characteristics.power,
  performance: moyka250bar15Characteristics.performance,
  description: moyka250bar15Description.overview,
  characteristics: moyka250bar15Characteristics,
  detailedDescription: moyka250bar15Description.details,
  assembly: moyka250bar15Description.assembly,
}
