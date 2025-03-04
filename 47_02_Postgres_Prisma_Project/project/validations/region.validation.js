import joi from "joi"

const RegionValidation = joi.object({
  name: joi.string().required(),
});

const RegionPatchValidation = joi.object({
  name: joi.string(),
});

function validateName(name) {
  const nameRegex = /^[a-zA-Z]{2,32}$/;
  return nameRegex.test(name);
}

export { RegionPatchValidation, RegionValidation, validateName };
