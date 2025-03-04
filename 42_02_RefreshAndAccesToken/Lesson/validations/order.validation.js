import joi from "joi";

const OrderValidation = joi.object({
  total: joi.number().precision(2).required(),
  payment: joi.string().valid("Click", "Naxt").required(),
  status: joi.string().valid("expected", "done", "canceled").default("expected"),
  userId: joi.number().required(),
});

const OrderPatchValidation = joi.object({
  status: joi.string().valid("expected", "done", "canceled").default("expected"),
});
export { OrderValidation, OrderPatchValidation };
