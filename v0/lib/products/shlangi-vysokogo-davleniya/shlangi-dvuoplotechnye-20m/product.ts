import { Product } from "../../../types"
import { shlangiDvuoplotechnye20mCharacteristics } from "./characteristics"
import { shlangiDvuoplotechnye20mDescription } from "./description"
import { shlangiDvuoplotechnye20mImages } from "./images"

export const shlangiDvuoplotechnye20mProduct: Product = {
  id: 26,
  name: "Шланг высокого давления двуоплёточный 20 м 350 бар",
  price: 8900,
  image: shlangiDvuoplotechnye20mImages[0],
  images: shlangiDvuoplotechnye20mImages,
  inStock: true,
  badge: "new",
  category: "shlangi-vysokogo-davleniya",
  country: shlangiDvuoplotechnye20mCharacteristics.manufacturer,
  material: shlangiDvuoplotechnye20mCharacteristics.material,
  length: shlangiDvuoplotechnye20mCharacteristics.length,
  description: shlangiDvuoplotechnye20mDescription.overview,
  characteristics: shlangiDvuoplotechnye20mCharacteristics,
  detailedDescription: shlangiDvuoplotechnye20mDescription.details,
  assembly: shlangiDvuoplotechnye20mDescription.assembly,
}
