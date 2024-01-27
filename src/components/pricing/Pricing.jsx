import React from "react";
import "./Pricing.css";
import Header from "../header/Header";
import doubleArrow from "../../assets/img/double_arrow.svg";
import Ticket from "../ticket/Ticket";
import Testimonials from "../testimonials/Testimonials";
import Send from "../send/Send";
import Footer from "../footer/Footer";

const Pricing = () => {
  return (
    <>
      <Header />
      <div className="pricing">
        <div className="pricing-container">
          <div className="pricing-title">
            <p>WASHING PACKAGES</p>
          </div>
          <div className="underline"></div>
          <div className="packages">
            <div className="packages-1-2-blocks">
              <div className="package-1-block">
                <div className="packages-block-content">
                  <div className="package-title-bg">
                    <div className="packages-title">
                      <p>PACKAGE 1</p>
                      <span>PLUS Wash in & Out</span>
                    </div>
                  </div>
                  <div className="packages-price">
                    <p>$40cars/$55suv</p>
                  </div>
                  <div className="price-underline"></div>
                  <div className="included-price-title">
                    <div className="title">
                      <div className="img-paragraph">
                        <img src={doubleArrow} alt="" />
                        <p>Exterior:</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Hand Wash w/Foam Bath & Pressure Cleaner</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Clean Wheels</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Tire Dressing</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Clean Exterior & Interior Windows w/ RainX</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Bug & Tar Removal</p>
                      </div>
                      <div className="img-paragraph">
                        <img src={doubleArrow} alt="" />
                        <p>Interior:</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Complete Interior Wipedown & Shine</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Full Interior Vacuum + Trunk</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Clean Door Jambs</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Interior Doors and Panels</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Air Freshener</p>
                      </div>
                    </div>
                    <div className="package-btn">
                      <button>BOOK NOW</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="package-2-block">
                <div className="packages-block-content">
                  <div className="package-title-bg">
                    <div className="packages-title">
                      <p>PACKAGE 2</p>
                      <span>MAX Wash (Wash & Mini Detail)</span>
                    </div>
                  </div>
                  <div className="packages-price">
                    <p>$80cars/$90suv</p>
                  </div>
                  <div className="price-underline"></div>
                  <div className="included-price-title">
                    <div className="exterior">
                      <div className="img-paragraph">
                        <img src={doubleArrow} alt="" />
                        <p>Exterior:</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Hand Wash w/Foam Bath & Pressure Cleaner</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Clean Wheels</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Tire Dressing</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Clean Exterior & Interior Windows</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Bug & Tar Removal</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Spray Shine Wax</p>
                      </div>
                      <div className="img-paragraph">
                        <img src={doubleArrow} alt="" />
                        <p>Interior:</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Complete Interior Wipedown & Shine</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Full Interior Vacuum + Trunk</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Clean Door Jambs</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Interior Doors and Panels</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Leather Conditioner </p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Air Freshener</p>
                      </div>
                    </div>
                    <div className="package-btn">
                      <button>BOOK NOW</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="package-3-block">
                <div className="packages-block-content">
                  <div className="package-title-bg">
                    <div className="packages-title">
                      <p>PACKAGE 3</p>
                      <span>Ultimate Detail</span>
                    </div>
                  </div>
                  <div className="packages-price">
                    <p>$180cars/$200suv</p>
                  </div>
                  <div className="price-underline"></div>
                  <div className="included-price-title">
                    <div className="exterior">
                      <div className="img-paragraph">
                        <img src={doubleArrow} alt="" />
                        <p>Exterior:</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Hand Wash w/Foam Bath & Pressure Cleaner</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Clean Wheels</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Tire Dressing</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Clean Exterior & Interior Windows</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Bug & Tar Removal</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Spray Shine Wax</p>
                      </div>
                      <div className="img-paragraph">
                        <img src={doubleArrow} alt="" />
                        <p>Interior:</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Complete Interior Wipedown & Shine</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Full Interior Vacuum + Trunk</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Clean Door Jambs</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Interior Doors and Panels</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Leather Conditioner </p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Air Freshener</p>
                      </div>
                    </div>
                    <div className="package-btn">
                      <button>BOOK NOW</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Ticket />
      <Testimonials />
      <Send />
      <Footer />
    </>
  );
};

export default Pricing;
