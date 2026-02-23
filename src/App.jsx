import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Nav';
import Lenis from 'lenis';
import Coffees from './Components/Coffees'
import About from './Components/About'
import CoffeeJourney from './Components/CoffeeJourney';
import Chikmagalur from './Pages/Chikmagalur'
import Wayanad from './Pages/Wayanad'
import Coorg from './Pages/Coorg'
import Farms from './Components/Farms'
import Footer from './Components/Footer'
import Aboutus from './Pages/Aboutus';

function Home() {
  return (
    <div className="app-container">
      <Navbar />
      <Coffees />
      <About />
      <CoffeeJourney />
      <Farms />
      <Footer />
      
    </div>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <Routes>
        {/* 🏠 Home route */}
        <Route path="/" element={<Home />} />
        <Route path="/chikmagalur" element={<Chikmagalur />} />
        <Route path="/coorg" element={<Coorg />} />
        <Route path="/wayanad" element={<Wayanad />} />
        <Route path="/about" element={<Aboutus />} />
      </Routes>
    </Router>
  );
}


export default App
