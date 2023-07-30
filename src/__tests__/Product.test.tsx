import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Product as ProductType } from '../types/product'
import Product from '../components/Product/index'

describe('Product', () => {
  const product: ProductType = {
    id: 1,
    title: 'My Product',
    description: 'Click on the Vite and React logos to learn more',
    price: 0,
    imageURL: 'https://vitejs.dev/logo.svg',
    sizeOptions: [{ id: 1, label: 's' }]
  }
  test('Product mounts properly', () => {
    const wrapper = render(<Product product={product} />)
    expect(wrapper).toBeTruthy()
    expect(wrapper.container.textContent).toContain(product.title)

    const description = screen.getByText(
      /Click on the Vite and React logos to learn more/i
    )
    expect(description.textContent).toBeTruthy()
  })
})
