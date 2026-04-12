import { Product } from "../../../types"
import { kompektUplotneniiBm1525Characteristics } from "./characteristics"
import { kompektUplotneniiBm1525Description } from "./description"
import { kompektUplotneniiBm1525Images } from "./images"

export const kompektUplotneniiBm1525Product: Product = {
  id: 30,
  name: "Комплект уплотнений для насоса BM 1525",
  price: 1800,
  image: kompektUplotneniiBm1525Images[0],
  images: kompektUplotneniiBm1525Images,
  inStock: true,
  category: "zapasnye-chasti",
  country: kompektUplotneniiBm1525Characteristics.manufacturer,
  material: kompektUplotneniiBm1525Characteristics.material,
  description: kompektUplotneniiBm1525Description.overview,
  characteristics: kompektUplotneniiBm1525Characteristics,
  detailedDescription: kompektUplotneniiBm1525Description.details,
  assembly: kompektUplotneniiBm1525Description.assembly,
}
