import React, { useState } from "react";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import before1 from "../../assets/img/before1.jpg";
import after1 from "../../assets/img/after1.jpg";
import before2 from "../../assets/img/before2.jpg";
import after2 from "../../assets/img/after2.jpg";
import before3 from "../../assets/img/before3.jpg";
import after3 from "../../assets/img/after3.jpg";
import before4 from "../../assets/img/before4.jpg";
import after4 from "../../assets/img/after4.jpg";
import before5 from "../../assets/img/before5.jpg";
import after5 from "../../assets/img/after5.jpg";
import before6 from "../../assets/img/before6.jpg";
import after6 from "../../assets/img/after6.jpg";

import Slider from "react-slick";

const Carousel = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setIsFullscreen(true);
  };

  const handleClose = () => {
    setIsFullscreen(false);
  };

  var settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <>
      {isFullscreen && (
        <div className="fullscreen-overlay" onClick={handleClose}>
          <img src={currentImage} alt="Fullscreen" />
        </div>
      )}
      <div className="Carousel">
        <Slider {...settings}>
          <div className="box-container">
            <div className="box" onClick={() => handleImageClick(before1)}>
              <img src={before1} alt="" />
            </div>
            <div className="after">
              <p>BEFORE</p>
            </div>
          </div>
          <div className="box-container">
            <div className="box" onClick={() => handleImageClick(after1)}>
              <img src={after1} alt="" />
            </div>
            <div className="after">
              <p>AFTER</p>
            </div>
          </div>
          <div className="box-container">
            <div className="box" onClick={() => handleImageClick(before2)}>
              <img src={before2} alt="" />
            </div>
            <div className="after">
              <p>BEFORE</p>
            </div>
          </div>
          <div className="box-container">
            <div className="box" onClick={() => handleImageClick(after2)}>
              <img src={after2} alt="" />
            </div>
            <div className="after">
              <p>AFTER</p>
            </div>
          </div>
          <div className="box-container">
            <div className="box" onClick={() => handleImageClick(before3)}>
              <img src={before3} alt="" />
            </div>
            <div className="after">
              <p>BEFORE</p>
            </div>
          </div>
          <div className="box-container">
            <div className="box" onClick={() => handleImageClick(after3)}>
              <img src={after3} alt="" />
            </div>
            <div className="after">
              <p>AFTER</p>
            </div>
          </div>
          <div className="box-container">
            <div className="box" onClick={() => handleImageClick(before4)}>
              <img src={before4} alt="" />
            </div>
            <div className="after">
              <p>BEFORE</p>
            </div>
          </div>
          <div className="box-container">
            <div className="box" onClick={() => handleImageClick(after4)}>
              <img src={after4} alt="" />
            </div>
            <div className="after">
              <p>AFTER</p>
            </div>
          </div>
          <div className="box-container">
            <div className="box" onClick={() => handleImageClick(before5)}>
              <img src={before5} alt="" />
            </div>
            <div className="after">
              <p>BEFORE</p>
            </div>
          </div>
          <div className="box-container">
            <div className="box" onClick={() => handleImageClick(after5)}>
              <img src={after5} alt="" />
            </div>
            <div className="after">
              <p>AFTER</p>
            </div>
          </div>
          <div className="box-container">
            <div className="box" onClick={() => handleImageClick(before6)}>
              <img src={before6} alt="" />
            </div>
            <div className="after">
              <p>BEFORE</p>
            </div>
          </div>
          <div className="box-container">
            <div className="box" onClick={() => handleImageClick(after6)}>
              <img src={after6} alt="" />
            </div>
            <div className="after">
              <p>AFTER</p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
