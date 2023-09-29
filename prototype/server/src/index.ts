import { readFileSync } from 'fs';
import path from 'path';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from "./resolvers/index"

const typeDefs = readFileSync(path.join(__dirname, '..', 'schema.graphql'), { encoding: "utf8" });

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers,
})

startStandaloneServer(server, {
  listen: { port: 4000 }
}).then((value) => console.log(` 🚀  Server ready at: ${value.url}`))

