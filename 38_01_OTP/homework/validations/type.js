import Joi from "joi";

let TypeValidation = await Joi.object({
    name:Joi.string().min(3).max(25).required()
})

export {TypeValidation}