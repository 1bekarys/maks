import { Product } from "../../../types"
import { forsunkaVeernaya25Characteristics } from "./characteristics"
import { forsunkaVeernaya25Description } from "./description"
import { forsunkaVeernaya25Images } from "./images"

export const forsunkaVeernaya25Product: Product = {
  id: 19,
  name: "Форсунка веерная 25 градусов 1/4",
  price: 350,
  image: forsunkaVeernaya25Images[0],
  images: forsunkaVeernaya25Images,
  inStock: true,
  category: "nasadki-forsunki",
  country: forsunkaVeernaya25Characteristics.manufacturer,
  material: forsunkaVeernaya25Characteristics.material,
  description: forsunkaVeernaya25Description.overview,
  characteristics: forsunkaVeernaya25Characteristics,
  detailedDescription: forsunkaVeernaya25Description.details,
  assembly: forsunkaVeernaya25Description.assembly,
}
