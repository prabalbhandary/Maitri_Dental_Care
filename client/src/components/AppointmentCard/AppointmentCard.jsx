import React from 'react';
import { Link } from 'react-router-dom';

const AppointmentCard = ({ appointment }) => {
  if (!appointment) return null;
  const { _id, title, description, date, time, location, participants } = appointment;

  return (
    <Link
      to={`/appointment/${_id}`}
      className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out p-6 mb-6 flex flex-col justify-between"
    >
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-gray-700 mb-5">{description}</p>
      </div>
      <div className="flex flex-col space-y-2 mt-4">
        <p className="text-gray-600 text-sm">
          <span className="font-medium text-gray-800">Date:</span> {new Date(date).toLocaleDateString()}
        </p>
        <p className="text-gray-600 text-sm">
          <span className="font-medium text-gray-800">Time:</span> {time}
        </p>
        <p className="text-gray-600 text-sm">
          <span className="font-medium text-gray-800">Location:</span> {location}
        </p>
        <p className="text-gray-600 text-sm">
          <span className="font-medium text-gray-800">Participants:</span> {participants.join(", ")}
        </p>
      </div>
    </Link>
  );
};

export default AppointmentCard;
