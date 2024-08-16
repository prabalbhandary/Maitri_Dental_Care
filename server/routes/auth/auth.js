const express = require("express")
const {registerController, loginController, getAllUserController, getUserByIdController, updateUserController, deleteUserController} = require("../../controllers/auth/auth")
const router = express.Router()

router.post("/signup", registerController)
router.post("/login", loginController)
router.get("/getAll", getAllUserController)
router.get("/get/:id", getUserByIdController)
router.put("/update/:id", updateUserController)
router.delete("/delete/:id", deleteUserController)

module.exports = router