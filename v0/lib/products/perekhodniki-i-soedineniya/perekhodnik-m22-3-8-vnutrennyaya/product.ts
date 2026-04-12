import { Product } from "../../../types"
import { perekhodnikM22VnutrennyayaCharacteristics } from "./characteristics"
import { perekhodnikM22VnutrennyayaDescription } from "./description"
import { perekhodnikM22VnutrennyayaImages } from "./images"

export const perekhodnikM22VnutrennyayaProduct: Product = {
  id: 14,
  name: "Переходник М22х1.5 внутренняя - 3/8 внутренняя",
  price: 380,
  image: perekhodnikM22VnutrennyayaImages[0],
  images: perekhodnikM22VnutrennyayaImages,
  inStock: true,
  category: "perekhodniki-i-soedineniya",
  country: perekhodnikM22VnutrennyayaCharacteristics.manufacturer,
  maxPressure: perekhodnikM22VnutrennyayaCharacteristics.maxPressure,
  material: perekhodnikM22VnutrennyayaCharacteristics.material,
  description: perekhodnikM22VnutrennyayaDescription.overview,
  characteristics: perekhodnikM22VnutrennyayaCharacteristics,
  detailedDescription: perekhodnikM22VnutrennyayaDescription.details,
  assembly: perekhodnikM22VnutrennyayaDescription.assembly,
}
