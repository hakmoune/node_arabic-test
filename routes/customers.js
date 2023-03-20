/**
 * Creation de nos routes(End points)
 */
const express = require("express");
const router = express.Router();
const customerCtrl = require("../controllers/customers");

router.get("/", customerCtrl.getAllCustomers);

module.exports = router;
