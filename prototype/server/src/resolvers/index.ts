import { dummyProductCategories, dummyProducts } from "../db";
import { ProductCategory } from "../models";
import { Mutation } from "./mutations";
import { QueryResolver } from "./queries";
import { Resolvers } from "../resolvers-types"

export const resolvers: Resolvers = {
  Query: QueryResolver,
  Product: {
    productCategory: (parent, args): ProductCategory | null => {
      const d = dummyProductCategories.find(p => p.categoryID === parent.categoryID)
      if (dummyProductCategories !== undefined) {
        return null
      } else {
        return d!
      }
    }
  },
  ProductCategory: {
    products: (parent, args) => {
      return dummyProducts.filter(p => p.categoryID === parent.categoryID)
    }
  },
  Mutation: Mutation
};
