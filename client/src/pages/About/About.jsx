import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">About Us</h1>
          <p className="mt-2 text-lg text-gray-600">
            Learn more about our journey, mission, and the people behind our success.
          </p>
        </div>

        {/* Mission Statement Section */}
        <div className="mt-12 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
          <p className="mt-4 text-gray-600">
            Our mission is to provide exceptional service and create innovative solutions that exceed our clients' expectations.
          </p>
        </div>

        {/* History Section */}
        <div className="mt-12 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-bold text-gray-800">Our History</h2>
          <p className="mt-4 text-gray-600">
            Founded in 2020, our company started with a vision to make a positive impact in the industry. Over the years, we have grown and evolved, driven by our commitment to excellence and customer satisfaction.
          </p>
        </div>

        {/* Team Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Meet the Team</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img src="/path-to-image.jpg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Jane Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
              <p className="mt-2">Jane has over 20 years of experience in the industry and is passionate about innovation and leadership.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img src="/path-to-image.jpg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">John Smith</h3>
              <p className="text-gray-600">CTO</p>
              <p className="mt-2">John leads our technology department with a focus on cutting-edge solutions and continuous improvement.</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
