import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    googleId: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Email is required'],
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Is not a valid email address.'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
  },
  { timestamps: true },
);

const User = model('User', userSchema);

export default User;
