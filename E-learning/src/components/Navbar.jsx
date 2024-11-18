import React from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "./index.js";
import logo from "../assets/logo.png"

function Navbar() {
  const { pathname } = useLocation();

  return (
    <div className="sticky z-[999] top-0">
      <header className="p-4 bg-orange-500 rounded " />
      <div className="flex py-4 items-center justify-between px-20 bg-slate-100">
        <div className="flex items-center ">
          <Link to="/" className="p-2 bg-orange-500 rounded mr-4">
           <img src={logo} alt="Logo" className="w-6 h-6" />
          </Link>
          {navLinks.map((item) => {
            const isActive = pathname === item.path;
            
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`rounded py-2 px-4 ${isActive ? "bg-slate-200" : "hover:bg-slate-100"}`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="space-x-4">
          <Link>Sign Up</Link>
          <Link className="px-4 py-2 bg-orange-500 rounded-md text-white">
            Login
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
