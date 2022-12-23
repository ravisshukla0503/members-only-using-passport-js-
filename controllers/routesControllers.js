/** @format */

const configModel = require("../model/configModel");
const usersModel = require("../model/usersModel");
const bcrypt = require("../utils/bcrypt");

exports.renderSignupPage = (req, res) => {
  res.render("sign-up");
};

exports.renderMessagePage = (req, res) => {
  res.render("message");
};

exports.signup = async (req, res) => {
  const password = bcrypt.hashPassword(req.body.password);
  const { email, username } = req.body;
  const checkNewUser = await usersModel.findOne({ email });
  if (!checkNewUser) {
    let data = new usersModel({ username, email, password });
    data = await data.save();
    if (data) {
      res.redirect("message");
    } else {
      res.send("Some Problem to register");
    }
  } else {
    req.send("user is already reg with this email id");
  }
};

exports.renderLoginPage = (req, res) => {
  res.render("login");
};

exports.login = async (req, res) => {
  console.log("logged in");
  res.redirect("message");
};

