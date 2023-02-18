const express = require("express")
const router = express.Router()
const {getTweetById, postCreateTweet, updateTweet, deleteTweet} = require("../controllers/tweets")
const {validatorGetTweet, validatorCreateTweet, validatorUpdateTweet} = require("../validators/tweets")
const authMiddleware = require("../middlewares/sesion")


router.get("/:id",validatorGetTweet, getTweetById)
router.post("/",authMiddleware,validatorCreateTweet,postCreateTweet)
router.put("/:id", validatorGetTweet, validatorUpdateTweet, updateTweet)
router.delete("/:id", validatorGetTweet, deleteTweet)

module.exports = router
