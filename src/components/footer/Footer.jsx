import React from "react";
import "./Footer.css";
import Logo from "../../assets/img/Logo.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-img">
            <img src={Logo} alt="" />
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
              <span>(415) 520-5015</span>
            </div>
            <div className="contact">
              <h3>Email</h3>
              <span> detailingmastersca.com</span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="devs">
        <div className="devs-title">
          <p>© 2024  • Made with by Ohava</p>
        </div>
      </div> */}
    </>
  );
};

export default Footer;
