import { Product } from "../../../types"
import { perekhodnikM22NaruzhnayaCharacteristics } from "./characteristics"
import { perekhodnikM22NaruzhnayaDescription } from "./description"
import { perekhodnikM22NaruzhnayaImages } from "./images"

export const perekhodnikM22NaruzhnayaProduct: Product = {
  id: 13,
  name: "Переходник М22х1.5 наружная - 3/8 наружная",
  price: 350,
  image: perekhodnikM22NaruzhnayaImages[0],
  images: perekhodnikM22NaruzhnayaImages,
  inStock: true,
  category: "perekhodniki-i-soedineniya",
  country: perekhodnikM22NaruzhnayaCharacteristics.manufacturer,
  maxPressure: perekhodnikM22NaruzhnayaCharacteristics.maxPressure,
  material: perekhodnikM22NaruzhnayaCharacteristics.material,
  description: perekhodnikM22NaruzhnayaDescription.overview,
  characteristics: perekhodnikM22NaruzhnayaCharacteristics,
  detailedDescription: perekhodnikM22NaruzhnayaDescription.details,
  assembly: perekhodnikM22NaruzhnayaDescription.assembly,
}
