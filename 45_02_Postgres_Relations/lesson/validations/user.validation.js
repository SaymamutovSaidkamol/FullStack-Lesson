import joi from "joi";

const UserValidation = new joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  phone: joi.string().required(),
  email: joi.string().required(),
  role: joi.valid("ADMIN", "SUPER_ADMIN").required(),
});

const UserPatchValidation = new joi.object({
  firstName: joi.string(),
  lastName: joi.string(),
  phone: joi.string(),
  email: joi.string(),
  role: joi.valid("ADMIN", "SUPER_ADMIN"),
});

export { UserValidation, UserPatchValidation };
