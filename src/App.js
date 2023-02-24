import React from "react";
import "./app.css";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import Services from "./Pages/Services/Services";
import About_us from "./Pages/About_us/About_us";

import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <div className="App">
      <div className="nav-fixed">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about_us" element={<About_us />} />
      </Routes>
      <Footer />
    </div>
  );
}
