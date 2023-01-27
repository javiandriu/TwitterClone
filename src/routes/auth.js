const express = require("express")
const router = express.Router()
const {validatorRegister, validatorLogin} = require ("../validators/auth")
const { registerController, loginController } = require("../controllers/auth")
/**
 * Create a register
 */
router.post("/register",validatorRegister, registerController)
router.post("/login",validatorLogin, loginController)

module.exports = router
