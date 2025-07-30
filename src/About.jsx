import React from 'react';

function About() {
  return (
    <div id="about" className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">About Carshop</h2>

      {/* About Content */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-900">Invented by Ashirwad Pokharel</h3>
        <p className="text-gray-600 mt-2">
          Carshop is an innovative platform created by Ashirwad Pokharel with the aim of showcasing a variety of cars, specifically for the people of Nepal. 
          This platform was developed to make it easier for people in Nepal to view, learn about, and explore various car options, whether they are commonly used or just of interest to car enthusiasts.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mt-6">Purpose</h3>
        <p className="text-gray-600 mt-2">
          Carshop was built with a focus on providing a simple and user-friendly experience. It aims to help people in Nepal make informed decisions about cars, whether they're looking for an affordable vehicle, a luxury car, or an electric vehicle.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mt-6">Context in Nepal</h3>
        <p className="text-gray-600 mt-2">
          In Nepal, cars are not only a mode of transportation but also a significant part of people's daily lives. With a variety of options available, people often struggle to find the right information and make the right choices. Carshop bridges this gap by providing an easy-to-use platform where people can access detailed information about various car models.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mt-6">A New Way to Explore Cars</h3>
        <p className="text-gray-600 mt-2">
          Whether you're looking for a fuel-efficient vehicle, an electric car, or simply curious about different models, Carshop helps you explore various options in one place. It’s a convenient platform for learning about cars that are popular and commonly used in Nepal.
        </p>
      </div>
    </div>
  );
}

export default About;

