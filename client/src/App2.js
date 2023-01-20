// FD
import React, {useState} from 'react';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Login from './components/Login';
import Footer from './components/Footer';
import MessagePage from './components/MessagePage';

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
    <div>
      <Nav setCurrentPage={setCurrentPage}></Nav>
      <main>
      { renderPage }
      {/* <MessagePage></MessagePage> */}
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App;
