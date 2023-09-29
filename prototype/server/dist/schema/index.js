"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
exports.typeDefs = `#graphql

  type ProductCategory {
    categoryID:ID
    name:String
    isAvailable:Boolean
    products:[Product]
  }

  type Product{
    productID:ID
    categoryID:ID
    productCategory: ProductCategory
    name:String
    description:String
    price:Float
    isAvailable:Boolean
  }

  type Mutation{
    addProduct(name:String):Product
  }

  type Query {
    productCategories: [ProductCategory!]
    products:[Product!]
  }

`;
