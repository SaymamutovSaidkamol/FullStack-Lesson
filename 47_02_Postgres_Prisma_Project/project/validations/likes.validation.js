import joi from "joi"

const LikesValidation = joi.object({
  bannerId: joi.number().positive().required(),
  authorId: joi.number().positive().required(),
});

export { LikesValidation };
