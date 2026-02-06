import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Nav';
import Lenis from 'lenis';
import Coffees from './Components/Coffees'
import About from './Components/About'

function Home() {
  return (
    <div className="app-container">
      <Navbar />
      <Coffees />
      <About />
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
      </Routes>
    </Router>
  );
}


export default App
