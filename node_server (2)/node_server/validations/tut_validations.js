const Joi = require('joi') 

const createSchema = { 
    createPetSchema: Joi.object().keys({ 
    title: Joi.string().required(),
    pettype:Joi.string().required(),
  }),

  getPetSchema: Joi.object().keys({
    pettype: Joi.string().required(), 
  }),

  getPettitleSchema: Joi.object().keys({
    pettitle: Joi.string().required(), 
  }),

//   putRole: Joi.object().keys({
//     id: Joi.number().min(1)
//   }),


//   deleteRole: Joi.object().keys({
//     id: Joi.number().min(1).required() 
//   })
}; 
module.exports = createSchema;