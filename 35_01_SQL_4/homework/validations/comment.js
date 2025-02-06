import Joi from "joi";

let CommentValidation = await Joi.object({
    msg:Joi.string().min(3).max(255).required(),
    user_id: Joi.number().required(),
    product_id: Joi.number().required()
})

let CommentPatchValidation = await Joi.object({
    msg:Joi.string().min(3).max(255),
    user_id: Joi.number(),
    product_id: Joi.number()
})

export {CommentValidation, CommentPatchValidation}