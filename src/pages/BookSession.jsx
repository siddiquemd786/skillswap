// src/pages/BookSession.jsx
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../components/layout/AuthContext";
import Loading from "../components/home/Loading";




const BookSession = () => {

const { loading } = useContext(AuthContext);

    if(loading){
    return <Loading></Loading> }

  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      toast.error("Please fill out all fields!");
      return;
    }

   
    toast.success("Session booked successfully!");

  
    setName("");
    setEmail("");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 mt-24 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Book Session</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-2 rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-2 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Book Session
        </button>
      </form>
    </div>
  );
};

export default BookSession;
