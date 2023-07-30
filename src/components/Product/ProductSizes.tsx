import { classNames } from '../../utils/className'
import { ProductSizes } from '../../types/product'

function ProductSizesComponent({
  sizes,
  onSelectSize,
  selectedSize,
  error
}: {
  sizes: ProductSizes[]
  selectedSize: number | null
  onSelectSize: (size: number) => void
  error: boolean
}) {
  return (
    <div className="mt-3">
      <p className="py-3 text-mr-font-primary">
        Sizes<span className="text-mr-star">*</span>
      </p>
      <ul className="flex gap-2">
        {sizes.map((size) => {
          return (
            <li
              onClick={() => onSelectSize(size.id)}
              className={classNames(
                'py-3 px-4 border border-mr-border text-mr-font-primary font-bold cursor-pointer',
                selectedSize === size.id ? 'border-2 border-mr-border-dark' : ''
              )}
              key={size.id}
            >
              {size.label}
            </li>
          )
        })}
      </ul>
      {error && (
        <span className="text-red-600 text-sm">Select a size first</span>
      )}
    </div>
  )
}

export default ProductSizesComponent
