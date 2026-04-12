import { Product } from "../../../types"
import { shteker38naruzhnayaCharacteristics } from "./characteristics"
import { shteker38naruzhnayaDescription } from "./description"
import { shteker38naruzhnayaImages } from "./images"

export const shteker38naruzhnayaProduct: Product = {
  id: 24,
  name: "Быстросъёмный штекер 3/8 наружная",
  price: 400,
  image: shteker38naruzhnayaImages[0],
  images: shteker38naruzhnayaImages,
  inStock: true,
  category: "bystrorazyomnye-soedineniya",
  country: shteker38naruzhnayaCharacteristics.manufacturer,
  description: shteker38naruzhnayaDescription.overview,
  characteristics: shteker38naruzhnayaCharacteristics,
  detailedDescription: shteker38naruzhnayaDescription.details,
  assembly: shteker38naruzhnayaDescription.assembly,
}
