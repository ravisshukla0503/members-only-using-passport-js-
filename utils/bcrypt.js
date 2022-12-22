/** @format */

const bcrypt = require("bcryptjs");

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, salt);
};

const confirmPassword = (reqPassword, databasePassword) => {
  return bcrypt.compareSync(reqPassword, databasePassword);
};

module.exports = {
  hashPassword,
  confirmPassword,
};

