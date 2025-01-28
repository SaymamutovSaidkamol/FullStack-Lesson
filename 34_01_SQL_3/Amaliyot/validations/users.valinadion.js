import Joi from 'joi';

let UserValidation = Joi.object({
    username: Joi.string().required().min(2).max(50),
    password: Joi.string().max(100).min(4).required()
});

export {UserValidation}
