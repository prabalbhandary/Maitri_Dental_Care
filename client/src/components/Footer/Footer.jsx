import React from "react";
import { FaGithub, FaDiscord, FaTwitter, FaFacebookF, FaDribbble } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-3xl font-bold">Maitri Dental Care</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h2 className="text-lg font-semibold mb-4">Resources</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="hover:underline">Flowbite</Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">Tailwind CSS</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Follow us</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Github</Link>
                </li>
                <li>
                  <Link to="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Legal</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="hover:underline">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">Terms &amp; Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-gray-700 mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <span className="text-sm text-gray-400">
            Copyright &copy; {currentYear} Maitri Dental Care. All Rights Reserved.
          </span>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="https://facebook.com" target="_blank" className="text-gray-400 hover:text-white">
              <FaFacebookF className="w-5 h-5" />
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link to="https://discord.com" target="_blank" className="text-gray-400 hover:text-white">
              <FaDiscord className="w-5 h-5" />
              <span className="sr-only">Discord community</span>
            </Link>
            <Link to="https://x.com" target="_blank" className="text-gray-400 hover:text-white">
              <FaTwitter className="w-5 h-5" />
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link to="https://github.com" target="_blank" className="text-gray-400 hover:text-white">
              <FaGithub className="w-5 h-5" />
              <span className="sr-only">GitHub account</span>
            </Link>
            <Link to="https://dribbble.com" target="_blank" className="text-gray-400 hover:text-white">
              <FaDribbble className="w-5 h-5" />
              <span className="sr-only">Dribbble account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
