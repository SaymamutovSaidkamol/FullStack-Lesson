import joi from "joi";

const OrdinaryValidation = joi.object({
  compNumber: joi.string().required(),
  price: joi.number().precision(2).required(),
  type: joi.string().valid("Strong", "Weak").required(),
  img: joi.string().required(),
  status: joi.string().valid("Empty", "Busy").required(),
  Characteristics: joi.string().required(),
  orderscomps: joi.any().required()

});

const OrdinaryPatchValidation = joi.object({
    status: joi.boolean().valid("Empty", "Busy").required(),
});
export { OrdinaryValidation, OrdinaryPatchValidation };
