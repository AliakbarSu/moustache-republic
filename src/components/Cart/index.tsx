import { useContext, useState } from 'react'
import { CartContext } from '../../context/cartContext'
import { classNames } from '../../utils/className'

function Cart() {
  const { items } = useContext(CartContext)
  const [open, setOpen] = useState(false)
  const isCartEmpty = items.length === 0
  const cartItemsCount = items.length
  return (
    <div className="md:relative">
      <p
        className={classNames(
          'text-mr-font-primary p-2',
          open ? 'md:border md:border-b-0 border-mr-border' : '',
          isCartEmpty ? '' : 'cursor-pointer'
        )}
        onClick={() => setOpen((value) => !value)}
      >
        My Cart ({cartItemsCount})
      </p>
      {open && (
        <div className="absolute border border-mr-border bg-mr-background p-4 right-0 left-0 md:left-auto md:w-96">
          <ul>
            {items.map((item) => (
              <li key={item.id} className="my-3">
                <div className="flex gap-2 md:justify-around">
                  <img className="w-24" src={item.image} alt={item.name} />
                  <div className="px-3 text-mr-font-primary">
                    <p>{item.name}</p>
                    <p>
                      {item.quantity} *{' '}
                      <span className=" text-mr-font-secondary">
                        ${item.price}
                      </span>
                    </p>
                    <p>Size: {item.size}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Cart
