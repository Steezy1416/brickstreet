import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import Nav from './components/Nav';
import Login from './components/Login';
import Footer from './components/Footer';

import Home from './pages/Home';

const httpLink = createHttpLink({
  uri: '/graphql'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Nav></Nav>
          <main>
            <Hero></Hero>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </main>
          <Footer></Footer>
        </div>
      </Router>

    </ApolloProvider>

  )
}

export default App;
