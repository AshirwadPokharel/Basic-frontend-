import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Electric from './Electric';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');  // Search term state

  return (
    <div>
    
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      {/* Pass the search term to Home and Electric */}
      <Home searchTerm={searchTerm} />
      <Electric searchTerm={searchTerm} />
      <About/>
<Contact/>
      <Footer />
    </div>
  );
}
