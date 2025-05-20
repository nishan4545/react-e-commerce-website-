import React from "react";
import "tailwindcss";
import NavBars from "./navbar/NavBars";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Apple from "./products/Apple";
import Oneplus from "./products/Oneplus";
import Oppo from "./products/Oppo";
import Realme from "./products/Realme";
import Samsung from "./products/Samsung";
import Vivo from "./products/Vivo";
import Product from "./pages/Product";
import Topproducts from "./pages/Topproducts";
import Todayspecial from "./pages/Todayspecial";
function App() {
  return (
    <div className="app">
     
  {/* <NavBars/> */}
        <Router>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topproducts" element={<Topproducts />} />
          <Route path="/todayspec" element={<Todayspecial />} />
          <Route path="/product" element={<Product />} />
          <Route path="/apple" element={<Apple />} />
          <Route path="/oneplus" element={<Oneplus />} />
          <Route path="/oppo" element={<Oppo />} />
          <Route path="/realme" element={<Realme />} />
          <Route path="/samsung" element={<Samsung />} />
          <Route path="/vivo" element={<Vivo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
