// src/pages/Login.jsx
import React, { useState, useContext } from "react";


import { Link, useNavigate } from "react-router";
import { AuthContext } from "../components/layout/AuthContext";

const Login = () => {
  const { loginUser, resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    if (!form.email || !form.password) {
      setMessage({ type: "error", text: "Please enter both email and password" });
      return;
    }

    setLoading(true);
    try {
      await loginUser(form.email, form.password);
      setMessage({ type: "success", text: "Login successful! Redirecting..." });
      setTimeout(() => navigate("/"), 1000);
    } catch {
      setMessage({ type: "error", text: "Invalid email or password" });
    } finally {
      setLoading(false);
    }
  };


  const handleForgotPassword = async () => {
    if (!form.email) {
      setMessage({ type: "error", text: "Please enter your email first." });
      return;
    }

    try {
      await resetPassword(form.email);
      setMessage({
        type: "success",
        text: "Password reset email sent! Please check your inbox.",
      });
    } catch (err) {
      setMessage({ type: "error", text: err.message });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
       
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
          Login
        </h2>

       
        <form onSubmit={handleSubmit}>
        
          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200 outline-none"
            />
          </div>

         
          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200 outline-none"
            />
          </div>

         
          <div className="flex justify-end mb-4">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

        
          {message.text && (
            <p
              className={`text-sm mb-3 ${
                message.type === "error" ? "text-red-600" : "text-green-600"
              }`}
            >
              {message.text}
            </p>
          )}

        
          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? "bg-blue-300" : "bg-blue-600 hover:bg-blue-700"
            } text-white rounded-lg py-2 font-semibold transition`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          
          <p className="text-center text-sm text-gray-500 mt-4">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
