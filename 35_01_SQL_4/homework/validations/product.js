import Joi from "joi";

let productValidation = await Joi.object({
    name:Joi.string().min(3).max(25).required(),
    price: Joi.number().required(),
    image: Joi.string(),
    category_id: Joi.number().required()
})

let productPatchValidation = await Joi.object({
    name:Joi.string().min(3).max(25),
    price: Joi.number(),
    image: Joi.string(),
    category_id: Joi.number()
})

export {productValidation, productPatchValidation}