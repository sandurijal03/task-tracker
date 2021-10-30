const resolvers = {
  Query: {
    hello: () => {
      console.log('hello resolvers is triggered');
      return 'hello world';
    },
  },
};

module.exports = resolvers;
