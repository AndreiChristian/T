"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mutation = void 0;
const db_1 = require("../../db");
exports.Mutation = {
    addProduct(parent, args, context, info) {
        console.log(args);
        const length = db_1.dummyProducts.length;
        db_1.dummyProducts.push({
            isAvailable: args.isAvailable,
            name: args.name,
            description: args.description,
            categoryID: args.categoryID,
            productID: length.toString(),
            price: args.price
        });
        return db_1.dummyProducts[length];
    },
    addProductCategory(parent, args, context, info) {
        console.log(args);
        const length = db_1.dummyProductCategories.length;
        db_1.dummyProductCategories.push({
            name: args.name,
            isAvailable: args.isAvailable,
            categoryID: length.toString()
        });
        return db_1.dummyProductCategories[length];
    }
};
