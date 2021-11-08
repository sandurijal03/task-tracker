import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String
  }

  input RegisterInput {
    firstName: String
    lastName: String
    email: String
    password: String
  }

  input LoginInput {
    email: String
    password: String
  }

  extend type Query {
    getUsers: String
  }

  extend type Mutation {
    register(userInput: RegisterInput): User
    login(userInput: LoginInput): User
  }
`;

export default typeDefs;
