const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
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
      match: [
        /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/,
        'password must be minimum of 8 characters long and should include capital case small case and numbers with symbol',
      ],
    },
  },
  { timestamps: true },
);

const User = model('User', userSchema);

module.exports = User;
