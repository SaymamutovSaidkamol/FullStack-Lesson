import joi from "joi";

const learningCenterValidation = joi.object({
  name: joi.string().min(2).max(20).required(),
  phone: joi.string().min(13).max(13).required(),
});

const learningCenterPatchValidation = joi.object({
  name: joi.string().min(2).max(20),
  phone: joi.string().min(2).max(15),
});


function validatePhoneNumber(phoneNumber) {
  const phoneRegex = /^\+998\d{9}$/;
  if (phoneRegex.test(phoneNumber)) {
      return true;  
  } else {
      return false;  
  }
}

export { learningCenterPatchValidation, learningCenterValidation, validatePhoneNumber };
