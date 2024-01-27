import React from "react";
import "./About.css";
import Header from "../header/Header";
import ownerImg from "../../assets/img/about-us-circle.jpg";
import Carousel from "../carousel/Carousel";
import Ticket from "../ticket/Ticket";
import Testimonials from "../testimonials/Testimonials";
import Send from "../send/Send";
import Footer from "../footer/Footer";

const About = () => {
  return (
    <>
      <Header />
      <div className="about">
        <div className="about-container">
          <div className="about-bay-title">
            <p>ABOUT BAY AREA AUTO DETAILING</p>
          </div>
          <div className="underline"></div>
          <div className="video-and-title-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/HYUgM3P__34"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div className="video-title">
              <span>
                We offer 10 years of experience with a full van of equipment. We
                use P & S products (professional detailing products). We started
                in 2008 and believe we are the best mobile detailing service in
                the Bay Area. Check out our Yelp!
              </span>
              <span>
                Our service is designed for busy people who love their cars. We
                come to you: your home, your work, your business, with
                everything we need to service your car professionally. We make
                it shine, sparkle, and smell like it's a new car.{" "}
              </span>
            </div>
          </div>
          <div className="about-owner">
            <div className="owner-title-container">
              <div className="owner-name">
                <span>Owner</span>
                <p>Kevin Lewis</p>
              </div>
              <div className="owner-text">
                <span>
                  I am a local guy, Aragon HS, College of San Mateo, San Diego
                  State. I have been in customer service and sales my whole
                  life. I love cars and making people happy!
                </span>
                <span>
                  For more details about our service, feel free to call a person
                  who really loves cars.
                </span>
              </div>
            </div>
            <div className="owner-img-container">
              <img src={ownerImg} alt="" />
            </div>
          </div>
          <Carousel />
        </div>
      </div>
      <Ticket />
      <Testimonials />
      <Send />
      <Footer />
    </>
  );
};

export default About;
