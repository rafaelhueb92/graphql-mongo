const { gql } = require("apollo-server-express");

module.exports = {
  typeDefs: gql`
    type Query {
      hello: String!
      cats:[Cat!]
    }

    type Cat {
      id: ID!
      name: String!
    }

    type Mutation {
      createCat(name: String!): Cat!
    }
  `
};
