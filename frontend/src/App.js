import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonial';
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';
import PoojaGallery from './components/PoojaGallery/PoojaGallery';
import ServicesPage from './components/ServicesPage/ServicesPage';
import ContactNow from './components/ContactNow/ContactNow'; // Import the new ContactNow component
import './App.css';
import { themeContext } from './Context';

function App() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <Router>
            <div className={`App ${darkMode ? 'dark' : ''}`}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<>
                        <Intro />
                        <Services />
                        <Experience />
                        <Portfolio />
                        <Testimonials />
                    </>} />
                    <Route path="/blogs" element={<Blog />} />
                    <Route path="/pooja-gallery" element={<PoojaGallery />} />
                    <Route path="/service" element={<ServicesPage />} />
                    <Route path="/contact-now" element={<ContactNow />} /> {/* Add the new route */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
