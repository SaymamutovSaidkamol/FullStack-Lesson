import joi from "joi";

const UserEnrolmentValidation = joi.object({
    learningCenterId: joi.number().positive().required(),
    studentId: joi.number().positive().required(),
});

const UserEnrolmentPatchValidation = joi.object({
    learningCenterId: joi.number().positive(),
    studentId: joi.number().positive(),
});


export { UserEnrolmentPatchValidation, UserEnrolmentValidation };
