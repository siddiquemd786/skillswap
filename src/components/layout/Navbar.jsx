// src/components/layout/Navbar.jsx
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import logo from "../../assets/logo.png"

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => console.log("User logged out"))
      .catch((err) => console.error(err));
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex  justify-between  md:flex-row md:items-center md:justify-between">
        
      
        <div className="flex justify-start gap-1 items-center mb-2 md:mb-0">
          
          <img className="w-10 h-10 rounded-full" src={logo} alt="" />
          <Link to="/" className="text-2xl font-bold text-blue-600">
            SkillTrade
          </Link>
        </div>

       
        <div className="hidden md:flex justify-center items-center gap-6 flex-1">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/profile" className="hover:text-blue-500">My Profile</Link>
         
        </div>

       
        <div className="flex justify-end items-center gap-4">
         
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

        
          <div className="hidden md:flex md:items-center gap-4">
            {user ? (
              <>
                <div className="relative group">
                  <img
                    src={user.photoURL || "https://i.ibb.co/2y8zvCt/user.png"}
                    alt="avatar"
                    className="w-10 h-10 rounded-full border cursor-pointer"
                  />
                  <span className="absolute left-1/2 -translate-x-1/2 top-12 bg-gray-800 text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {user.displayName || "User"}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-50 transition"
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden flex flex-col items-start px-2 gap-4 bg-white shadow-md w-full py-4">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-blue-500">Home</Link>
          <Link to="/profile" onClick={() => setIsOpen(false)} className="hover:text-blue-500">My Profile</Link>
          {user ? (
            <button
              onClick={() => { handleLogout(); setIsOpen(false); }}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" onClick={() => setIsOpen(false)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                Login
              </Link>
              <Link to="/register" onClick={() => setIsOpen(false)} className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-50 transition">
                Signup
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
