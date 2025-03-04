import joi from "joi";

const AuhorValidation = joi.object({
  name: joi.string().min(2).max(20).required(),
  surname: joi.string().min(2).max(20).required(),
  year: joi.number().min(1950).max(2025).required(),
});

const AuhorPatchValidation = joi.object({
  name: joi.string().min(2).max(20),
  surname: joi.string().min(2).max(20),
  year: joi.number().min(1950).max(2025),
});

export { AuhorPatchValidation, AuhorValidation };
