import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, Router } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
