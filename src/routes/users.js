const express = require("express")
const router = express.Router()
const {validatorCreateUser, validatorGetUser,validatorUpdateUser} = require("../validators/users")
const {getAllUsers, getUserById, createNewUser, updateUser, deleteUser} = require("../controllers/users")
const {getFollowersByUser,getFollowingsByUser, unFollower} = require("../controllers/followers")
const {getTweetsByUser} = require("../controllers/tweets")
const {validatorGetFollowers, validatorGetFollowings, validatorUnfollower } = require("../validators/followers")

router.get("/", getAllUsers)
router.get("/:id",validatorGetUser, getUserById)
router.get("/:id/tweets",getTweetsByUser)
router.get("/:id/follows",validatorGetFollowers, getFollowersByUser)
router.delete("/:id/follows/:followsId",validatorUnfollower, unFollower)
router.get("/:id/followings",validatorGetFollowings, getFollowingsByUser)
router.post("/", validatorCreateUser, createNewUser)
router.put("/:id",validatorGetUser, validatorUpdateUser, updateUser )
router.delete("/:id",validatorGetUser, deleteUser)

module.exports = router
