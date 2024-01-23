import React from "react";
import "./Footer.css";
import headerLogo from "../../assets/img/BAAD-Logo.jpg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-img">
            <img src={headerLogo} alt="" />
          </div>
          <div className="about-title">
            <p>ABOUT US</p>
            <h3>
              We are the best mobile service serving the Bay Area with over 10
              years experience with full van of equipment and use P&S products
              (Professional Detailing Products).
            </h3>
          </div>
          <div className="contact-title">
            <p>CONTACT US</p>
            <div className="contact">
              <h3>Mobile</h3>
              <span>(650) 346-8793</span>
            </div>
            <div className="contact">
              <h3>Alternate</h3>
              <span> (510) 798-3967</span>
            </div>
          </div>
        </div>
      </div>
      <div className="devs">
        <div className="devs-title">
          <p>© 2024 Bay Area Auto Detailing • Made with by Ohava</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
