const Appointment = require("../../models/appointment/appointment"); 

const createAppointmentController = async (req, res) => {
    try {
        const { title, description, date, time, location, participants } = req.body;
        const newAppointment = new Appointment({
            title,
            description,
            date,
            time,
            location,
            participants
        });
        await newAppointment.save();
        res.status(201).json({ success: true, message: "Appointment Created", data: newAppointment });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const getAllAppointmentController = async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.status(200).json({
            success: true, 
            data: appointments,
            message: 'Appointments fetched successfully.'
        });
    } catch (error) {
        res.status(500).json({
            success: false, 
            message: error.message || 'An unexpected error occurred'
        });
    }
};


const getAppointmentByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const appointment = await Appointment.findById(id);
        if (!appointment) {
            return res.status(404).json({ success: false, message: "Appointment not found" });
        }
        res.status(200).json({ success: true, data: appointment });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const updateAppointmentController = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        if (!id) {
            return res.status(400).json({ success: false, message: "ID is required" });
        }
        if (!updates || typeof updates !== 'object') {
            return res.status(400).json({ success: false, message: "Invalid update data" });
        }
        const appointment = await Appointment.findByIdAndUpdate(id, updates, { new: true });
        if (!appointment) {
            return res.status(404).json({ success: false, message: "Appointment not found" });
        }
        res.status(200).json({ success: true, data: appointment });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const deleteAppointmentController = async (req, res) => {
    try {
        const { id } = req.params;
        const appointment = await Appointment.findByIdAndDelete(id);
        if (!appointment) {
            return res.status(404).json({ success: false, message: "Appointment not found" });
        }
        res.status(200).json({ success: true, message: "Appointment deleted successfully" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createAppointmentController,
    getAllAppointmentController,
    getAppointmentByIdController,
    updateAppointmentController,
    deleteAppointmentController
};
