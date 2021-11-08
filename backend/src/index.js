require('dotenv').config();

import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { resolvers, typeDefs } from './graphql';
import connectDB from './db/connectDB';
import User from './models/User';

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
