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
                    <p>$60cars/$75suv</p>
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
                    <p>$100cars/$110suv</p>
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
                    <p>$200cars/$220suv</p>
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
            <div className="packages-4-5-blocks">
              <div className="package-1-block">
                <div className="packages-block-content">
                  <div className="package-title-bg">
                    <div className="packages-title">
                      <p>PACKAGE 4</p>
                      <span>Ultimate Detail</span>
                    </div>
                  </div>
                  <div className="packages-price">
                    <p>$200cars/$220suv</p>
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
                        <p>Clean Exterior & Interior Windows </p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Bug & Tar Removal</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Trim Restorer</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Clay Bar</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>
                          Carnauba Hand Wax w/ Dual Action High Speed Orbital
                        </p>
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
                        <p>Door Panel Scrubbing & Cleaning</p>
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
                        <p>Leather Cleaned (if applicable)</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Leather Conditioner (if applicable)</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Shampoo Upholstery</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Shampoo Mats</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Shampoo Carpets</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Pet Hair Removal</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Fabric Protector</p>
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
              <div className="package-5-block">
                <div className="packages-block-content">
                  <div className="package-title-bg">
                    <div className="packages-title">
                      <p>PACKAGE 5</p>
                      <span>Sell Your Car Detail - Get The Max!!!</span>
                    </div>
                  </div>
                  <div className="packages-price">
                    <p>$250 / 250 up</p>
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
                        <p>Clean Exterior & Interior Windows</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Bug & Tar Removal</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Trim Restorer</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Light Scratch Removal</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Clay Bar</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>2-Step Paint Enhancement</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Compound</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>
                          Carnauba Hand Wax w/ Dual Action High Speed Orbital
                        </p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Paint Sealant</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Engine Detail</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Check Tire Pressure – Add Air If Necessary</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Lite Headlight Restoration</p>
                      </div>

                      <div className="img-paragraph">
                        <img src={doubleArrow} alt="" />
                        <p>Interior:</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Complete Interior Wipe down & Shine</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Door Panel Scrubbing & Cleaning</p>
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
                        <p>Leather Cleaned (if applicable)</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Shampoo Upholstery</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Shampoo Mats</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Shampoo Carpets</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Pet Hair Removal</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Fabric Protector</p>
                      </div>
                      <div className="img-title">
                        <img src={doubleArrow} alt="" />
                        <p>Air Freshener (Optional)</p>
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
