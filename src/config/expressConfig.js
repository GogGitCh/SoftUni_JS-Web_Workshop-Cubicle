const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const { auth } = require("../middlewares/authmiddleware");

function expressConfigurator(app) {
  app.use(express.static(path.resolve(__dirname, "../public"))); // setting middleware for the static files
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(auth);
}

module.exports = expressConfigurator;
