import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <>
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
            <Link to="/send">
              <button>BOOK ONLINE</button>
            </Link>
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
