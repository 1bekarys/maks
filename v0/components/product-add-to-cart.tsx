'use client'

import { useState } from 'react'
import { ShoppingCart, Minus, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/lib/cart-context'

export function AddToCartButton({ product }: { product: any }) {
  const [quantity, setQuantity] = useState(1)
  const { addItem, isItemInCart } = useCart()
  const itemInCart = isItemInCart(product.id)

  const handleAddToCart = () => {
    if (product.price) {
      addItem(
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          inStock: product.inStock,
        },
        quantity
      )
      setQuantity(1)
    }
  }

  if (!product.inStock || !product.price) {
    return (
      <Button variant="outline" className="w-full" disabled>
        {product.inStock ? 'Цена не указана' : 'На заказ'}
      </Button>
    )
  }

  return (
    <div className="flex gap-2">
      <div className="flex items-center border border-border rounded">
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="p-2 hover:bg-secondary transition-colors"
        >
          <Minus className="h-4 w-4 text-muted-foreground" />
        </button>
        <span className="px-3 text-sm font-medium text-foreground min-w-[40px] text-center">
          {quantity}
        </span>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="p-2 hover:bg-secondary transition-colors"
        >
          <Plus className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
      <Button
        onClick={handleAddToCart}
        disabled={itemInCart}
        className="flex-1"
        variant={itemInCart ? 'secondary' : 'default'}
      >
        <ShoppingCart className="h-4 w-4" />
        {itemInCart ? 'В корзине' : 'В корзину'}
      </Button>
    </div>
  )
}
