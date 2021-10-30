const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const app = express();
const port = process.env.PORT || 4000;

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'hello world',
  },
};

const mountServer = async () => {
  const server = new ApolloServer({
    resolvers,
    typeDefs,
  });
  await server.start();
  server.applyMiddleware({ app, path: '/api' });

  app.listen(port, () => console.log(`[server]: listening on port ${port}`));
};

mountServer();
