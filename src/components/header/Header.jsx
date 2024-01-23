import React from "react";
import "./Header.css";
import headerLogo from "../../assets/img/BAAD-Logo.jpg";
import enabledPhone from "../../assets/img/phone-enabled.svg";
import email from "../../assets/img/email.svg";

const Header = () => {
  return (
    <>
      <div className="container">
        <header className="header">
          <div className="header-logo">
            <img src={headerLogo} alt="" />
          </div>
          <div className="header-content">
            <div className="phone">
              <a href="#">
                <div className="svg-and-title">
                  <img src={enabledPhone} alt="" />
                  <p>Call</p>
                </div>
                <span>(650) 346-8793</span>
              </a>
            </div>
            <div className="email">
              <div className="svg-and-title">
                <img src={email} alt="" />
                <p>Email</p>
              </div>
              <span>kmlewis280@gmail.com</span>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
