const { ApolloServer, gql } = require("apollo-server-express");
const { resolvers } = require("./resolvers");
const { typeDefs } = require("./typeDefs");
const express = require("express");
const mongoose = require("mongoose");
const env = require("./config/.env.js");

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

mongoose
  .connect(env.mongoConnection, { useNewUrlParser: true })
  .then(() =>
    app.listen({ port: 4000 }, () =>
      console.log(
        `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
      )
    )
  );