import React from "react";
import "./Contact.css";
import Header from "../header/Header";
import mapImgContact from "../../assets/img/map-contact.jpg";
import enabledPhone from "../../assets/img/phone-enabled-f.svg";
import Footer from "../footer/Footer";
import Map from "../map/Map";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="contact-us">
        <div className="contact-us-container">
          <div className="contact-us-title">
            <p>CONTACT US</p>
            <span>
              San Francisco | San Mateo | Palo Alto | Mountain View | Sunnyvale
              | Santa Clara | Los Gatos | Hayward | Oakland | Berkeley
            </span>
            <h3>
              Please fill out our form if you have any questions about our
              services and availability. We look forward to helping you with any
              of your auto detailing needs.
            </h3>
          </div>
          <div className="contact-us-underline"></div>
          <div className="contacts-container">
            <div>
              <div className="contacts-phone">
                <div className="img-phone">
                  <img src={enabledPhone} alt="" />
                </div>
                <div className="contacts">
                  <p>Mobile</p>
                  <span>(650) 346-8793</span>
                </div>
              </div>
              <div className="contacts-phone">
                <div className="img-phone">
                  <img src={enabledPhone} alt="" />
                </div>
                <div className="contacts">
                  <p>Alternate</p>
                  <span>(510) 798-3967</span>
                </div>
              </div>
            </div>
          </div>
          <div className="map-and-inputs">
            <div className="map">
              <Map />
            </div>
            <div className="inputs-and-button">
              <div className="contact-send-massage-content">
                <div className="contact-about-input">
                  <div className="input-title">
                    <span>Name *</span>
                    <input type="text" />
                  </div>
                  <div className="input-title">
                    <span>Email *</span>
                    <input type="text" />
                  </div>
                  <div className="input-title">
                    <span>Phone *</span>
                    <input type="text" />
                  </div>
                </div>
                <div className="contact-message-input">
                  <div className="input-title">
                    <span>Message *</span>
                    <textarea type="text" />
                  </div>
                </div>
              </div>
              <a href="">
                <button>SEND MESSAGE</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
