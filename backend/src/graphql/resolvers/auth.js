const resolvers = {
  Query: {
    getUsers: () => 'get all users',
  },
  Mutation: {
    register: async (parent, { userInput }, { User }, info) => {
      try {
        const newUser = await new User({ ...userInput });

        const user = await newUser.save();
        return user;
      } catch (err) {
        console.log(err);
        throw new Error('Error', err);
      }
    },
  },
};

module.exports = resolvers;
