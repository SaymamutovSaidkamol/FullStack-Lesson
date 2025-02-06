import Joi from "joi";

let banner_idValidation = await Joi.object({
    name:Joi.string().min(3).max(25).required(),
    banner_id: Joi.number().required(),
    region_id: Joi.number().required()
})

export {banner_idValidation}