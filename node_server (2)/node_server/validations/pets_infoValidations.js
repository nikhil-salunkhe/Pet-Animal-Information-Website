const Joi = require('joi') 

const createSchema = { 
    createPetSchema: Joi.object().keys({ 
    name: Joi.string().required(),
    description:Joi.string().required(),
  }),

//   getRole: Joi.object().keys({
//     id: Joi.number().min(1).required() 
//   }),

//   putRole: Joi.object().keys({
//     id: Joi.number().min(1)
//   }),


//   deleteRole: Joi.object().keys({
//     id: Joi.number().min(1).required() 
//   })
}; 
module.exports = createSchema;