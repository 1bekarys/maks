import { Product } from "../../../types"
import { shlangiOdnooplotechnye10mCharacteristics } from "./characteristics"
import { shlangiOdnooplotechnye10mDescription } from "./description"
import { shlangiOdnooplotechnye10mImages } from "./images"

export const shlangiOdnooplotechnye10mProduct: Product = {
  id: 27,
  name: "Шланг высокого давления однооплёточный 10 м 250 бар",
  price: 4500,
  image: shlangiOdnooplotechnye10mImages[0],
  images: shlangiOdnooplotechnye10mImages,
  inStock: true,
  category: "shlangi-vysokogo-davleniya",
  country: shlangiOdnooplotechnye10mCharacteristics.manufacturer,
  material: shlangiOdnooplotechnye10mCharacteristics.material,
  length: shlangiOdnooplotechnye10mCharacteristics.length,
  description: shlangiOdnooplotechnye10mDescription.overview,
  characteristics: shlangiOdnooplotechnye10mCharacteristics,
  detailedDescription: shlangiOdnooplotechnye10mDescription.details,
  assembly: shlangiOdnooplotechnye10mDescription.assembly,
}
