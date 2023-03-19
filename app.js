const moongose = require("mongoose");
const express = require("express");

const app = express();

moongose
  .connect("mongodb://localhost:27017/node_arabic_test_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(error => console.log("Connexion à MongoDB échouée !"));

module.exports = app;
