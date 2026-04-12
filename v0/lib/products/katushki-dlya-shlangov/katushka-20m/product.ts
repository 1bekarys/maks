import { Product } from "../../../types"
import { katushka20mCharacteristics } from "./characteristics"
import { katushka20mDescription } from "./description"
import { katushka20mImages } from "./images"

export const katushka20mProduct: Product = {
  id: 16,
  name: "Катушка для шланга высокого давления 20 м",
  price: 15000,
  image: katushka20mImages[0],
  images: katushka20mImages,
  inStock: true,
  category: "katushki-dlya-shlangov",
  country: katushka20mCharacteristics.manufacturer,
  material: katushka20mCharacteristics.material,
  length: katushka20mCharacteristics.length,
  description: katushka20mDescription.overview,
  characteristics: katushka20mCharacteristics,
  detailedDescription: katushka20mDescription.details,
  assembly: katushka20mDescription.assembly,
}
