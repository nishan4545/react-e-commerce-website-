import React from "react";
import NavBars from "../navbar/NavBars";
import ho from "../assets/homepg/ho.webp";
import Product from "../pages/Product";
import Shortlist from "../pages/Shortlist";

const Homepg = () => {
  return (
    <div className="homepage">
      <NavBars />

      <img src={ho} className="imagehome"></img>
      <Shortlist/>

      <Product />
    </div>
  );
};

export default Homepg;
