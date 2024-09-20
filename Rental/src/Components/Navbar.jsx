import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch("");
  };

  return (
    <nav className="bg-gray-900 text-white py-4 shadow-lg">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
        {/* Logo */}
        <div>
          <Link
            to="/home"
            className="text-3xl font-bold text-white tracking-wide hover:text-gray-400 transition-colors duration-200"
          >
            Rentify
          </Link>
        </div>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex items-center bg-gray-800 rounded-full px-3 py-1 ml-4 w-96"
        >
          <input
            type="text"
            placeholder="Search for products..."
            value={search}
            onChange={handleChange}
            className="bg-gray-800 w-full h-10 px-4 text-gray-200 rounded-full outline-none border-none placeholder-gray-400"
          />
          <button
            className="bg-indigo-600 text-white py-2 px-4 ml-2 rounded-full hover:bg-indigo-700 transition-all duration-200"
            type="submit"
          >
            Search
          </button>
        </form>

        {/* Right-side options */}
        <div className="flex items-center space-x-8">
          <Link
            className="text-lg text-gray-200 hover:text-indigo-400 transition-colors duration-200"
            to="/home"
          >
            Home
          </Link>
          <Link
            className="text-lg text-gray-200 hover:text-indigo-400 transition-colors duration-200"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="text-lg text-gray-200 hover:text-indigo-400 transition-colors duration-200"
            to="/signup"
          >
            Sign Up
          </Link>
          <Link
            className="text-lg text-gray-200 hover:text-indigo-400 transition-colors duration-200 flex items-center"
            to="/wishlist"
          >
            <i className="fa-regular fa-heart mr-1"></i>
            Wishlist
          </Link>
          <Link
            className="text-lg text-gray-200 hover:text-indigo-400 transition-colors duration-200 flex items-center"
            to="/cart"
          >
            <i className="fa-solid fa-cart-shopping mr-1"></i>
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
