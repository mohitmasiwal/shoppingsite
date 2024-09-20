import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setConpassword] = useState("");

  const handleSubmition = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
    setConpassword("");
  };

  return (
    <div className="signup-container flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-200 to-blue-200">
      <form onSubmit={handleSubmition} className="signup-box bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
        <h1 className="text-3xl font-bold text-center mb-8 text-purple-600">Sign Up</h1>
        <div className="input-container space-y-4">
          <input
            type="text"
            value={name}
            id="name"
            placeholder="Username"
            onChange={(e) => setName(e.target.value)}
            className="input-field w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-150 ease-in-out transform hover:shadow-md"
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-150 ease-in-out transform hover:shadow-md"
          />
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="input-field w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-150 ease-in-out transform hover:shadow-md"
          />
          <input
            type="password"
            id="conpassword"
            value={conpassword}
            placeholder="Confirm Password"
            onChange={(e) => setConpassword(e.target.value)}
            className="input-field w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-150 ease-in-out transform hover:shadow-md"
          />
        </div>
        <button
          className="signup-btn w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 mt-6 rounded-lg transition-colors duration-300 transform hover:scale-105 shadow-md"
          type="submit"
        >
          Sign Up
        </button>
        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-600 hover:underline">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
