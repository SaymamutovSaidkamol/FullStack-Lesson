import Joi from "joi";

let type_variantValidation = await Joi.object({
    name:Joi.string().min(3).max(25).required(),
    type_id: Joi.number().required()
})

let type_variantPatchValidation = await Joi.object({
    name:Joi.string().min(3).max(25),
    type_id: Joi.number()
})

export {type_variantPatchValidation,type_variantValidation}