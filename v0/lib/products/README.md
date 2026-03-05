# Product Catalog Structure

This folder contains the reorganized product catalog with a modular structure for easy navigation and maintenance.

## Directory Structure

```
lib/
├── types.ts              # TypeScript type definitions (Category, Product)
├── categories.ts         # Category definitions with auto-counted product counts
├── catalog-data.ts       # Main export file and utility functions
├── products/
│   ├── index.ts         # Combines all products and counting logic
│   ├── plunzhernye-nasosy/
│   │   └── index.ts     # Plunger pumps products
│   ├── moyki-vysokogo-davleniya/
│   │   └── index.ts     # Pressure washers products
│   ├── perekhodniki-i-soedineniya/
│   │   └── index.ts     # Adapters products
│   ├── katushki-dlya-shlangov/
│   │   └── index.ts     # Hose reels products
│   ├── nasadki-forsunki/
│   │   └── index.ts     # Nozzles products
│   ├── pistolety-dlya-moyki/
│   │   └── index.ts     # Wash guns products
│   ├── bystrorazyomnye-soedineniya/
│   │   └── index.ts     # Quick connects products
│   ├── shlangi-vysokogo-davleniya/
│   │   └── index.ts     # High-pressure hoses products
│   ├── prochie-aksessuary/
│   │   └── index.ts     # Other accessories products
│   └── zapasnye-chasti/
│       └── index.ts     # Spare parts products
```

## How to Add New Products

1. **Open the category folder** where you want to add a new product
   - Example: `lib/products/plunzhernye-nasosy/index.ts`

2. **Add your product object** to the array
   ```typescript
   {
     id: 32,  // Use the next available ID
     name: "Your Product Name",
     price: 5000,  // or null if price is not available
     image: "/images/product-image.jpg",
     inStock: true,
     badge?: "new" | "hit",  // optional
     category: "plunzhernye-nasosy",
     country?: "Страна",  // optional
     power?: 5500,  // optional for pumps/washers
     maxPressure?: 20000,  // optional for pumps/washers
     performance?: 20,  // optional for pumps/washers
   }
   ```

3. **Product count is automatic!**
   - The `categories.ts` file automatically counts products in each category using `getProductCountByCategory()`
   - No need to manually update counts

## Available Utility Functions

All utility functions are available from `catalog-data.ts`:

```typescript
// Get a category by slug
getCategoryBySlug("plunzhernye-nasosy")

// Get products in a specific category
getProductsByCategory("plunzhernye-nasosy")

// Format price with Russian locale
formatPrice(5000)  // Returns "5 000 ₽"
```

## Product Count by Category

The product counts are automatically calculated:
- **Плунжерные насосы**: 9 products
- **Мойки высокого давления**: 3 products
- **Переходники и соединения**: 3 products
- **Катушки для шлангов**: 2 products
- **Насадки, форсунки**: 3 products
- **Пистолеты для мойки**: 2 products
- **Быстроразъёмные соединения**: 3 products
- **Шланги высокого давления**: 2 products
- **Прочие аксессуары**: 1 product
- **Запасные части**: 3 products

**Total: 31 products**

## Import Examples

```typescript
// Import everything
import { categories, allProducts, getCategoryBySlug, getProductsByCategory, formatPrice } from "@/lib/catalog-data"

// Import types
import type { Category, Product } from "@/lib/types"

// Import specific category products
import { plunzhernye_nasosy } from "@/lib/products/plunzhernye-nasosy"
```
