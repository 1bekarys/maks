import { Product } from "../../../types"
import { moyka150bar12Characteristics } from "./characteristics"
import { moyka150bar12Description } from "./description"
import { moyka150bar12Images } from "./images"

export const moyka150bar12Product: Product = {
  id: 12,
  name: "Мойка высокого давления 150 бар 12 л/мин",
  price: 65000,
  image: moyka150bar12Images[0],
  images: moyka150bar12Images,
  inStock: true,
  category: "moyki-vysokogo-davleniya",
  country: moyka150bar12Characteristics.manufacturer,
  power: moyka150bar12Characteristics.power,
  performance: moyka150bar12Characteristics.performance,
  description: moyka150bar12Description.overview,
  characteristics: moyka150bar12Characteristics,
  detailedDescription: moyka150bar12Description.details,
  assembly: moyka150bar12Description.assembly,
}
