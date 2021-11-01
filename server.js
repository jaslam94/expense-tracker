const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");

dotenv.config({ path: "./config/config.env" });

var app = express();

app.get("/", (req, res) => res.send("Hello"));

const PORT = process.env.PORT_ENV || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT_ENV}...`
      .yellow.bold
  )
);
