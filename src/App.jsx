import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavbarComponent from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from '../src/page/Home/Home.jsx'; 

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;