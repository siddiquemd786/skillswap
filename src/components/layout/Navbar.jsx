// src/components/layout/Navbar.jsx
import React from "react";

const Navbar = () => {
  const user = true; 

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
       
        <div className="text-2xl font-bold text-blue-600 cursor-pointer">
          SkillTrade
        </div>

       
        <div className="flex items-center gap-6">
          <p className="cursor-pointer hover:text-blue-500">Home</p>
          <p className="cursor-pointer hover:text-blue-500">My Profile</p>
        </div>

   
        <div className="flex items-center gap-4">
          {user ? (
            <>
            
              <div className="relative group">
                <img
                  src="https://i.ibb.co/2y8zvCt/user.png"
                  alt="avatar"
                  className="w-10 h-10 rounded-full border cursor-pointer"
                />
                <span className="absolute left-1/2 -translate-x-1/2 top-12 
                  bg-gray-800 text-white text-sm px-2 py-1 rounded-md 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  John Doe
                </span>
              </div>

         
              <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
                Logout
              </button>
            </>
          ) : (
            <>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                Login
              </button>
              <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-50 transition">
                Signup
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
