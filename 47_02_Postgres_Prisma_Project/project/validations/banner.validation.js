import joi from "joi";

const BannerValidation = joi.object({
  name: joi.string().required(),
  description: joi.string().max(250).required(),
  balance: joi.number().precision(2).default(0),
  target: joi.number().precision(2).default(4000),
  authorId: joi.number().positive().required(),
  img: joi.string().required(),
  categoryId: joi.number().required(),
  status: joi.string().valid("PENDING", "ACTIVE", "FINISH").default("PENDING"),
});

const BannerPatchValidation = joi.object({
  name: joi.string(),
  description: joi.string().max(250),
  balance: joi.number().precision(2).default(0),
  target: joi.number().precision(2).default(4000),
  img: joi.string(),
  categoryId: joi.number(),
  status: joi.string().valid("PENDING", "ACTIVE", "FINISH").default("PENDING"),
});

export { BannerValidation, BannerPatchValidation };
