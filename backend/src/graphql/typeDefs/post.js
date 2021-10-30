const { gql } = require('apollo-server-express');

const postTypeDefs = gql`
  extend type Query {
    hello: String
  }
`;

module.exports = postTypeDefs;
