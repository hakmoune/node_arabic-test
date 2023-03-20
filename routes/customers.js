/**
 * Creation de nos routes(End points)
 */
const express = require("express");
const router = express.Router();
const customerCtrl = require("../controllers/customers");

router.get("/", customerCtrl.getAllCustomers);
router.post("/", customerCtrl.createCustomer);

module.exports = router;
