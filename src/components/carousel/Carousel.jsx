import React, { useState } from "react";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import beforeAndAfter1 from "../../assets/img/before&after1.jpg";
import beforeAndAfter2 from "../../assets/img/before&after2.jpg";
import beforeAndAfter3 from "../../assets/img/before&after3.jpg";
import beforeAndAfter4 from "../../assets/img/before&after4.jpg";
import beforeAndAfter5 from "../../assets/img/before&after5.jpg";
import beforeAndAfter6 from "../../assets/img/before&after6.jpg";
import beforeAndAfter7 from "../../assets/img/before&after7.jpg";
import beforeAndAfter8 from "../../assets/img/before&after8.jpg";
import beforeAndAfter9 from "../../assets/img/before&after9.jpg";
import beforeAndAfter10 from "../../assets/img/before&after10.jpg";

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
            <div
              className="box"
              onClick={() => handleImageClick(beforeAndAfter1)}
            >
              <img src={beforeAndAfter1} alt="" />
            </div>
            <div className="after">
              <p>BEFORE&AFTER</p>
            </div>
          </div>
          <div className="box-container">
            <div
              className="box"
              onClick={() => handleImageClick(beforeAndAfter2)}
            >
              <img src={beforeAndAfter2} alt="" />
            </div>
            <div className="after">
              <p>BEFORE&AFTER</p>
            </div>
          </div>
          <div className="box-container">
            <div
              className="box"
              onClick={() => handleImageClick(beforeAndAfter3)}
            >
              <img src={beforeAndAfter3} alt="" />
            </div>
            <div className="after">
              <p>BEFORE&AFTER</p>
            </div>
          </div>
          <div className="box-container">
            <div
              className="box"
              onClick={() => handleImageClick(beforeAndAfter4)}
            >
              <img src={beforeAndAfter4} alt="" />
            </div>
            <div className="after">
              <p>BEFORE&AFTER</p>
            </div>
          </div>
          <div className="box-container">
            <div
              className="box"
              onClick={() => handleImageClick(beforeAndAfter5)}
            >
              <img src={beforeAndAfter5} alt="" />
            </div>
            <div className="after">
              <p>BEFORE&AFTER</p>
            </div>
          </div>
          <div className="box-container">
            <div
              className="box"
              onClick={() => handleImageClick(beforeAndAfter6)}
            >
              <img src={beforeAndAfter6} alt="" />
            </div>
            <div className="after">
              <p>BEFORE&AFTER</p>
            </div>
          </div>
          <div className="box-container">
            <div
              className="box"
              onClick={() => handleImageClick(beforeAndAfter7)}
            >
              <img src={beforeAndAfter7} alt="" />
            </div>
            <div className="after">
              <p>BEFORE&AFTER</p>
            </div>
          </div>
          <div className="box-container">
            <div
              className="box"
              onClick={() => handleImageClick(beforeAndAfter8)}
            >
              <img src={beforeAndAfter8} alt="" />
            </div>
            <div className="after">
              <p>BEFORE&AFTER</p>
            </div>
          </div>
          <div className="box-container">
            <div
              className="box"
              onClick={() => handleImageClick(beforeAndAfter9)}
            >
              <img src={beforeAndAfter9} alt="" />
            </div>
            <div className="after">
              <p>BEFORE&AFTER</p>
            </div>
          </div>
          <div className="box-container">
            <div
              className="box"
              onClick={() => handleImageClick(beforeAndAfter10)}
            >
              <img src={beforeAndAfter10} alt="" />
            </div>
            <div className="after">
              <p>BEFORE&AFTER</p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
