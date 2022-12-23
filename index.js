/** @format */

const express = require("express");
const passport = require("passport");
const expressSession = require("express-session");
const router = require("./routes/router");
const cors = require("cors");
const passportintialized = require("./strategies/passportLocal");

const app = express();

app.set("view engine", "ejs");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
passportintialized(passport);
app.use(
  expressSession({
    secret: "secret",
    saveUninitialized: false,
    resave: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(router);

app.listen(5000, (err) => {
  if (err) {
    console.log("there is error");
  } else {
    console.log("Server is running on port 5000");
  }
});

