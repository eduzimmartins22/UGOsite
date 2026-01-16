export type CartItem = {
  name: string
  price: number
}

export type CartContextType = {
  cartItems: CartItem[]
  addToCart: (product: CartItem) => void
  total: number
}
