import React from 'react';

function Home({ searchTerm }) {
  const items = [
    { name: 'Suzuki', description: 'Sedan with advanced features', imgSrc: 'car1.webp' },
    { name: 'Baleno', description: 'Hybrid car with futuristic design', imgSrc: 'car2.webp' },
    { name: 'Nano', description: 'Small with impressive performance', imgSrc: 'car3.webp' },
    { name: 'Suzuki', description: 'Advanced and jungli', imgSrc: 'car4.webp' },
    { name: 'Scorpio', description: 'Bold and thrilling performance', imgSrc: 'car5.webp' },
    { name: 'Creta', description: 'Affordable car with long-range capability', imgSrc: 'car6.webp' },
    { name: 'Nissan Leaf', description: 'Compact and eco-friendly vehicle', imgSrc: 'car7.webp' },
    { name: 'Air-ev', description: 'Luxury electric with advanced features', imgSrc: 'car8.webp' },
    { name: 'Hiace', description: 'Pickup Hiace with rugged design', imgSrc: 'car9.webp' },
    { name: 'Land Cruiser', description: 'Luxury features and long range', imgSrc: 'car10.webp' },
  ];
  
  
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Featured Cars</h2>

  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={item.imgSrc}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-xl text-gray-600">No results found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
