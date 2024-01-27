import React from "react";
import "./Gallery.css";
import Header from "../header/Header";
import Ticket from "../ticket/Ticket";
import Testimonials from "../testimonials/Testimonials";
import Send from "../send/Send";
import Footer from "../footer/Footer";

const Gallery = () => {
  return (
    <>
      <Header />
      <div className="gallery">
        <div className="gallery-container">
          <div className="gallery-title">
            <p>OUR GALLERY</p>
          </div>
          <div className="underline"></div>
          <div className="gallery-type-buttons">
            <button>All</button>
            <button>Interior Services</button>
            <button>Exterior Services</button>
            <button>Engine</button>
            <button>In Progress</button>
            <button>Our Team</button>
          </div>
        </div>
      </div>
      <Ticket />
      <Testimonials />
      <Send />
      <Footer />
    </>
  );
};

export default Gallery;
