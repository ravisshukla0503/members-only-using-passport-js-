/** @format */

const passport = require("passport");
const { Strategy } = require("passport-local");
const usersModel = require("../model/usersModel");
const { confirmPassword } = require("../utils/bcrypt");

passport.use(
  new Strategy({
    usernameField: "email", // this first parameter is optional
  }),
  async (email, password, done) => {
    console.log(email);
    console.log(password);
    if (!email || !password) {
      throw new Error("missing creidential");
    }
    const userDb = await usersModel.findOne({ email });
    if (!userEmail) {
      throw new Error("User emailId is not match");
    }
    const isValidPassword = confirmPassword(password, userDb.password);
    if (!isValidPassword) {
      done(null, null);
    }
    done(null, userDb);
  }
);

