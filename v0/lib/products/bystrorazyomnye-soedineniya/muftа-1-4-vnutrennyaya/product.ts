import { Product } from "../../../types"
import { muftа14vnutrennyayaCharacteristics } from "./characteristics"
import { muftа14vnutrennyayaDescription } from "./description"
import { muftа14vnutrennyayaImages } from "./images"

export const muftа14vnutrennyayaProduct: Product = {
  id: 25,
  name: "Быстросъёмная муфта 1/4 внутренняя",
  price: 380,
  image: muftа14vnutrennyayaImages[0],
  images: muftа14vnutrennyayaImages,
  inStock: true,
  badge: "new",
  category: "bystrorazyomnye-soedineniya",
  country: muftа14vnutrennyayaCharacteristics.manufacturer,
  description: muftа14vnutrennyayaDescription.overview,
  characteristics: muftа14vnutrennyayaCharacteristics,
  detailedDescription: muftа14vnutrennyayaDescription.details,
  assembly: muftа14vnutrennyayaDescription.assembly,
}
