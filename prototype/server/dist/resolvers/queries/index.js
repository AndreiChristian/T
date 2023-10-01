"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryResolver = void 0;
const db_1 = require("../../db");
exports.QueryResolver = {
    productCategories: () => {
        return db_1.dummyProductCategories;
    },
    productCategory: {
        resolve(parent, args, context, info) {
            return {};
        }
    },
    products: () => db_1.dummyProducts,
    product: {
        resolve(parent, args, context, info) {
            return {
                productID: "2"
            };
        }
    }
};
