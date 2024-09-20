import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function SubCategories() {
  const [items, setItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        setItems(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchData();
  }, []);

  const images = [
    "https://images.pexels.com/photos/3657429/pexels-photo-3657429.jpeg",
    "https://images.pexels.com/photos/6490573/pexels-photo-6490573.jpeg",
    "https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg",
    "https://images.pexels.com/photos/3775135/pexels-photo-3775135.jpeg",
    "https://images.pexels.com/photos/6490583/pexels-photo-6490583.jpeg",
    "https://images.pexels.com/photos/3755746/pexels-photo-3755746.jpeg",
    "https://images.pexels.com/photos/8496947/pexels-photo-8496947.jpeg",
    "https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg",
    "https://images.pexels.com/photos/3738085/pexels-photo-3738085.jpeg",
    "https://images.pexels.com/photos/6303590/pexels-photo-6303590.jpeg",
    "https://images.pexels.com/photos/1056535/pexels-photo-1056535.jpeg",
    "https://images.pexels.com/photos/4515110/pexels-photo-4515110.jpeg",
    "https://images.pexels.com/photos/3775554/pexels-photo-3775554.jpeg",
    "https://images.pexels.com/photos/5721901/pexels-photo-5721901.jpeg",
    "https://images.pexels.com/photos/3672100/pexels-photo-3672100.jpeg",
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 2 : prevIndex - 2
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex >= images.length - 2 ? 0 : prevIndex + 2
    );
  };

  return (
    <div>
      {/* Category Links */}
      <div className="bg-gray-800 p-5 shadow-lg">
        <div className="flex justify-center space-x-8">
          <Link className="text-gray-200 text-lg font-semibold no-underline hover:text-white transition-colors duration-300 py-2" to="/clothes">Clothes</Link>
          <Link className="text-gray-200 text-lg font-semibold no-underline hover:text-white transition-colors duration-300 py-2" to="/grocery">Grocery</Link>
          <Link className="text-gray-200 text-lg font-semibold no-underline hover:text-white transition-colors duration-300 py-2" to="/accessories">Accessories</Link>
          <Link className="text-gray-200 text-lg font-semibold no-underline hover:text-white transition-colors duration-300 py-2" to="/shoes">Shoes</Link>
          <Link className="text-gray-200 text-lg font-semibold no-underline hover:text-white transition-colors duration-300 py-2" to="/child">Child Section</Link>
        </div>
      </div>

      {/* Carousel displaying two images */}
      <div className="relative w-full h-full mt-5">
        <div className="flex justify-center space-x-4">
          <img
            src={images[activeIndex]}
            className="w-1/2 h-[80vh] rounded-lg bg-gray-200 object-cover transition-all duration-500"
            alt={`Carousel ${activeIndex + 1}`}
          />
          <img
            src={images[(activeIndex + 1) % images.length]}
            className="w-1/2 h-[80vh] rounded-lg bg-gray-200 object-cover transition-all duration-500"
            alt={`Carousel ${activeIndex + 2}`}
          />
        </div>

        {/* Next and Prev Buttons using icons */}
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full px-4 flex justify-between">
          <button
            className="bg-gray-200 rounded-full h-12 w-12 flex justify-center items-center cursor-pointer transition-all hover:bg-gray-300"
            onClick={handlePrev}
          >
            <FaArrowLeft className="text-black" />
          </button>
          <button
            className="bg-gray-200 rounded-full h-12 w-12 flex justify-center items-center cursor-pointer transition-all hover:bg-gray-300"
            onClick={handleNext}
          >
            <FaArrowRight className="text-black" />
          </button>
        </div>
      </div>

      {/* Item Grid */}
      <div className="bg-gray-300 p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white p-4 shadow rounded hover:shadow-lg transition-shadow duration-300">
            <img
              src={item.image}
              alt={item.title}
              className="h-72 w-full object-cover mb-4 rounded-lg"
            />
            <div className="text-xl font-bold">{item.title}</div>
            <div className="text-lg">${item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubCategories;
