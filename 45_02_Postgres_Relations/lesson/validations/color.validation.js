import joi from "joi";

const ColorValidation = new joi.object({
  name: joi.string().required(),
});

const ColorPatchValidation = new joi.object({
  name: joi.string(),
});

export { ColorValidation, ColorPatchValidation };
