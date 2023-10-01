"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const db_1 = require("../db");
const mutations_1 = require("./mutations");
const queries_1 = require("./queries");
exports.resolvers = {
    Query: queries_1.QueryResolver,
    Product: {
        productCategory: (parent, args) => {
            const d = db_1.dummyProductCategories.find(p => p.categoryID === parent.categoryID);
            if (db_1.dummyProductCategories !== undefined) {
                return null;
            }
            else {
                return d;
            }
        }
    },
    ProductCategory: {
        products: (parent, args) => {
            return db_1.dummyProducts.filter(p => p.categoryID === parent.categoryID);
        }
    },
    Mutation: mutations_1.Mutation
};
