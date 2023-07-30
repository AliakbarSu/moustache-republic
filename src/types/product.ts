export interface ProductSizes {
  id: number
  label: string
}

export interface Product {
  id: number
  title: string
  description: string
  price: number
  imageURL: string
  sizeOptions: ProductSizes[]
}
