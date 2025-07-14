// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import Blog from './Pages/Blog';
import Book from './Pages/Book';
import Contact from './Pages/Contact';
import Live from './Pages/Live';
import Footer from './Components/Footer';
import Skills from './Pages/Skills';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/book" element={<Book />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/live" element={<Live />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/footer" element={<Footer/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
