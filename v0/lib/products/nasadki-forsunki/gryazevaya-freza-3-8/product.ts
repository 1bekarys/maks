import { Product } from "../../../types"
import { gryazevayaFrezaCharacteristics } from "./characteristics"
import { gryazevayaFrezaDescription } from "./description"
import { gryazevayaFrezaImages } from "./images"

export const gryazevayaFrezaProduct: Product = {
  id: 20,
  name: "Грязевая фреза 3/8 дюйма 350 бар",
  price: 3500,
  image: gryazevayaFrezaImages[0],
  images: gryazevayaFrezaImages,
  inStock: true,
  badge: "hit",
  category: "nasadki-forsunki",
  country: gryazevayaFrezaCharacteristics.manufacturer,
  material: gryazevayaFrezaCharacteristics.material,
  description: gryazevayaFrezaDescription.overview,
  characteristics: gryazevayaFrezaCharacteristics,
  detailedDescription: gryazevayaFrezaDescription.details,
  assembly: gryazevayaFrezaDescription.assembly,
}
