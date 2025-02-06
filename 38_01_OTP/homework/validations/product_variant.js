import Joi from "joi";

let product_variantValidation = await Joi.object({
    price:Joi.number().required(),
    product_id :Joi.number().required(),
    type_variant_id:Joi.number().required()
})

let product_variantPatchValidation = await Joi.object({
    price:Joi.number(),
    product_id :Joi.number(),
    type_variant_id:Joi.number()
})

export {product_variantValidation, product_variantPatchValidation}