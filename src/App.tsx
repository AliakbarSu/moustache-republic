import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/Product'
import { Product as ProductType } from './types/product'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
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

  return (
    <div id="app">
        {product ? <Product product={product} /> : <p>Loading...</p>}
    </div>
  )
}

export default App
