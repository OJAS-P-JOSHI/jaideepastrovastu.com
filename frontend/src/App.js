/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Servicesz';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';
import PoojaGallery from './components/PoojaGallery/PoojaGallery';
import ServicesPage from './components/ServicesPage/ServicesPage';
import ContactNow from './components/ContactNow/ContactNow';
import Admin from './components/Admin/Admin'; // Import the Admin component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <Intro />
            <Services />
            <Experience />
            <Portfolio />
          </>} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/pooja-gallery" element={<PoojaGallery />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact-now" element={<ContactNow />} />
          <Route path="/admin/*" element={<Admin />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
