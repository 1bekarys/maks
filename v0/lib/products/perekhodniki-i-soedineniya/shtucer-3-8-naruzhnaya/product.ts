import { Product } from "../../../types"
import { shtucer38NaruzhnayaCharacteristics } from "./characteristics"
import { shtucer38NaruzhnayaDescription } from "./description"
import { shtucer38NaruzhnayaImages } from "./images"

export const shtucer38NaruzhnayaProduct: Product = {
  id: 15,
  name: "Штуцер 3/8 наружная - 3/8 наружная",
  price: 250,
  image: shtucer38NaruzhnayaImages[0],
  images: shtucer38NaruzhnayaImages,
  inStock: true,
  category: "perekhodniki-i-soedineniya",
  country: shtucer38NaruzhnayaCharacteristics.manufacturer,
  maxPressure: shtucer38NaruzhnayaCharacteristics.maxPressure,
  material: shtucer38NaruzhnayaCharacteristics.material,
  description: shtucer38NaruzhnayaDescription.overview,
  characteristics: shtucer38NaruzhnayaCharacteristics,
  detailedDescription: shtucer38NaruzhnayaDescription.details,
  assembly: shtucer38NaruzhnayaDescription.assembly,
}
