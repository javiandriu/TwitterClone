const express = require("express")
const router = express.Router()
const {addNewFollower} = require("../controllers/followers")
const { validatorAddFollower } = require("../validators/followers")
const authMiddleware = require("../middlewares/sesion")



router.post("/",authMiddleware,validatorAddFollower,addNewFollower)
module.exports = router
