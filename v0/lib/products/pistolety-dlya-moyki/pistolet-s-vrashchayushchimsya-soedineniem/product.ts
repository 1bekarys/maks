import { Product } from "../../../types"
import { pistoletVrashchayushchiysyaCharacteristics } from "./characteristics"
import { pistoletVrashchayushchiysyaDescription } from "./description"
import { pistoletVrashchayushchiysyaImages } from "./images"

export const pistoletVrashchayushchiysyaProduct: Product = {
  id: 22,
  name: "Пистолет для мойки ВД с вращающимся соединением",
  price: 3800,
  image: pistoletVrashchayushchiysyaImages[0],
  images: pistoletVrashchayushchiysyaImages,
  inStock: true,
  category: "pistolety-dlya-moyki",
  country: pistoletVrashchayushchiysyaCharacteristics.manufacturer,
  material: pistoletVrashchayushchiysyaCharacteristics.material,
  description: pistoletVrashchayushchiysyaDescription.overview,
  characteristics: pistoletVrashchayushchiysyaCharacteristics,
  detailedDescription: pistoletVrashchayushchiysyaDescription.details,
  assembly: pistoletVrashchayushchiysyaDescription.assembly,
}
