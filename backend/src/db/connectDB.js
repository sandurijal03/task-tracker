require('dotenv').config();

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.DB_URI}/${process.env.DB_NAME}`);
    console.log('database connected');
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDB;
