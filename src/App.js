import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Product from "./Components/Product/Product";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/NotFound/NotFound";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />

        <Route exact path="/Product" element={<Product />} />

        <Route exact path="*" element={<NotFound />} />

        <Route render={() => <Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
