import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AppointmentCard from '../../components/AppointmentCard/AppointmentCard';
import { API } from '../../API/API';
import { toast } from 'react-toastify';

const Home = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API}/appointment/getAll`);
        if (response.data.success && Array.isArray(response.data.data)) {
          setAppointments(response.data.data);
        } else {
          throw new Error('Unexpected API response format');
        }
      } catch (error) {
        toast.error(error.message || 'An error occurred');
        setError(error.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen text-lg text-gray-600">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen text-lg text-red-600">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-800">Appointments</h1>
      <div className="container mx-auto flex flex-wrap gap-6">
        {appointments.length > 0 ? (
          appointments.map((appointment) => (
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4" key={appointment._id}>
              <AppointmentCard appointment={appointment} />
            </div>
          ))
        ) : (
          <div className="w-full flex justify-center">
            <p className="text-lg text-gray-600">No appointments found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
