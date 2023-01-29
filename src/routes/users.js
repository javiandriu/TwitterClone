const express = require("express")
const router = express.Router()
const {validatorCreateUser, validatorGetUser,validatorUpdateUser} = require("../validators/users")
const {getAllUsers, getUserById, createNewUser, updateUser, deleteUser} = require("../controllers/users")

router.get("/", getAllUsers)
router.get("/:id",validatorGetUser, getUserById)
router.post("/", validatorCreateUser, createNewUser)
router.put("/:id",validatorGetUser, validatorUpdateUser, updateUser )
router.delete("/:id",validatorGetUser, deleteUser)

module.exports = router
