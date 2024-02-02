import React from "react";
import "./Send.css";
import mapImg from "../../assets/img/map-img.png";
import Map from "../map/Map";

const Send = () => {
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
                <div className="about-input">
                  <input type="text" placeholder="Name" />
                  <input type="text" placeholder="Email" />
                  <input type="text" placeholder="Phone" />
                </div>
                <div className="message-input">
                  <textarea type="text" placeholder="Message" />
                </div>
              </div>

              <a href="">
                <button>SEND MESSAGE</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Send;
