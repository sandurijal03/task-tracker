const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String
  }

  input UserInput {
    firstName: String
    lastName: String
    email: String
    password: String
  }
  extend type Query {
    getUsers: String
  }

  extend type Mutation {
    register(userInput: UserInput): User
  }
`;

module.exports = typeDefs;
