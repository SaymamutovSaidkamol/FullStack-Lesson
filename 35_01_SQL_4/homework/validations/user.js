import Joi from "joi";

let UserValidation = await Joi.object({
    name:Joi.string().min(3).max(25).required(),
    age: Joi.number().required(),
    region_id: Joi.number().required()
})

let UserPatchValidation = await Joi.object({
    name:Joi.string().min(3).max(25),
    age: Joi.number(),
    region_id: Joi.number()
})

export {UserValidation, UserPatchValidation}