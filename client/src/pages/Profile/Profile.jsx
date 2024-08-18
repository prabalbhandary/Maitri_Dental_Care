import React from 'react';

const Profile = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Profile Header */}
        <div className="flex items-center space-x-6">
          <img
            src="/path-to-profile-picture.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-indigo-600"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Jane Doe</h1>
            <p className="mt-1 text-gray-600">jane.doe@example.com</p>
            <p className="mt-1 text-gray-600">+1 (234) 567-890</p>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800">About Me</h2>
          <p className="mt-2 text-gray-600">
            Passionate software engineer with over 10 years of experience in building scalable web applications. Skilled in React, Node.js, and various other technologies. Enjoys collaborating with teams and contributing to innovative projects.
          </p>
        </div>

        {/* Address Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800">Address</h2>
          <p className="mt-2 text-gray-600">1234 Elm Street, Springfield, IL 62704</p>
        </div>

        {/* Social Links Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800">Social Links</h2>
          <div className="mt-2 flex space-x-4">
            <a href="https://twitter.com/janedoe" className="text-blue-500 hover:underline">
              Twitter
            </a>
            <a href="https://linkedin.com/in/janedoe" className="text-blue-700 hover:underline">
              LinkedIn
            </a>
            <a href="https://github.com/janedoe" className="text-gray-900 hover:underline">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
