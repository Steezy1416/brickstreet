import React from 'react';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
      <Hero></Hero>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App;
