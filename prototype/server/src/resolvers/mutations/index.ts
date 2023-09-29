import { dummyProductCategories, dummyProducts } from "../../db"
import { MutationResolvers } from "../../resolvers-types"

export const Mutation:MutationResolvers = {
  addProduct(parent, args, context, info) {
    console.log(args)
    const length = dummyProducts.length
    dummyProducts.push({
      isAvailable: args.isAvailable || false,
      name: args.name,
      description: args.description,
      categoryID: args.categoryID,
      productID: length.toString(),
      price: args.price
    })
    return dummyProducts[length]
  },
  addProductCategory(parent, args, context, info) {
    console.log(args)
    const length = dummyProductCategories.length
    dummyProductCategories.push({
      name: args.name,
      isAvailable: args.isAvailable,
      categoryID: length.toString()
    })
    return dummyProductCategories[length]
  }
}
