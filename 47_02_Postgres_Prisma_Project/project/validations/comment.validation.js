import joi from "joi";

const CommentValidation = joi.object({
  name: joi.string().max(250).required(),
  bannerId: joi.number().positive().required(),
  authorId: joi.number().positive().required(),
});

const CommentPatchValidation = joi.object({
  name: joi.string().max(250),
  bannerId: joi.number().positive(),
  authorId: joi.number().positive(),
});

export { CommentValidation, CommentPatchValidation };
