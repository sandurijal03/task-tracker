require('dotenv').config();

const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const { resolvers, typeDefs } = require('./graphql');
const connectDB = require('./db/connectDB');
const User = require('./models/User');

const app = express();
const port = process.env.PORT || 4000;

const mountServer = async () => {
  await connectDB();
  const server = new ApolloServer({
    resolvers,
    typeDefs,
    context: (req, res) => ({ req, res, User }),
  });
  await server.start();
  server.applyMiddleware({ app, path: '/api' });

  app.listen(port, () => console.log(`[server]: listening on port ${port}`));
};

mountServer();
