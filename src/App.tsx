import './App.css'
import Header from './components/UI/Header'
import Product from './components/Product'
import { Product as ProductType } from './types/product'
import { CartContext } from './context/cartContext'
import { useEffect, useState } from 'react'
import { Cart } from './types/cart'
import axios from 'axios'

function App() {
  const [cart, setCart] = useState<Cart[]>([])
  const [product, setProduct] = useState<ProductType | null>(null)

  useEffect(() => {
    if (product) return
    axios
      .get(import.meta.env.VITE_API as string)
      .then((res) => {
        setProduct(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  })

  const addToCart = (product: ProductType, size: number) => {
    const sizeLabel = product.sizeOptions.find((item) => item.id === size)![
      'label'
    ]
    // update quanity if already in cart
    const existingItem = cart.find(
      (item) => item.id === product.id && sizeLabel === item.size
    )
    if (existingItem) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === product.id && sizeLabel === item.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
      return
    }
    const cartItem: Cart = {
      id: product.id,
      name: product.title,
      price: product.price,
      description: product.description,
      image: product.imageURL,
      size: sizeLabel,
      quantity: 1
    }
    setCart((prev) => [...prev, cartItem])
  }

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <div id="app">
      <CartContext.Provider
        value={{ items: cart, addToCart, removeFromCart: removeFromCart }}
      >
        <Header />
        {product ? <Product product={product} /> : <p>Loading...</p>}
      </CartContext.Provider>
    </div>
  )
}

export default App
