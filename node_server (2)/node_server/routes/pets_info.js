var express = require("express");
var router = express.Router();

var petsController = require("../controllers/petsController");
 const JoiMiddleWare = require('../middleware/joiMiddleware'); 
 const petSchema = require("../validations/pets_infoValidations");

/* Validator middle ware for Joi Passes the error ahead */
/* If Middleware succeeds it will go to the controller. */

/*
@apiBody { 
    {
        "name": string
    }
} 
 */

router.post("/", 
JoiMiddleWare(petSchema.createPetSchema, 'body'),
petsController.createRole);

router.get("/", petsController.getRoles);



/*
    @apiParams = {
        id: number
    }
*/
// router.get("/:id", 
// JoiMiddleWare(roleSchema.getRole, 'params'),
// roleController. getRole);

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