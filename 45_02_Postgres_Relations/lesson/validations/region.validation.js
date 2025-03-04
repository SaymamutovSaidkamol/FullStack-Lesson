import joi from "joi";

const RegionValidation = new joi.object({
  name: joi.string().required(),
});

const RegionPatchValidation = new joi.object({
  name: joi.string(),
});

export { RegionValidation, RegionPatchValidation };