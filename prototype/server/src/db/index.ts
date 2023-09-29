import { ProductCategory, Product } from "../models/index"

export const dummyProducts: Product[] = [
  {
    productID: "1",
    categoryID: "1",
    name: "Ćevapi",
    description: "Grilled minced meat, a Serbian delicacy",
    price: 30.00,
    isAvailable: true,
  },
  {
    productID: "2",
    categoryID: "1",
    name: "Sogan-dolma",
    description: "Stuffed onions with minced meat and rice",
    price: 35.00,
    isAvailable: true,
  },
  {
    productID: "3",
    categoryID: "2",
    name: "Jelen Beer",
    description: "Serbian beer, 500ml",
    price: 10.00,
    isAvailable: true,
  },
];

export const dummyProductCategories: ProductCategory[] = [
  {
    categoryID: "1",
    name: "Main Courses",
    isAvailable: true,
  },
  {
    categoryID: "2",
    name: "Drinks",
    isAvailable: true,
  },
];

