import { Product } from "../../../types"
import { muftа38vnutrennyayaCharacteristics } from "./characteristics"
import { muftа38vnutrennyayaDescription } from "./description"
import { muftа38vnutrennyayaImages } from "./images"

export const muftа38vnutrennyayaProduct: Product = {
  id: 23,
  name: "Быстросъёмная муфта 3/8 внутренняя",
  price: 450,
  image: muftа38vnutrennyayaImages[0],
  images: muftа38vnutrennyayaImages,
  inStock: true,
  category: "bystrorazyomnye-soedineniya",
  country: muftа38vnutrennyayaCharacteristics.manufacturer,
  description: muftа38vnutrennyayaDescription.overview,
  characteristics: muftа38vnutrennyayaCharacteristics,
  detailedDescription: muftа38vnutrennyayaDescription.details,
  assembly: muftа38vnutrennyayaDescription.assembly,
}
