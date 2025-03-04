import joi from "joi";

const BookValidation = joi.object({
  name: joi.string().min(2).max(20).required(),
  authorId: joi.number().positive().required(),
});

const BookPatchValidation = joi.object({
  name: joi.string().min(2).max(20),
  authorId: joi.number().positive(),
});

export { BookPatchValidation, BookValidation };
