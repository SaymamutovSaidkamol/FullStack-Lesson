import Joi from "joi";

let productValidation = await Joi.object({
    name:Joi.string().min(3).max(25).required(),
    price: Joi.number().required(),
    color: Joi.string().required()
})

let productPatchValidation = await Joi.object({
    name:Joi.string().min(3).max(25),
    price: Joi.number(),
    color: Joi.string()
})

export {productValidation, productPatchValidation}