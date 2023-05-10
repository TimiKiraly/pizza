import "./App.css";
import ReactDOM from "react-dom/client";
import ErrorPage from './Components/ErrorPage';
import Locations from './Components/Locations';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";
import AboutUs from "../src/Components/AboutUs";
import Menu from "./Components/Menu";
import Booking from "./Components/Booking";
import { Component } from "react";


function App() {
  return (
    <div className="App">
      <Navbar />
      
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/locations" element={<Locations />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;