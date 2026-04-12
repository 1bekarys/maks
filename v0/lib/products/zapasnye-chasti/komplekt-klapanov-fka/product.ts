import { Product } from "../../../types"
import { kompektKlapanovFkaCharacteristics } from "./characteristics"
import { kompektKlapanovFkaDescription } from "./description"
import { kompektKlapanovFkaImages } from "./images"

export const kompektKlapanovFkaProduct: Product = {
  id: 29,
  name: "Комплект клапанов для насоса FKA",
  price: 3200,
  image: kompektKlapanovFkaImages[0],
  images: kompektKlapanovFkaImages,
  inStock: true,
  category: "zapasnye-chasti",
  country: kompektKlapanovFkaCharacteristics.manufacturer,
  material: kompektKlapanovFkaCharacteristics.material,
  performance: kompektKlapanovFkaCharacteristics.performance,
  power: kompektKlapanovFkaCharacteristics.power,
  description: kompektKlapanovFkaDescription.overview,
  characteristics: kompektKlapanovFkaCharacteristics,
  detailedDescription: kompektKlapanovFkaDescription.details,
  assembly: kompektKlapanovFkaDescription.assembly,
}
