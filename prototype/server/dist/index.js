"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const index_1 = require("./resolvers/index");
const index_2 = require("./schema/index");
const server = new server_1.ApolloServer({
    typeDefs: index_2.typeDefs,
    resolvers: index_1.resolvers,
});
(0, standalone_1.startStandaloneServer)(server, {
    listen: { port: 4000 }
}).then((value) => console.log(` 🚀  Server ready at: ${value.url}`));
