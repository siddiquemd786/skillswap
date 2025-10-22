// src/components/layout/Navbar.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => console.log("User logged out"))
      .catch((err) => console.error(err));
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          SkillTrade
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/profile" className="hover:text-blue-500">My Profile</Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              {/* Avatar */}
              <div className="relative group">
                <img
                  src={user.photoURL || "https://i.ibb.co/2y8zvCt/user.png"}
                  alt="avatar"
                  className="w-10 h-10 rounded-full border cursor-pointer"
                />
                <span className="absolute left-1/2 -translate-x-1/2 top-12 
                  bg-gray-800 text-white text-sm px-2 py-1 rounded-md 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {user.displayName || "User"}
                </span>
              </div>

              {/* Logout Button */}
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
    </nav>
  );
};

export default Navbar;
