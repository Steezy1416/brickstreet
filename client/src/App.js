import React from 'react';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Login from './components/Login';
import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import for pages
import About from './pages/About.js';
import NoMatch from './pages/NoMatch';


function App() {
  return (
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Nav />
          <div className="container">
            <Routes>
              <Route 
                path="/about" 
                element={<About/>} 
              />
              <Route 
                path="*" 
                element={<Hero/>} 
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
  )
}

export default App;
