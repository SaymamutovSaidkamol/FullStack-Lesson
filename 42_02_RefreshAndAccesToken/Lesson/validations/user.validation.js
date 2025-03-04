import joi from "joi";

const UserValidation = joi.object({
  fullname: joi.string().required(),
  phone: joi.number().required(),
  password: joi.string().required(),
  role: joi.string(),
  status: joi.string(),
  refreshToken: joi.string(),
});

const UserLoginValidation = joi.object({
  fullname: joi.string().required(),
  password: joi.string().required(),
});

const VerifyNumberValidation = joi.object({
  phone: joi.string().required(),
  otp: joi.string()
});

export { UserValidation, UserLoginValidation, VerifyNumberValidation };
