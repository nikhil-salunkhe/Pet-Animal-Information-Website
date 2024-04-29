const Response = require("../classes/Response");
const db = require("../config/db.config");

// const createRole = async (req, res) => {
//     try{
//         let role = await db.roles.create(req.body);
//         res.status(201).send(Response.sendResponse(true,role,null,201));
//     }catch(err) {
//         return res.status(500).send(Response.sendResponse(false,null,err,500));
//     }
// }

const getRoles = async (req, res) => {
    try {
        let user_data = await db.tutorial.findAll();
        res.status(200).send(Response.sendResponse(true,user_data,null,200));
    }catch(err){
        return res.status(500).send(Response.sendResponse(false,null,err,500));
    }
}

const getPetById = async (req, res) => {
    try {
        let role = await db.petInfo.findAll({where: {pettype: req.query.pettype}});
        res.status(200).send(Response.sendResponse(true,role,null,200));
    }catch(err){
        return res.status(500).send(Response.sendResponse(false,null,err,500));
    }
}

const getPetBytitleId = async (req, res) => {
    try {
        let role = await db.petInfo.findAll({where: {pettitle: req.query.pettitle}});
        res.status(200).send(Response.sendResponse(true,role,null,200));
    }catch(err){
        return res.status(500).send(Response.sendResponse(false,null,err,500));
    }
}

// const updateRole = async (req, res) => {
//     try{
//         let role = await db.roles.update(req.body, {where: {id : req.body.id}})
//         res.status(200).send(Response.sendResponse(true,role,null,200));
//     }catch(err) {
//         return res.status(500).send(Response.sendResponse(false,null,err,500));
//     }
// }

// const deleteRole = async (req, res) => {
//     try{
//         let role = await db.roles.destroy({where: {id : req.params.id}})
//         res.status(200).send(Response.sendResponse(true,role,null,200));
//     }catch(err) {
//         return res.status(500).send(Response.sendResponse(false,null,err,500));
//     }
// }


module.exports = { 
    // createRole, 
    getRoles, 
    getPetById, 
    getPetBytitleId,
    // updateRole, 
    // deleteRole
    }
