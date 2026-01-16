import { useState } from "react"
import type { ReactNode } from "react"

import { CartContext } from "./CartContext"
import type { CartItem } from "./types"

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addToCart = (product: CartItem) => {
    setCartItems((prev) => [...prev, product])
  }

  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <CartContext.Provider value={{ cartItems, addToCart, total }}>
      {children}
    </CartContext.Provider>
  )
}
