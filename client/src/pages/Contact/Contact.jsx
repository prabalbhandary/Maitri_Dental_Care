import React from 'react';

const Contact = () => {
  const handleClick = (e) => {
    e.preventDefault()
  }
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900">Contact Us</h1>
        <p className="mt-2 text-lg text-gray-600">
          We would love to hear from you. Fill out the form below, or reach out to us through the contact details provided.
        </p>

        <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
          <form action="#" method="POST" className="mt-4 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              ></textarea>
            </div>
            <div>
              <button
                type="button"
                className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={handleClick}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="mt-12 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-gray-800">Contact Information</h2>
          <div className="mt-4 text-center text-gray-600">
            <p className="text-lg">Email: <a href="mailto:info@example.com" className="text-indigo-600 hover:underline">info@example.com</a></p>
            <p className="text-lg">Phone: <a href="tel:+1234567890" className="text-indigo-600 hover:underline">+1 (234) 567-890</a></p>
            <p className="text-lg">Address: 123 Example St, City, Country</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
