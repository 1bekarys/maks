import { Product } from "../../../types"
import { kanalopromyvaochnayaForsunkaCharacteristics } from "./characteristics"
import { kanalopromyvaochnayaForsunkaDescription } from "./description"
import { kanalopromyvaochnayaForsunkaImages } from "./images"

export const kanalopromyvaochnayaForsunkaProduct: Product = {
  id: 18,
  name: "Каналопромывочная форсунка, резьба 3/8 дюйма",
  price: 2200,
  image: kanalopromyvaochnayaForsunkaImages[0],
  images: kanalopromyvaochnayaForsunkaImages,
  inStock: true,
  category: "nasadki-forsunki",
  country: kanalopromyvaochnayaForsunkaCharacteristics.manufacturer,
  material: kanalopromyvaochnayaForsunkaCharacteristics.material,
  description: kanalopromyvaochnayaForsunkaDescription.overview,
  characteristics: kanalopromyvaochnayaForsunkaCharacteristics,
  detailedDescription: kanalopromyvaochnayaForsunkaDescription.details,
  assembly: kanalopromyvaochnayaForsunkaDescription.assembly,
}
