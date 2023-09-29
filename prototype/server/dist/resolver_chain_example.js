"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const libraries = [
    {
        branch: 'downtown',
    },
    {
        branch: 'riverside',
    },
];
const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
        branch: 'riverside',
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
        branch: 'downtown',
    },
];
const typeDefs = `#graphql
  type Library {
    branch: String!
    books: [Book!]
  }

  type Book {
    title: String!
    author: Author!
  }

  type Author {
    name: String!
  }

  # Queries can fetch a list of libraries
  type Query {
    libraries: [Library]
  }
`;
// Resolver map
const resolvers = {
    Query: {
        libraries() {
            // Return our hardcoded array of libraries
            return libraries;
        },
    },
    Library: {
        books(parent) {
            // Filter the hardcoded array of books to only include
            // books that are located at the correct branch
            return books.filter((book) => book.branch === parent.branch);
        },
    },
    Book: {
        // The parent resolver (Library.books) returns an object with the
        // author's name in the "author" field. Return a JSON object containing
        // the name, because this field expects an object.
        author(parent) {
            return {
                name: parent.author,
            };
        },
    },
    // Because Book.author returns an object with a "name" field,
    // Apollo Server's default resolver for Author.name will work.
    // We don't need to define one.
};
// Pass schema definition and resolvers to the
// ApolloServer constructor
const server = new server_1.ApolloServer({
    typeDefs,
    resolvers,
});
// Launch the server
(0, standalone_1.startStandaloneServer)(server).then((value) => {
    console.log(`🚀 Server listening at: ${value.url}`);
});
