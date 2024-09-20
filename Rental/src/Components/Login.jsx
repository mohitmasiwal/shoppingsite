import { React, useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 to-purple-200">
      <form onSubmit={handleLogin} className="login-box bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Log In</h1>
        <div className="input-container space-y-4">
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out transform hover:shadow-md"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out transform hover:shadow-md"
          />
        </div>
        <button
          className="login-btn w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 mt-6 rounded-lg transition-colors duration-300 transform hover:scale-105 shadow-md"
          type="submit"
        >
          Log in
        </button>
        <div className="account text-center mt-4 text-gray-600">
          <h3>Don't have an account?</h3>
          <Link to="/signup" className="text-blue-600 hover:underline">
            <h4>Create new account</h4>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
