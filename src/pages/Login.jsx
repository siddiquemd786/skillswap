// src/pages/Login.jsx
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/layout/AuthContext";


const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!form.email.trim()) return setError("Please enter your email.");
    if (!form.password) return setError("Please enter your password.");

    setLoading(true);
    try {
      await loginUser(form.email, form.password);
      setSuccess("Logged in successfully. Redirecting...");
      setTimeout(() => navigate("/"), 700);
    } catch (err) {
      setError(err?.message || "Login failed. Check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Welcome Back</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={onChange}
              type="email"
              placeholder="you@example.com"
              className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200 outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              name="password"
              value={form.password}
              onChange={onChange}
              type="password"
              placeholder="••••••••"
              className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200 outline-none"
            />
          </div>

          {error && <div className="mb-4 text-sm text-red-600">{error}</div>}
          {success && <div className="mb-4 text-sm text-green-600">{success}</div>}

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${loading ? "bg-blue-300" : "bg-blue-600 hover:bg-blue-700"} text-white rounded-lg py-2 font-semibold transition`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">
            Don’t have an account?{" "}
            <span className="text-blue-600 cursor-pointer">Register</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
