// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import HomePage from './components/HomePage';
import DesktopPage from './components/Desktop';
import LaptopPage from './components/Laptop';
import Mac from './components/Mac';
import Accessories from './components/Accessories';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/product/:type/:id" element={<ProductDetail />} />
          <Route path="/desktop" element={<DesktopPage />} />
          <Route path="/laptop" element={<LaptopPage />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/accessories" element={<Accessories />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
