import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';



import Login from './pages/Login';
import Signup from './pages/Register';
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import UserDashboard from './pages/UserDashboard'
import Nav from './components/Nav';
import Footer from './components/Footer';


const httpLink = createHttpLink({
    uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div className="flex-column justify-flex-start min-100-vh">
                    <Nav />
                    <div className="container">
                        <Routes>
                            <Route
                                path="/"
                                element={<Home />}
                            />
                            <Route
                                path="/login"
                                element={<Login />}
                            />
                            <Route
                                path="/register"
                                element={<Signup />}
                            />
                            <Route
                                path="/About"
                                element={<About />}
                            />
                            <Route
                                path="/Products"
                                element={<Products />}
                            />
                            <Route
                                path="/FAQ"
                                element={<FAQ />}
                            />
                            <Route
                                path="/Contact"
                                element={<Contact />}
                            />
                            <Route
                                path="/UserDashboard"
                                element={<UserDashboard />}
                            />
                            {/* <Route
                                path="*"
                                element={<NoMatch />}
                            /> */}
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;