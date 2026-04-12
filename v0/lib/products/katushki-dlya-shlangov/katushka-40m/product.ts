import { Product } from "../../../types"
import { katushka40mCharacteristics } from "./characteristics"
import { katushka40mDescription } from "./description"
import { katushka40mImages } from "./images"

export const katushka40mProduct: Product = {
  id: 17,
  name: "Катушка для шланга высокого давления 40 м",
  price: 22000,
  image: katushka40mImages[0],
  images: katushka40mImages,
  inStock: true,
  badge: "new",
  category: "katushki-dlya-shlangov",
  country: katushka40mCharacteristics.manufacturer,
  material: katushka40mCharacteristics.material,
  length: katushka40mCharacteristics.length,
  description: katushka40mDescription.overview,
  characteristics: katushka40mCharacteristics,
  detailedDescription: katushka40mDescription.details,
  assembly: katushka40mDescription.assembly,
}
