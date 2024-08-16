import React, { useState } from 'react';
import Logo from '../../assets/doctor.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { MdOutlineClose } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/authSlice/authSlice';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, username } = useSelector((state) => state.auth);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleLogout = () => {
    dispatch(logout());
    setIsDropdownOpen(false);
    navigate('/login');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Maitri Dental Care
          </span>
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={toggleMenu}
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          {!isOpen ? <FaBars /> : <MdOutlineClose />}
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${isActive("/") ? "text-blue-700 bg-blue-700 md:text-blue-700 md:bg-transparent dark:text-blue-500" : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"}`}
                aria-current={isActive("/") ? "page" : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${isActive("/about") ? "text-blue-700 bg-blue-700 md:text-blue-700 md:bg-transparent dark:text-blue-500" : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"}`}
                aria-current={isActive("/about") ? "page" : undefined}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/appointments"
                className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${isActive("/services") ? "text-blue-700 bg-blue-700 md:text-blue-700 md:bg-transparent dark:text-blue-500" : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"}`}
                aria-current={isActive("/services") ? "page" : undefined}
              >
                Appointments
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${isActive("/contact") ? "text-blue-700 bg-blue-700 md:text-blue-700 md:bg-transparent dark:text-blue-500" : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"}`}
                aria-current={isActive("/contact") ? "page" : undefined}
              >
                Contact
              </Link>
            </li>
            {isAuthenticated ? (
              <li className="relative">
                <button
                  onClick={toggleDropdown}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {username}
                </button>
                {isDropdownOpen && (
                  <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-700">
                    <li>
                      <Link className="block w-full py-2 px-4 text-gray-900 text-center hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" to='/profile'>Profile</Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="block w-full py-2 px-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${isActive("/login") ? "text-blue-700 bg-blue-700 md:text-blue-700 md:bg-transparent dark:text-blue-500" : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"}`}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${isActive("/register") ? "text-blue-700 bg-blue-700 md:text-blue-700 md:bg-transparent dark:text-blue-500" : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"}`}
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
