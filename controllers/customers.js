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

exports.createCustomer = (req, res, next) => {
  const customer = new Customer({
    name: "Souhail Hakmoune",
    mobile: "0679678227",
    isGold: true
  });

  customer
    .save()
    .then(() =>
      res.status(201).json({
        message:
          "L'element a bien été ajouté a la base de donnée: " + customer.name
      })
    )
    .catch(error => res.status(400).json({ error }));
};
