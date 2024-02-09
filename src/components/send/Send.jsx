import React, { useState, useRef } from "react";
import "./Send.css";
import Map from "../map/Map";
import emailjs from "@emailjs/browser";

const Send = () => {
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
      <div className="areas-we-services">
        <div className="areas-we-services-container">
          <div className="areas-we-services-title">
            <p>AREAS WE SERVICE</p>
            <span>
              San Francisco | San Mateo | Palo Alto | Mountain View | Sunnyvale
              | Santa Clara | Los Gatos | Hayward | Oakland | Berkeley
            </span>
          </div>
          <div className="areas-we-services-underline"></div>
          <div className="map-and-send-massage">
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
    </>
  );
};

export default Send;
