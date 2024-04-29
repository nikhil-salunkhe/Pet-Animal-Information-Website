var express = require("express");
var router = express.Router();

var tutorialController = require("../controllers/tutorialController");
 const JoiMiddleWare = require('../middleware/joiMiddleware'); 
 const tutSchema = require("../validations/tut_validations");

/* Validator middle ware for Joi Passes the error ahead */
/* If Middleware succeeds it will go to the controller. */

/*
@apiBody { 
    {
        "name": string
    }
} 
 */

// router.post("/", 
// JoiMiddleWare(roleSchema.createRole, 'body'),
// roleController.createRole);

router.get("/", tutorialController.getRoles);
// router.get("/", tutorialController.getRole);




/*
    @apiParams = {
        id: number
    }
*/
router.get("/pettype", 
JoiMiddleWare(tutSchema.getPetSchema, 'query'),
tutorialController.getPetById);


router.get("/pettitle", 
JoiMiddleWare(tutSchema.getPettitleSchema, 'query'),
tutorialController.getPetBytitleId);
// router.put("/", roleController. updateRole);


/*
    @apiParams = {
        id: number
    }
*/

// router.delete("/:id", 
// JoiMiddleWare(roleSchema.deleteRole, 'params'),
// roleController.deleteRole);


module.exports = router;