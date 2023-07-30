import { Product } from '../types/product'
import { Cart } from '../types/cart'
import React from 'react'

export const CartContext = React.createContext<{
  items: Cart[]
  addToCart: (item: Product, size: number) => void
  removeFromCart: (id: number) => void
}>({
  items: [],
  addToCart: () => {},
  removeFromCart: () => {}
})
