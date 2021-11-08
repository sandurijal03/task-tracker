import { decryptPassword, encryptPassword } from '../../helpers/hash';

const resolvers = {
  Query: {
    getUsers: () => 'get all users',
  },
  Mutation: {
    register: async (parent, { userInput }, { User }, info) => {
      try {
        const { firstName, lastName, email, password } = userInput;
        const hashedPassword = await decryptPassword(password);
        const newUser = await new User({
          firstName,
          lastName,
          email,
          password: hashedPassword,
        });

        const user = await newUser.save();
        return user;
      } catch (err) {
        console.log(err);
        throw new Error('Error', err);
      }
    },

    login: async (parent, { userInput }, { User }, info) => {
      try {
        const { email, password } = userInput;
        const user = await User.findOne({ email });

        if (!user) {
          throw new Error('User not found');
        }

        const isMatch = await decryptPassword(password, user.password);

        if (!isMatch) {
          throw new Error('Either email or password is invalid');
        }
        return user;
      } catch (err) {
        console.log(err.message);
        throw new Error('error', err.message);
      }
    },
  },
};

export default resolvers;
