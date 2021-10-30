require('dotenv').config();

const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const { resolvers, typeDefs } = require('./graphql');

const app = express();
const port = process.env.PORT || 4000;

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
