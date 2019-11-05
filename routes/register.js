var express = require('express');
var router = express.Router();
const registerController = require
("./../controller/RegisterController");

router.get("/",registerController.getRegister);
router.get("/:id",registerController.getOneregister);
router.post("/",registerController.insert);


module.exports = router;
