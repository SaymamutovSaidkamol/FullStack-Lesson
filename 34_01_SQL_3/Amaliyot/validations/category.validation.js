import Joi from 'joi';

let CategoryValidation = Joi.object({
    name: Joi.string().required().min(2).max(50),
    color: Joi.string().required()
});

export {CategoryValidation}
