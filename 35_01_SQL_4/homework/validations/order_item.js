import Joi from "joi";

let order_itemValidation = await Joi.object({
    product_variant_id:Joi.number().required(),
    order_id:Joi.number().required()
})

let order_itemPatchValidation = await Joi.object({
    product_variant_id:Joi.number(),
    order_id:Joi.number()
})

export {order_itemValidation, order_itemPatchValidation}