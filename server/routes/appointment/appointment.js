const express = require("express")
const {createAppointmentController, getAllAppointmentController, getAppointmentByIdController, updateAppointmentController, deleteAppointmentController} = require("../../controllers/appointment/appointment")

const router = express.Router()

router.post("/create", createAppointmentController)
router.get("/getAll", getAllAppointmentController)
router.get("/get/:id", getAppointmentByIdController)
router.put("/update/:id", updateAppointmentController)
router.delete("/delete/:id", deleteAppointmentController)

module.exports = router