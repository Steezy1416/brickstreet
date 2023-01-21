// JT
import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Signup from './pages/Register';
import Home from './pages/Home';
import About from './pages/About';
import Post from './pages/Post'
import AddPost from './pages/AddPost.js';
// import FAQ from './pages/FAQ';
// import Contact from './pages/Contact';
import UserDashboard from './pages/UserDashboard';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Login from './components/Login';
import MessagePage from './components/MessagePage';
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
                <div>
                    <Nav />
                    <div className="container">
                        <Routes>
                            <Route
                                path="/"
                                element={<Hero />}
                            />
                            <Route
                                path="/home"
                                element={<Home />}
                            />
                            <Route
                                path="/about"
                                element={<About />}
                            />
                            <Route
                                path="/messages"
                                element={<MessagePage />}
                            />
                            <Route
                                path="/post"
                                element={<AddPost />}
                            />
                            <Route
                                path="/dashboard"
                                element={<UserDashboard />}
                            />
                            <Route
                                path="/login"
                                element={<Login />}
                            />
                            <Route
                                path="/register"
                                element={<Signup />}
                            />

                            {/* TODO: Import the Post page/component once it's finished and uncomment the code below */}
                            {/* <Route
                                path="/post"
                                element={<Post />}
                            /> */}

                            {/* TODO: Import the Account page/component once it's finished and uncomment the code below */}
                            {/* <Route
                                path="/account"
                                element={<Account />}
                            /> */}

                            {/* TODO: decide if we want to add a no match feature, like in deep-thoughts */}
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
