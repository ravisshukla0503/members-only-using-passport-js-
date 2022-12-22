/** @format */

const express = require("express");
const router = require("./routes/router");
const cors = require("cors");

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded());

app.use(router);

app.listen(5000, (err) => {
  if (err) {
    console.log("there is error");
  } else {
    console.log("Server is running on port 5000");
  }
});

