import React, { useState, useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Header from "../header/Header";
import mapImgContact from "../../assets/img/map-contact.jpg";
import enabledPhone from "../../assets/img/phone-enabled-f.svg";
import Footer from "../footer/Footer";
import Map from "../map/Map";

const Contact = () => {
  const form = useRef();
  const [isFormValid, setIsFormValid] = useState(false);

  const checkFormValidity = () => {
    const name = form.current["user_name"].value;
    const email = form.current["user_email"].value;
    const phone = form.current["user_phone"].value;
    setIsFormValid(name !== "" && email !== "" && phone !== "");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_twe7hzm",
        "template_xd51rzr",
        form.current,
        "bhLWQHvHGt55dUJDw"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          form.current.reset();
          setIsFormValid(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
              <div className="send-massage-content">
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  onChange={checkFormValidity}
                >
                  <div className="about-input">
                    <input type="text" placeholder="Name" name="user_name" />
                    <input type="text" placeholder="Email" name="user_email" />
                    <input type="text" placeholder="Phone" name="user_phone" />
                  </div>
                  <div className="message-input">
                    <textarea
                      type="text"
                      placeholder="Message"
                      name="message"
                    />
                  </div>
                  <input
                    className="submit-button"
                    type="submit"
                    value="SEND MESSAGE"
                    disabled={!isFormValid}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
