const express = require("express")
const router = express.Router()
const {validatorCreateUser} = require("../validators/users")
const {getAllUsers, getUserById, createNewUser, updateUser, deleteUser} = require("../controllers/users")

router.get("/", getAllUsers)
router.get("/:id", getUserById)
router.post("/", validatorCreateUser, createNewUser)
router.put("/:id", updateUser )
router.delete("/:id", deleteUser)

module.exports = router
