import React from "react";
import './App.css';
import { Router } from "react-router-dom";
import Navbar from "./components/include/Navbar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Footer from './components/include/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
           
          <Route path='/contact' element={<Contact />} />

          </Routes>
           
           <Footer />
        </div>
      </BrowserRouter>

  );
}

export default App;
