// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar'; // Assuming you have a Navbar component
import HomePage from './components/HomePage/HomePage';
import Shop from './pages/Shop/Shop'; // Your Shop page component
import About from './pages/About/About'; // Your About page component
import Home from './pages/Home/Home'; // Your Home page component
import RegistrationPage from './components/RegistrationPage/RegistrationPage';
import LoginPage from './components/LoginPage/LoginPage';
import './App.css'; // Global CSS (if needed)

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar /> {/* Include the Navbar here */}
        
        <div className="content">
          {/* Routes for different pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>

        <Footer /> {/* Footer displayed at the bottom */}
      </div>
    </Router>
  );
};

export default App;
