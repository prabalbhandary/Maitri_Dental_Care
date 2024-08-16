import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Services from "./pages/Services/Services";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import Footer from './components/Footer/Footer';
import AppointmentDetails from "./pages/AppointmentDetails/AppointmentDetails";
import Update from "./pages/Update/Update";
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16 mb-[9rem] pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointments" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/appointment/:id" element={<AppointmentDetails />} />
          <Route path="/appointment/update/:_id" element={<Update /> } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
