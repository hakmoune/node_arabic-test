/**
 * CNX avaec la base de donnée
 * Creation de notre app express
 * On passe le Headrs that allow our API to work on deferent servers (Surpase CROS error)
 * Creation d'un middleware qui intercept toutes les requêtes qui ont un content Type JSON
 * Importer nos routes
 */
const moongose = require("mongoose");
const express = require("express");

const app = express();
const customerRoutes = require("./routes/customers");

moongose
  .connect("mongodb://localhost:27017/node_arabic_test_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(error => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());

app.use("/api/customer", customerRoutes);

module.exports = app;
