import ProductImage from './ProductImage'
import ProductSizes from './ProductSizes'
import AddToCart from './AddToCart'
import ProductDetails from './ProductDetails'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/cartContext'
import { Product as ProductType } from '../../types/product'

function Product({ product }: { product: ProductType }) {
  const { addToCart } = useContext(CartContext)
  const [selectedSize, setSelectedSize] = useState<number | null>(null)
  const [error, setError] = useState(false)
  const addItem = () => {
    if (selectedSize === null) {
      setError(true)
      return
    }
    setError(false)
    addToCart(product, selectedSize)
  }
  return (
    <div className="p-4 md:flex justify-between md:max-w-4xl mx-auto">
      <ProductImage src={product.imageURL} alt="product image" />
      <div className="pt-6 mt-3 md:pt-0 md:mt-0 w-full md:w-2/5">
        <ProductDetails product={product} />
        <ProductSizes
          onSelectSize={setSelectedSize}
          selectedSize={selectedSize}
          sizes={product.sizeOptions}
          error={error}
        />
        <AddToCart onClick={addItem} />
      </div>
    </div>
  )
}

export default Product
