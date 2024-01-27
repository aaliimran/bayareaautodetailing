import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import headerLogo from "../../assets/img/BAAD-Logo.jpg";
import enabledPhone from "../../assets/img/phone-enabled.svg";
import email from "../../assets/img/email.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

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
      <div className="background-container">
        <div className="links-container">
          <div className="links-and-button">
            <div className="links">
              <Link to="/" className={isActive("/") ? "active" : ""}>
                HOME
              </Link>
              <Link
                to="/pricing"
                className={isActive("/pricing") ? "active" : ""}
              >
                PRICING
              </Link>
              <Link to="/about" className={isActive("/about") ? "active" : ""}>
                ABOUT
              </Link>
              <Link
                to="/gallery"
                className={isActive("/gallery") ? "active" : ""}
              >
                GALLERY
              </Link>
              <Link
                to="/contact"
                className={isActive("/contact") ? "active" : ""}
              >
                CONTACT
              </Link>
            </div>
            <a
              href="https://bayareaautodetailing.square.site/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>BOOK ONLINE</button>
            </a>
          </div>
        </div>
        <button className="burger-menu" onClick={toggleMenu}>
          ☰ Menu
        </button>
        {isMenuOpen && (
          <div className="menu-fullscreen">
            <Link
              to="/"
              className={isActive("/") ? "active" : ""}
              onClick={toggleMenu}
            >
              HOME
            </Link>
            <Link to="/pricing" onClick={toggleMenu}>
              PRICING
            </Link>
            <Link to="/about" onClick={toggleMenu}>
              ABOUT
            </Link>
            <Link to="/gallery" onClick={toggleMenu}>
              GALLERY
            </Link>
            <Link to="/contact" onClick={toggleMenu}>
              CONTACT
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
