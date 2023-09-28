"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const db_1 = require("../db");
exports.resolvers = {
    Query: {
        books: () => db_1.books,
    },
};
