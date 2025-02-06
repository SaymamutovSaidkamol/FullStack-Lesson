import Joi from "joi";

let RegionValidation = await Joi.object({
    name:Joi.string().min(3).max(25).required()
})

export {RegionValidation}