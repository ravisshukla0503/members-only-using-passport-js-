/** @format */

const passport = require("passport");
const { Strategy } = require("passport-local");
const usersModel = require("../model/usersModel");
const { confirmPassword } = require("../utils/bcrypt");

passportLocal = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await usersModel.findOne({ id });
      if (!user) throw new Error("User not found");
      done(null, user);
    } catch (err) {
      if (err) done(err, null);
    }
  });

  passport.use(
    new Strategy(
      {
        usernameField: "email", // this first parameter is optional in callback function it give username , password and done so make email as username
      },
      async (email, password, done) => {
        if (!email || !password) {
          throw new Error("missing creidential");
        }
        const userDb = await usersModel.findOne({ email });
        if (!userDb) {
          throw new Error("User emailId is not match");
        }
        const isValidPassword = confirmPassword(password, userDb.password);
        if (!isValidPassword) {
          return done(null, null);
        }
        console.log("authenticate user");
        return done(null, userDb);
      }
    )
  );
};

module.exports = passportLocal;

