import { dummyProductCategories, dummyProducts } from "../../db"
import { Query, QueryResolvers } from "../../resolvers-types";

export const QueryResolver: QueryResolvers = {
  productCategories: () => {
    return dummyProductCategories
  },
  productCategory:{
resolve(parent,args,context,info){
  return {}
}
  },
  products: () => dummyProducts,
  product: {
  resolve(parent,args,context,info){
  return {
  productID:"2"
  }
  }
  }

}
