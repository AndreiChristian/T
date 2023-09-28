import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from "./resolvers/index"
import { typeDefs } from "./schema/index"

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
})

startStandaloneServer(server, {
  listen: { port: 4000 }
}).then((value) => console.log(` 🚀  Server ready at: ${value.url}`))

