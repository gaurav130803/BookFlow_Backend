const Joi = require("joi");

const registrationValidation = Joi.object({
    email:Joi.string().required(),
    username:Joi.string().required(),
    password: Joi.string(),
    role:Joi.string(),
   
});

const loginValidation = Joi.object({
    email:Joi.string().required(),
    password: Joi.string(),
   
});

const contactValidation = Joi.object({
    email:Joi.string().required(),
    message:Joi.string()   
});





module.exports = { registrationValidation,loginValidation,contactValidation };