import { Product } from '../../types/product'

function ProductDetails({ product }: { product: Product }) {
  return (
    <div>
      <h2 className="text-3xl text-mr-font-secondary">{product.title}</h2>
      <p className="text-md py-6 font-bold text-mr-font-secondary">
        ${product.price}
      </p>
      <p className="text-mr-font-primary">{product.description}</p>
    </div>
  )
}

export default ProductDetails
