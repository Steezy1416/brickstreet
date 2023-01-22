import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import Nav from './components/Nav';
import Login from './components/Login';
import Footer from './components/Footer';

import Home from './pages/Home';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import SinglePost from './pages/SinglePost';


function App() {
  return (

    <Router>
      <div>
        <Nav></Nav>

        <main>
          <Routes>
            <Route path='/' element={<Landing />} />

            <Route path='/home' element={<Home />}>
              <Route path=':categoryName' element={<Home />} />
            </Route>

            <Route path='/profile/:id' element={<Profile />} />
            {/* <Route path='/user/:userId/post/:postId' element={<SinglePost />} /> */}
            <Route path='/post/:id' element={<SinglePost />} />

          </Routes>
        </main>
        <Footer></Footer>
      </div>
    </Router>
  )
}

export default App;
