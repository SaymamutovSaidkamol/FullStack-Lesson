import Joi from 'joi';

let ProductValidation = Joi.object({
    name: Joi.string().required().min(2).max(50),
    price: Joi.string().required(),
    color: Joi.string().required(),
    category_id: Joi.number().required(),
});

export {ProductValidation}
