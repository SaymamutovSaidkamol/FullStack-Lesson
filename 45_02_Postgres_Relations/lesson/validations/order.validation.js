import joi from "joi";

const OrderValidation = new joi.object({
  plastmassaId: joi.number().required(),
  type: joi.string().valid("Plastmassa mator","Temir mator","Matorlik","Turba mator","Matorsiz").required(),
  toPay: joi.boolean().required(),
  clientId: joi.number().required(),
});

const OrderPatchValidation = new joi.object({
  plastmassaId: joi.string(),
  type: joi.string().valid("Plastmassa mator","Temir mator","Matorlik","Turba mator","Matorsiz"),
  toPay: joi.boolean(),
  clientId: joi.number(),
});

export { OrderValidation, OrderPatchValidation };
