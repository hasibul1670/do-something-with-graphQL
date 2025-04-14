const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { gql } = require("graphql-tag");

// Sample data
const books = [
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
  { title: "Harry Potter", author: "J.K. Rowling" },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
];
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;
const resolvers = {
  Query: {
    books: () => books,
  },
};

async function startServer() {
  const app = express();

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start(); 
  server.applyMiddleware({ app }); 

  const PORT = 5000;
  app.listen(PORT, () =>
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    )
  );
}

startServer();
