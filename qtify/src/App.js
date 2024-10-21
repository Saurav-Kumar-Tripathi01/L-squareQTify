// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <div className="content">
        <h2>Top Albums</h2>
        {/* <!-- Add more sections as per your design --> */}
      </div>
    </div>
  );
}

export default App;
