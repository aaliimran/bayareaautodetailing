import React, { useState } from "react";
import "./Gallery.css";
import Header from "../header/Header";
import Ticket from "../ticket/Ticket";
import Testimonials from "../testimonials/Testimonials";
import Send from "../send/Send";
import Footer from "../footer/Footer";
import interior1 from "../../assets/gallery/interior1.jpg";
import interior2 from "../../assets/gallery/interior2.jpg";
import interior3 from "../../assets/gallery/interior3.jpg";
import interior4 from "../../assets/gallery/interior4.jpg";
import interior5 from "../../assets/gallery/interior5.jpg";
import interior6 from "../../assets/gallery/interior6.jpg";
import interior7 from "../../assets/gallery/interior7.jpg";
import interior8 from "../../assets/gallery/interior8.jpg";
import interior9 from "../../assets/gallery/interior9.jpg";
import interior10 from "../../assets/gallery/interior10.jpg";
import interior11 from "../../assets/gallery/interior11.jpg";
import interior12 from "../../assets/gallery/interior12.jpg";
import exterior1 from "../../assets/gallery/exterior1.jpg";
import exterior2 from "../../assets/gallery/exterior2.jpg";
import exterior3 from "../../assets/gallery/exterior3.jpg";
import exterior4 from "../../assets/gallery/exterior4.jpg";
import exterior5 from "../../assets/gallery/exterior5.jpg";
import exterior6 from "../../assets/gallery/exterior6.jpg";
import exterior7 from "../../assets/gallery/exterior7.jpg";
import exterior8 from "../../assets/gallery/exterior8.jpg";
import exterior9 from "../../assets/gallery/exterior9.jpg";
import exterior10 from "../../assets/gallery/exterior10.jpg";
import exterior11 from "../../assets/gallery/exterior11.jpg";
import exterior12 from "../../assets/gallery/exterior12.jpg";
import engine1 from "../../assets/gallery/engine1.jpg";
import engine2 from "../../assets/gallery/engine2.jpg";
import engine3 from "../../assets/gallery/engine3.jpg";
import inProgress1 from "../../assets/gallery/inProgress1.jpg";
import inProgress2 from "../../assets/gallery/inProgress2.jpg";
import inProgress3 from "../../assets/gallery/inProgress3.jpg";
import inProgress4 from "../../assets/gallery/inProgress3.jpg";
import inProgress5 from "../../assets/gallery/inProgress5.jpg";
import inProgress6 from "../../assets/gallery/inProgress6.jpg";
import inProgress7 from "../../assets/gallery/inProgress7.jpg";
import inProgress8 from "../../assets/gallery/inProgress8.jpg";
import ourTeem1 from "../../assets/gallery/ourTeem1.jpg";
import ourTeem2 from "../../assets/gallery/ourTeem2.jpg";
import ourTeem3 from "../../assets/gallery/ourTeem3.jpg";
import ourTeem4 from "../../assets/gallery/exterior4.jpg";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const renderImages = () => {
    switch (selectedCategory) {
      case "Interior Services":
        return (
          <>
            <div className="images">
              <div className="image-container">
                <img src={interior1} alt="" />
              </div>
              <div className="image-container">
                <img src={interior2} alt="" />
              </div>
              <div className="image-container">
                <img src={interior3} alt="" />
              </div>
              <div className="image-container">
                <img src={interior4} alt="" />
              </div>
            </div>
            <div className="images">
              <div className="image-container">
                <img src={interior5} alt="" />
              </div>
              <div className="image-container">
                <img src={interior6} alt="" />
              </div>
              <div className="image-container">
                <img src={interior7} alt="" />
              </div>
              <div className="image-container">
                <img src={interior8} alt="" />
              </div>
            </div>
            <div className="images">
              <div className="image-container">
                <img src={interior9} alt="" />
              </div>
              <div className="image-container">
                <img src={interior10} alt="" />
              </div>
              <div className="image-container">
                <img src={interior11} alt="" />
              </div>
              <div className="image-container">
                <img src={interior12} alt="" />
              </div>
            </div>
          </>
        );
      case "Exterior Services":
        return (
          <>
            <div className="images">
              <div className="image-container">
                <img src={exterior1} alt="" />
              </div>
              <div className="image-container">
                <img src={exterior2} alt="" />
              </div>
              <div className="image-container">
                <img src={exterior3} alt="" />
              </div>
              <div className="image-container">
                <img src={exterior4} alt="" />
              </div>
            </div>
            <div className="images">
              <div className="image-container">
                <img src={exterior5} alt="" />
              </div>
              <div className="image-container">
                <img src={exterior6} alt="" />
              </div>
              <div className="image-container">
                <img src={exterior7} alt="" />
              </div>
              <div className="image-container">
                <img src={exterior8} alt="" />
              </div>
            </div>
            <div className="images">
              <div className="image-container">
                <img src={exterior9} alt="" />
              </div>
              <div className="image-container">
                <img src={exterior10} alt="" />
              </div>
              <div className="image-container">
                <img src={exterior11} alt="" />
              </div>
              <div className="image-container">
                <img src={exterior12} alt="" />
              </div>
            </div>
          </>
        );
      case "Engine":
        return (
          <div className="images">
            <div className="image-container">
              <img src={engine1} alt="" />
            </div>

            <div className="image-container">
              <img src={engine2} alt="" />
            </div>

            <div className="image-container">
              <img src={engine3} alt="" />
            </div>
          </div>
        );
      case "In Progress":
        return (
          <>
            <div className="images">
              <div className="image-container">
                <img src={inProgress1} alt="" />
              </div>

              <div className="image-container">
                <img src={inProgress2} alt="" />
              </div>

              <div className="image-container">
                <img src={inProgress3} alt="" />
              </div>

              <div className="image-container">
                <img src={inProgress4} alt="" />
              </div>
            </div>
            <div className="images">
              <div className="image-container">
                <img src={inProgress5} alt="" />
              </div>

              <div className="image-container">
                <img src={inProgress6} alt="" />
              </div>

              <div className="image-container">
                <img src={inProgress7} alt="" />
              </div>

              <div className="image-container">
                <img src={inProgress8} alt="" />
              </div>
            </div>
          </>
        );
      // case "Our Team":
      //   return (
      //     <div className="images">
      //       <div className="image-container">
      //         <img src={ourTeem1} alt="" />
      //       </div>
      //       <div className="image-container">
      //         <img src={ourTeem2} alt="" />
      //       </div>
      //       <div className="image-container">
      //         <img src={ourTeem3} alt="" />
      //       </div>
      //       <div className="image-container">
      //         <img src={ourTeem4} alt="" />
      //       </div>
      //     </div>
      //   );
      default:
        return (
          <>
            <div className="images">
              <div className="image-container">
                <img src={interior1} alt="" />
              </div>
              <div className="image-container">
                <img src={interior2} alt="" />
              </div>
              <div className="image-container">
                <img src={interior3} alt="" />
              </div>
              <div className="image-container">
                <img src={interior4} alt="" />
              </div>
            </div>
            <div className="images">
              <div className="image-container">
                <img src={interior5} alt="" />
              </div>
              <div className="image-container">
                <img src={interior6} alt="" />
              </div>
              <div className="image-container">
                <img src={interior7} alt="" />
              </div>
              <div className="image-container">
                <img src={interior8} alt="" />
              </div>
            </div>
            <div className="images">
              <div className="image-container">
                <img src={interior9} alt="" />
              </div>
              <div className="image-container">
                <img src={interior10} alt="" />
              </div>
              <div className="image-container">
                <img src={interior11} alt="" />
              </div>
              <div className="image-container">
                <img src={interior12} alt="" />
              </div>
            </div>
            <div className="images">
              <div className="image-container">
                <img src={exterior1} alt="" />
              </div>
              <div className="image-container">
                <img src={exterior2} alt="" />
              </div>
              <div className="image-container">
                <img src={exterior3} alt="" />
              </div>
              <div className="image-container">
                <img src={exterior4} alt="" />
              </div>
            </div>
            <div className="images">
              <div className="image-container">
                <img src={exterior5} alt="" />
              </div>
              <div className="image-container">
                <img src={exterior6} alt="" />
              </div>
              <div className="image-container">
                <img src={exterior7} alt="" />
              </div>
              <div className="image-container">
                <img src={exterior8} alt="" />
              </div>
            </div>
            <div className="images">
              <div className="image-container">
                <img src={exterior9} alt="" />
              </div>
              <div className="image-container">
                <img src={exterior10} alt="" />
              </div>
              <div className="image-container">
                <img src={exterior11} alt="" />
              </div>
              <div className="image-container">
                <img src={exterior12} alt="" />
              </div>
            </div>
            <div className="images">
              <div className="image-container">
                <img src={engine1} alt="" />
              </div>

              <div className="image-container">
                <img src={engine2} alt="" />
              </div>

              <div className="image-container">
                <img src={engine3} alt="" />
              </div>
            </div>
            <div className="images">
              <div className="image-container">
                <img src={inProgress1} alt="" />
              </div>

              <div className="image-container">
                <img src={inProgress2} alt="" />
              </div>

              <div className="image-container">
                <img src={inProgress3} alt="" />
              </div>

              <div className="image-container">
                <img src={inProgress4} alt="" />
              </div>
            </div>
            <div className="images">
              <div className="image-container">
                <img src={inProgress5} alt="" />
              </div>

              <div className="image-container">
                <img src={inProgress6} alt="" />
              </div>

              <div className="image-container">
                <img src={inProgress7} alt="" />
              </div>

              <div className="image-container">
                <img src={inProgress8} alt="" />
              </div>
            </div>
          </>
        );
    }
  };

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
            <button
              className={
                selectedCategory === "All" ? "button active" : "button"
              }
              onClick={() => setSelectedCategory("All")}
            >
              All
            </button>
            <button
              className={
                selectedCategory === "Interior Services"
                  ? "button active"
                  : "button"
              }
              onClick={() => setSelectedCategory("Interior Services")}
            >
              Interior Services
            </button>
            <button
              className={
                selectedCategory === "Exterior Services"
                  ? "button active"
                  : "button"
              }
              onClick={() => setSelectedCategory("Exterior Services")}
            >
              Exterior Services
            </button>
            <button
              className={
                selectedCategory === "Engine" ? "button active" : "button"
              }
              onClick={() => setSelectedCategory("Engine")}
            >
              Engine
            </button>
            <button
              className={
                selectedCategory === "In Progress" ? "button active" : "button"
              }
              onClick={() => setSelectedCategory("In Progress")}
            >
              In Progress
            </button>
            {/* <button
              className={
                selectedCategory === "Our Team" ? "button active" : "button"
              }
              onClick={() => setSelectedCategory("Our Team")}
            >
              Our Team
            </button> */}
          </div>
          <div className="gallery-images">{renderImages()}</div>
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
