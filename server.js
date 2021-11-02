const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");

const transactions = require("./routes/transactions");

dotenv.config({ path: "./config/config.env" });

var app = express();

app.use("/api/v1/transactions", transactions);

const PORT = process.env.PORT_ENV || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT_ENV}...`
      .yellow.bold
  )
);
