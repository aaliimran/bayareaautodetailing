import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import bradCircle from "../../assets/img/Brad-circle.jpg";
import marissaCircle from "../../assets/img/Marissa-circle.jpg";
import davidCircle from "../../assets/img/David-circle.jpg";
import AnnaCircle from "../../assets/img/Anna-circle.jpg";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % 4);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <>
      <div className="testimonials">
        <div className="testimonials-container">
          <div className="testimonials-title">
            <p>TESTIMONIALS</p>
          </div>
          <div className="testimonials-underline"></div>
          <div className="recommendations">
            <div className={`people ${currentSlide === 0 ? "active" : ""}`}>
              <img src={bradCircle} alt="" />
              <div className="rec-titles">
                <p>Brad B.</p>
                <span>San Francisco, CA</span>
                <h3>
                  Brad B. San Francisco, CA Bruno and Kevin did a fantastic job
                  on my cars. The inside is spotless and the exterior is glass.
                  They were very responsive and easy to work with all at a
                  reasonable price. It is very convenient having them come to
                  you. Highly recommended!
                </h3>
              </div>
            </div>
            <div className={`people ${currentSlide === 1 ? "active" : ""}`}>
              <img src={marissaCircle} alt="" />
              <div className="rec-titles">
                <p>Marissa C.</p>
                <span>San Jose, CA</span>
                <h3>
                  My car had a little incident with the oil cap recently that
                  led to oil splashed all over my engine. Bay Area Auto
                  Detailing was quick, responsive, and reasonably priced. I
                  really appreciated the convenience of having them come to my
                  home with all the supplies they needed. Bruno was friendly and
                  professional, and made my car look brand new! I would highly
                  recommend them for all your detailing needs. Thanks Bruno!
                </h3>
              </div>
            </div>
            <div className={`people ${currentSlide === 2 ? "active" : ""}`}>
              <img src={davidCircle} alt="" />
              <div className="rec-titles">
                <p>David S.</p>
                <span>Castro Valley, CA</span>
                <h3>
                  I absolutely love the work that Bay Area auto detailing did on
                  my motorhome and my car I'm absolutely speechless. I am a
                  single dad with two kids 13 and 15 and all of their friends
                  and they took my car and my motorhome which were both
                  disasters and turned them into Serene tranquility if you can
                  imagine that. I highly recommend using Kevin and Bruno these
                  two men really know what they're doing and they do it very
                  very well.
                </h3>
              </div>
            </div>
            <div className={`people ${currentSlide === 3 ? "active" : ""}`}>
              <img src={AnnaCircle} alt="" />
              <div className="rec-titles">
                <p>Anna Q.</p>
                <span>Rocklin, CA</span>
                <h3>
                  Anna Q. from Rocklin, CA: Extremely satisfied with the
                  detailing of my 2002 Ford Escape. The team was quick to
                  respond, offered competitive pricing, and did an outstanding
                  job. The car was immaculate, and I highly recommend their
                  services for anyone who's busy but wants to take care of their
                  vehicle. Brad B. from San Francisco, CA: Bruno and Kevin did
                  an excellent job on my car. The interior is spotless, and the
                  exterior looks amazing. They were responsive, easy to work
                  with, and reasonably priced. The convenience of them coming to
                  you is unbeatable. Highly recommended!
                </h3>
              </div>
            </div>
          </div>
          <div className="rec-buttons">
            <button
              className={currentSlide === 0 ? "active" : ""}
              onClick={() => setCurrentSlide(0)}
            ></button>
            <button
              className={currentSlide === 1 ? "active" : ""}
              onClick={() => setCurrentSlide(1)}
            ></button>{" "}
            <button
              className={currentSlide === 2 ? "active" : ""}
              onClick={() => setCurrentSlide(2)}
            ></button>{" "}
            <button
              className={currentSlide === 3 ? "active" : ""}
              onClick={() => setCurrentSlide(3)}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
