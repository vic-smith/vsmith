import React from "react";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from "./components/Resume";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
