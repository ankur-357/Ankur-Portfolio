import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-12 py-[20px] h-16">
      {/* Logo */}
      <img src={logo} alt="Logo" className="h-8 w-48 cursor-pointer" />

      {/* Navigation Links */}
      <ul className="flex items-center list-none gap-[50px] text-xl text-white">
        <li className="cursor-pointer hover:text-gray-300 transition">Home</li>
        <li className="cursor-pointer hover:text-gray-300 transition">About Me</li>
        <li className="cursor-pointer hover:text-gray-300 transition">Social Sites</li>
        <li className="cursor-pointer hover:text-gray-300 transition">Portfolio</li>
        <li className="cursor-pointer hover:text-gray-300 transition">Contact</li>
      </ul>

      {/* Connect Button */}
      <button
        className="nav-connect"
      >
        Connect With Me
      </button>
    </nav>
  );
};

export default Navbar;
