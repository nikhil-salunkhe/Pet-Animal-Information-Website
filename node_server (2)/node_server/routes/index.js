const express = require("express");
const router = express.Router();

const tutorial = require("./tutorial");  
const pets_info = require("./pets_info");  




router.use("/tut", tutorial); 
router.use("/addpets", pets_info); 
router.use("/", pets_info); 





module.exports = router;
