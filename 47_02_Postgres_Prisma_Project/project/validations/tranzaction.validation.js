import joi from "joi";

const TranzactionValidation = joi.object({
  summa: joi.number().precision(2).required(),
  comment: joi.string().max(250).required(),
  bannerId: joi.number().positive().required(),
  authorId: joi.number().positive().required(),
});

export { TranzactionValidation };