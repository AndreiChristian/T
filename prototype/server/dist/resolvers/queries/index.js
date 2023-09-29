"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
const db_1 = require("../../db");
exports.Query = {
    productCategories: () => db_1.dummyProductCategories,
    productCategory: (_parent, args, _contextValue, _info) => {
        return db_1.dummyProductCategories.find(p => p.categoryID === args.id);
    },
    products: () => db_1.dummyProducts,
    product: (_parent, args, _contextValue, _info) => {
        return db_1.dummyProducts.find(p => p.categoryID === args.id);
    },
};
