/**
 * Creation de nos traitements et interactions avec la base de donnée
 */
const { Customer, joiValidateCustomer } = require("../models/customers");

exports.getAllCustomers = (req, res, next) => {
  Customer.find()
    .sort("name")
    .then(customers => res.status(200).json(customers))
    .catch(error => res.status(400).json({ error }));
};

/*exports.getAllCustomers = async (req, res, next) => {
    const customers = await Customer.find().sort("name");
    res.send(customers);
};*/
