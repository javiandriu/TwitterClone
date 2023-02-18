const express = require("express")
const router = express.Router()
const {getTweetById, postCreateTweet, updateTweet, deleteTweet} = require("../controllers/tweets")
const {validatorGetTweet, validatorCreateTweet, validatorUpdateTweet} = require("../validators/tweets")
const {getImagesByTweetId} = require("../controllers/images")
const authMiddleware = require("../middlewares/sesion")

router.get("/:id",validatorGetTweet, getTweetById)
router.get("/:id/images",getImagesByTweetId)
router.post("/",authMiddleware, postCreateTweet)
router.put("/:id", validatorGetTweet, validatorUpdateTweet, updateTweet)
router.delete("/:id", validatorGetTweet, deleteTweet)

module.exports = router
