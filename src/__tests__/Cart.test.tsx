import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/react'
import Cart from '../components/Cart/index'
import { CartContext } from '../context/cartContext'
import { Cart as CartType } from '../types/cart'

describe('Cart', () => {
  const cartItems: CartType[] = [
    {
      id: 1,
      name: 'My Product',
      price: 0,
      quantity: 1,
      description: 'Click on the Vite and React logos to learn more',
      size: 's',
      image: 'https://vitejs.dev/logo.svg'
    }
  ]

  test('Cart mounts properly', () => {
    const wrapper = render(
      <CartContext.Provider
        value={{
          items: cartItems,
          addToCart: () => null,
          removeFromCart: () => null
        }}
      >
        <Cart />
      </CartContext.Provider>
    )
    expect(wrapper).toBeTruthy()
  })
  test('Display correct number of items in the cart', () => {
    const wrapper = render(
      <CartContext.Provider
        value={{
          items: cartItems,
          addToCart: () => null,
          removeFromCart: () => null
        }}
      >
        <Cart />
      </CartContext.Provider>
    )
    expect(wrapper.container.textContent).toContain(
      `My Cart (${cartItems.length})`
    )
  })

  test('Can view cart items', async () => {
    const wrapper = render(
      <CartContext.Provider
        value={{
          items: cartItems,
          addToCart: () => null,
          removeFromCart: () => null
        }}
      >
        <Cart />
      </CartContext.Provider>
    )
    const btn = wrapper.getByText(/My Cart/i)
    await btn.click()
    expect(wrapper.container.textContent).toContain('My Product')
  })
})
