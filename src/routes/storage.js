const express = require("express")
const { uploadImage } = require("../controllers/storage")
const authMiddleware = require("../middlewares/sesion")
const { uploadMiddleware } = require("../utils/handleStorage")


const router = express.Router()

router.post("/",authMiddleware, uploadMiddleware.single('myfile'), uploadImage)

module.exports = router