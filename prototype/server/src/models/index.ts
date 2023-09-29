export interface ProductCategory {
  categoryID: string,
  name: string,
  isAvailable: boolean,
  products?: Product[],
}

export interface Product {
  productID: string,
  categoryID: string,
  name: string,
  description: string,
  price: number,
  isAvailable: boolean,
}
