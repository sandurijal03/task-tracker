import { gql } from 'apollo-server-express';

const postTypeDefs = gql`
  extend type Query {
    hello: String
  }
`;

export default postTypeDefs;
