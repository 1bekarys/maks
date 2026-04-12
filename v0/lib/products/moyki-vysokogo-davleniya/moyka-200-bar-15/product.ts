import { Product } from "../../../types"
import { moyka200bar15Characteristics } from "./characteristics"
import { moyka200bar15Description } from "./description"
import { moyka200bar15Images } from "./images"

export const moyka200bar15Product: Product = {
  id: 10,
  name: "Мойка высокого давления 200 бар 15 л/мин",
  price: 89000,
  image: moyka200bar15Images[0],
  images: moyka200bar15Images,
  inStock: true,
  category: "moyki-vysokogo-davleniya",
  country: moyka200bar15Characteristics.manufacturer,
  power: moyka200bar15Characteristics.power,
  performance: moyka200bar15Characteristics.performance,
  description: moyka200bar15Description.overview,
  characteristics: moyka200bar15Characteristics,
  detailedDescription: moyka200bar15Description.details,
  assembly: moyka200bar15Description.assembly,
}
