import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file for styling
import About from './About';
import HomePage from './HomePage';
import ContactUs from './ContactUs';
import ServicesGallery from './ServicesGallery';

const Home = () => {
  return (
    <Router>
      <div className="home-container">
        <header className="home-header">
          <h1>Welcome to Kings Construction & Remodeling</h1>
          <p>Your trusted partner for all your construction and remodeling needs.</p>
        </header>
        <nav className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={
            <ServicesGallery />
          } />
          <Route path="/contact" element={
            <ContactUs />
          } />
        </Routes>
        <footer>
          <p>&copy; 2023 Kings Construction & Remodeling. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default Home;
