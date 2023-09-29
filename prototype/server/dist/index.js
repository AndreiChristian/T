"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const index_1 = require("./resolvers/index");
const typeDefs = (0, fs_1.readFileSync)(path_1.default.join(__dirname, '..', 'schema.graphql'), { encoding: "utf8" });
const server = new server_1.ApolloServer({
    typeDefs,
    resolvers: index_1.resolvers,
});
(0, standalone_1.startStandaloneServer)(server, {
    listen: { port: 4000 }
}).then((value) => console.log(` 🚀  Server ready at: ${value.url}`));
