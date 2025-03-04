import joi from "joi";

const StudentValidation = joi.object({
  firstname: joi.string().min(2).max(20),
  lastname: joi.string().required(),
  age: joi.number().positive().required(),
  phone: joi.string().min(13).max(13).required(),
});

const StudentPatchValidation = joi.object({
  firstname: joi.string().min(2).max(20),
  lastname: joi.string(),
  age: joi.number().positive(),
  phone: joi.string().min(13).max(13),
});

function validatePhoneNumber(phoneNumber) {
  const phoneRegex = /^\+998\d{9}$/;
  if (phoneRegex.test(phoneNumber)) {
    return true;
  } else {
    return false;
  }
}

export { StudentPatchValidation, StudentValidation, validatePhoneNumber };
