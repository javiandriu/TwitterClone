const express = require("express")
const router = express.Router()
const {getTweetById, postCreateTweet, updateTweet, deleteTweet} = require("../controllers/tweets")
const {validatorGetTweet,validatorCreateTweet, validatorUpdateTweet} = require("../validators/tweets")
const authMiddleware = require("../middlewares/sesion")
const { like, dislike } = require("../controllers/likes")
const {validatorLike, validatorDislike}= require("../validators/likes")

router.get("/:id",validatorGetTweet, getTweetById)
router.post("/",authMiddleware,validatorCreateTweet,postCreateTweet)
router.get("/:id/likes",)
router.post("/:id/likes",authMiddleware,validatorLike,like)
router.put("/:id", validatorGetTweet, validatorUpdateTweet, updateTweet)
router.delete("/:id", validatorGetTweet, deleteTweet)
router.delete("/:id/likes/:likeId",validatorDislike,dislike)

module.exports = router
