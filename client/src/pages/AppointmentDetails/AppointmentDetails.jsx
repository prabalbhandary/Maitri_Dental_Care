import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../../API/API";
import { toast } from "react-toastify";
import Swal from "sweetalert2"; // Import SweetAlert2

const AppointmentDetails = () => {
  const { id } = useParams();
  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate(`/appointment/update/${id}`);
  };

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`${API}/appointment/delete/${id}`);
        toast.success("Appointment deleted successfully");
        navigate('/'); // Redirect to the appointments list or another page
      } catch (err) {
        toast.error("Failed to delete appointment");
      }
    }
  };

  useEffect(() => {
    const fetchAppointment = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`${API}/appointment/get/${id}`);
        if (response.data && response.data.data) {
          setAppointment(response.data.data);
        } else {
          throw new Error("Data is null or undefined");
        }
      } catch (err) {
        setError("Failed to fetch appointment details");
        toast.error("Failed to fetch appointment details");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointment();
  }, [id]);

  if (loading) {
    return <div className="text-center py-8 text-lg text-gray-600">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-lg text-red-600">{error}</div>;
  }

  if (!appointment) {
    return <div className="text-center py-8 text-lg text-gray-600">Appointment not found</div>;
  }

  const formattedDate = appointment.date
    ? new Date(appointment.date).toLocaleDateString()
    : "Date not available";
  const formattedParticipants = Array.isArray(appointment.participants)
    ? appointment.participants.join(", ")
    : "No participants";

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-md rounded-lg border border-gray-300">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Appointment Details</h1>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          {appointment.title || "No Title"}
        </h2>
        <p className="text-gray-700 mb-4">
          {appointment.description || "No Description"}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold text-gray-800">Date:</span> {formattedDate}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold text-gray-800">Time:</span>{" "}
          {appointment.time || "No Time"}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold text-gray-800">Location:</span>{" "}
          {appointment.location || "No Location"}
        </p>
        <p className="text-gray-600 mb-4">
          <span className="font-semibold text-gray-800">Participants:</span>{" "}
          {formattedParticipants}
        </p>
      </div>
      <div className="flex gap-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition-colors duration-300"
          onClick={handleUpdate}
        >
          Update Appointment
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition-colors duration-300"
          onClick={handleDelete}
        >
          Delete Appointment
        </button>
      </div>
    </div>
  );
};

export default AppointmentDetails;
