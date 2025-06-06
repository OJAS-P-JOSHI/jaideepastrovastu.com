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
import SiteVastuVisits from './components/SiteVastuVisits/SiteVastuVisits'; // Import the new component
import News from './components/News/News';
import About from './components/About/About';
import { SpeedInsights } from '@vercel/speed-insights/react'; // Import SpeedInsights
import PrivacyPolicy from './components/Legal/PrivacyPolicy';
import TermsAndConditions from './components/Legal/TermsAndConditions';
import RefundPolicy from './components/Legal/RefundPolicy';
import ShippingAndDelivery from './components/Legal/ShippingAndDelivery';
import ContactUs from './components/Legal/ContactUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <Intro />
            <About />
            <Services />
            <SiteVastuVisits />
            <Experience />
            <Portfolio />
            <News />
          </>} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/pooja-gallery" element={<PoojaGallery />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact-now" element={<ContactNow />} />
          <Route path="/admin/*" element={<Admin />} /> 
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/shipping-and-delivery" element={<ShippingAndDelivery />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
        <SpeedInsights />
      </div>
    </Router>
  );
}

export default App;
