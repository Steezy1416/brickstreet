// JT
import React, { useState } from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./pages/Register";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact.js";
import PrivacyPolicy from "./pages/PrivacyPolicy.js";
import Post from "./pages/Post";
import AddPost from "./pages/AddPost.js";
// import FAQ from './pages/FAQ';
// import Contact from './pages/Contact';
import UserDashboard from "./pages/UserDashboard";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Login from "./pages/Login";
import Login from "./components/Login";
import MessagePage from "./components/MessagePage";
import Footer from "./components/Footer";
import Profile from './pages/Profile';
import SinglePost from './pages/SinglePost';


const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  const [currentPage, setCurrentPage] = useState('MessagePage');

  function renderPage() {
    // this is for the landing page
    if (currentPage === 'Hero') {
      return <Hero></Hero>
    }

    if (currentPage === 'Login') {
      return <Login></Login>
    }

    if (currentPage === 'MessagePage') {
      return <MessagePage></MessagePage>
    }

  }

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Nav />
          <div className="container">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/home" element={<Home />} />
              <Route path='/home/:categoryName' element={<Home />} />
              <Route path='/profile/:id' element={<Profile />} />
              <Route path='/post/:id' element={<SinglePost />} />
              <Route path="/about" element={<About />} />
              <Route path="/messages" element={<MessagePage />} />
              <Route path="/post" element={<AddPost />} />
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Signup />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />

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
