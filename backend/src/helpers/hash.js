const bcrypt = require('bcryptjs');

const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

const decryptPassword = async (password, savedPassword) => {
  const isMatch = await bcrypt.compare(password, savedPassword);
  return isMatch;
};

module.exports = {
  encryptPassword,
  decryptPassword,
};
