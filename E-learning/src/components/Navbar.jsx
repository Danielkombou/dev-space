import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "./index.js";
import logo from "../assets/logo.svg";
import { Menu, X } from "lucide-react";

const NavbarRoutes = () => {
  const { pathname } = useLocation();
  return (
    <div className="hidden lg:flex items-center ">
          {navLinks.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`rounded py-2 px-4 ${
                  isActive ? "bg-slate-200" : "hover:bg-slate-100"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky z-[999] top-0 p-4 bg-slate-100">
      <header className="p-4 bg-orange-500 rounded" />
      {/* destop navbar */}
      <div className="flex py-4 items-center justify-between px-20 ">
        {/* logo */}
        <Link to="/" className="p-2 bg-orange-500 rounded mr-4">
          <img src={logo} alt="Logo" className="w-6 h-6" />
        </Link>
        {/* nav links */}
        <div>
          <NavbarRoutes />
        </div>
        <div className="hidden lg:block space-x-4">
          <Link>Sign Up</Link>
          <Link className="px-4 py-2 bg-orange-500 rounded-md text-white">
            Login
          </Link>
        </div>
        {/* mobile nav button */}
        <button onClick={toggleMenu} className="lg:hidden z-[999]">
          {isOpen ? null : <Menu />}
        </button>
        {/* mobile navbar */}
        <div
        className={`fixed inset-0 z-[998] bg-black/70 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative w-2/3 bg-white h-full p-6 shadow-md">
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Mobile Links */}
          <nav className="flex flex-col space-y-6 mt-12">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={toggleMenu}
                className="text-gray-700 text-lg font-medium hover:text-orange-500"
              >
                {item.name}
              </Link>
            ))}

            {/* Action Buttons */}
            <Link
              to="/signup"
              onClick={toggleMenu}
              className="block py-2 px-4 text-center bg-orange-500 text-white rounded-md hover:bg-orange-600"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              onClick={toggleMenu}
              className="block py-2 px-4 text-center border border-orange-500 text-orange-500 rounded-md hover:bg-orange-500 hover:text-white"
            >
              Login
            </Link>
          </nav>
        </div>
      </div>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
