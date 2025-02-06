import Joi from "joi";

let ordersidValidation = await Joi.object({
    users_id:Joi.number().required()
})

export {ordersidValidation}