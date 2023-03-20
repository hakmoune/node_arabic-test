/**
 * Creation de notre Collection
 * La validation de nos donées coté base de donnée et coté app
 */
const moongose = require("mongoose");
const joi = require("joi");

const Customer = moongose.model(
  "Customer",
  new moongose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 255 },
    mobile: { type: String, required: true, minlength: 3, maxlength: 15 },
    isGold: { type: Boolean, default: false }
  })
);

function joiValidateCustomer(customer) {
  const schema = {
    name: joi
      .string()
      .min(3)
      .max(255)
      .required(),
    mobile: joi
      .string()
      .min(3)
      .max(15)
      .required(),
    isGold: joi.boolean()
  };

  return joi.validate(customer, schema);
}

exports.Customer = Customer;
exports.joiValidateCustomer = joiValidateCustomer;
