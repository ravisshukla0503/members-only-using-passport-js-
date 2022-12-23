/** @format */

const express = require("express");
const routesControllers = require("../controllers/routesControllers");
const passport = require("passport");
const router = express.Router();

router.get("/sign-up", routesControllers.renderSignupPage);

router.get("/message", routesControllers.renderMessagePage);

router.get("/login", routesControllers.renderLoginPage);

router.post("/sign-up", routesControllers.signup);

router.post("/login", passport.authenticate("local"), routesControllers.login);

module.exports = router;

