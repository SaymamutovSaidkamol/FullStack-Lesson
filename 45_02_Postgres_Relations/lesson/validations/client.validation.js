import joi from "joi";

const ClientValidation = new joi.object({
  name: joi.string().required(),
  phone: joi.string().required(),
  regionId: joi.number().required(),
});

const ClientPatchValidation = new joi.object({
  name: joi.string(),
  phone: joi.string(),
  regionId: joi.number(),
});

export { ClientValidation, ClientPatchValidation };
