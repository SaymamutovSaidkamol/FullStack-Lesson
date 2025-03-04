import joi from "joi";

const RegisterValidation = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  phone: joi.string().min(13).max(13).required(),
  email: joi.string().min(10).required(),
  password: joi.string().required(),
  regionId: joi.number().positive().required(),
  role: joi.string().valid("USER", "ADMIN").default("USER"),
  status: joi.string().valid("ACTIVE", "INACTIVE").default("INACTIVE"),
});

const UserPatchValidation = joi.object({
  firstName: joi.string(),
  lastName: joi.string(),
  phone: joi.string().min(13).max(13),
  email: joi.string().min(10),
  password: joi.string(),
  regionId: joi.number().positive(),
  role: joi.string().valid("USER", "ADMIN"),
  status: joi.string().valid("ACTIVE", "INACTIVE"),
});

function validatePhoneNumber(phoneNumber) {
  const phoneRegex = /^\+998\d{9}$/;
  if (phoneRegex.test(phoneNumber)) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const emailRegex =
    /^[a-zA-Z0-9][a-zA-Z0-9._%+-]{0,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailRegex.test(email);
}

function validatePassword(password) {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
  return passwordRegex.test(password);
}

function validateName(name) {
  const nameRegex = /^[a-zA-Z]{2,32}$/;
  return nameRegex.test(name);
}

export {
  RegisterValidation,
  validateEmail,
  validateName,
  validatePassword,
  validatePhoneNumber,
  UserPatchValidation,
};
