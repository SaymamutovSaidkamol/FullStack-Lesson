import joi from "joi";

const CategoryValidation = joi.object({
  name: joi.string().max(250).required(),
  img: joi.string().required(),
});

const CategoryPatchValidation = joi.object({
  name: joi.string().max(250).required(),
  img: joi.number(),
});

export { CategoryValidation, CategoryPatchValidation };
