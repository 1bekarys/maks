// Import all products from each category
import { plunzhernye_nasosy } from "./plunzhernye-nasosy"
import { moyki_vysokogo_davleniya } from "./moyki-vysokogo-davleniya"
import { perekhodniki_i_soedineniya } from "./perekhodniki-i-soedineniya"
import { katushki_dlya_shlangov } from "./katushki-dlya-shlangov"
import { nasadki_forsunki } from "./nasadki-forsunki"
import { pistolety_dlya_moyki } from "./pistolety-dlya-moyki"
import { bystrorazyomnye_soedineniya } from "./bystrorazyomnye-soedineniya"
import { shlangi_vysokogo_davleniya } from "./shlangi-vysokogo-davleniya"
import { prochie_aksessuary } from "./prochie-aksessuary"
import { zapasnye_chasti } from "./zapasnye-chasti"
import { Product } from "../types"

// Combine all products
export const allProducts: Product[] = [
  ...plunzhernye_nasosy,
  ...moyki_vysokogo_davleniya,
  ...perekhodniki_i_soedineniya,
  ...katushki_dlya_shlangov,
  ...nasadki_forsunki,
  ...pistolety_dlya_moyki,
  ...bystrorazyomnye_soedineniya,
  ...shlangi_vysokogo_davleniya,
  ...prochie_aksessuary,
  ...zapasnye_chasti,
]

// Auto-count products by category
export function getProductCountByCategory(categorySlug: string): number {
  return allProducts.filter((p) => p.category === categorySlug).length
}
