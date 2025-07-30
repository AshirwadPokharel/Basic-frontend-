import React, { useState } from 'react';

function Electric({ searchTerm }) {
  const electricCars = [
    {
      title: "Electric",
      description: "Electric sedan with advanced features.",
      image: "car11.webp",
    },
    {
      title: "Safe",
      description: "Hybrid sports car with futuristic design.",
      image: "car12.webp",
    },
    {
      title: "Sound",
      description: "Luxury electric with impressive performance.",
      image: "car13.webp",
    },
    {
      title: "Comfortable",
      description: "All-electric car with luxury features.",
      image: "car14.webp",
    },
    {
      title: "Quality",
      description: "Electric car that delivers thrilling performance.",
      image: "car15.webp",
    }
  ];

  // Filter the electric cars based on the searchTerm
  const filteredCars = electricCars.filter(car =>
    car.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="electric" className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Electric Cars</h2>

      {/* Electric Cars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCars.length > 0 ? (
          filteredCars.map((car, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={car.image}
                alt={car.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">{car.title}</h3>
                <p className="text-gray-600 mt-2">{car.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-xl text-gray-600">No electric cars match your search.</p>
        )}
      </div>
    </div>
  );
}

export default Electric;
