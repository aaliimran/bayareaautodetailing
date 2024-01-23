import "./App.css";
import Header from "./components/header/Header";
import homeWallpaper from "./assets/img/home-wallpaper.jpg";
import ourServicesImg1 from "./assets/img/our-services-img1.jpg";
import ourServicesImg2 from "./assets/img/our-services-img2.jpg";
import ourServicesImg3 from "./assets/img/our-services-img3.jpg";
import psychology from "./assets/img/psychology.svg";
import volunteerActivism from "./assets/img/volunteer_activism.svg";
import aboutUsCircle from "./assets/img/about-us-circle.jpg";
import IDALogo from "./assets/img/IDA_logo.jpg";
import Ticket from "./components/ticket/Ticket";
import mapImg from "./assets/img/map-img.png";
import Footer from "./components/footer/Footer";
import Send from "./components/send/Send";

function App() {
  return (
    <>
      <Header />
      <div className="backround-container">
        <div className="links-container">
          <div className="links-and-button">
            <div className="links">
              <a href="">HOME</a>
              <a href="">PRICING</a>
              <a href="">ABOUT</a>
              <a href="">GALLERY</a>
              <a href="">CONTACT</a>
            </div>
            <button>BOOK ONLINE</button>
          </div>
        </div>
      </div>
      <div className="aboutUs-title">
        <div className="image-mask"></div>
        <img src={homeWallpaper} alt="" />
        <div className="intro-title-container">
          <div className="home-intro-img-title">
            <p>
              WE COME TO YOU, YOUR HOME, YOUR WORK, YOUR BUSINESS, ANYWHERE,
              EVERYWHERE!
            </p>
          </div>
        </div>
      </div>
      <div className="our-services">
        <div className="our-services-title-content">
          <p>OUR SERVICES</p>
          <span>
            Our commitment is to provide top quality service to make your
            vehicle look and feel like new.
          </span>
        </div>
        <div className="our-services-underline"></div>
        <div className="our-services-img-content">
          <div className="our-services-img-content">
            <div className="our-services-img">
              <div className="image-mask"></div>
              <a href="">
                <p>
                  EXTERIOR <br /> SERVICES
                </p>
                <img src={ourServicesImg1} alt="" />
              </a>
              <ul>
                <li>Washing</li>
                <li>Clay Bar</li>
                <li>Hand Wax</li>
                <li>Paint Sealant</li>
                <li>Sap & Tar Removal</li>
              </ul>
            </div>
          </div>
          <div className="our-services-img-content">
            <div className="our-services-img">
              <div className="image-mask"></div>
              <a href="">
                <p>
                  EXTERIOR <br /> SERVICES
                </p>
                <img src={ourServicesImg2} alt="" />
              </a>
              <ul>
                <li>Vacuuming</li>
                <li>Dashboard Headliners</li>
                <li>Leather treatment</li>
                <li>Spot & Stain Removal</li>
                <li>Dog Hair Removal</li>
                <li>Emergency cleanup: Mold Removal, Liquid/Spill Cleanup</li>
              </ul>
            </div>
          </div>
          <div className="our-services-img-content">
            <div className="our-services-img">
              <div className="image-mask"></div>
              <a href="">
                <p>
                  EXTERIOR <br /> SERVICES
                </p>
                <img src={ourServicesImg3} alt="" />
              </a>
              <ul>
                <li>Steam Wash</li>
                <li>Bug and Sap Removal</li>
                <li>Glue Removal</li>
                <li>Paint Transfers Removal</li>
                <li>Engine Detailing</li>
                <li>Headlight Restoration</li>
                <li>Light Scratch Removal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="makes">
        <div className="makes-container">
          <div className="makes-title">
            <p>WHAT MAKES US DIFFERENT!</p>
          </div>
          <div className="makes-underline"></div>
          <div className="blocks">
            <div className="upper-blocks">
              <div className="block-content">
                <img src={psychology} alt="" />
                <div className="block-title">
                  <p>10 YEARS OF EXPERIENCE</p>
                  <h3>
                    We have been in business, helping our customers for over 10
                    years.
                  </h3>
                </div>
              </div>
              <div className="block-content">
                <img src="" alt="" />
                <div className="block-title">
                  <p>EQUIPMENT</p>
                  <h3>
                    We come to you with a van full of equipment to get the job
                    done.
                  </h3>
                </div>
              </div>
              <div className="block-content">
                <img src="" alt="" />
                <div className="block-title">
                  <p>STAY ON TRACK</p>
                  <h3>
                    No need to go to a car wash and spent time there, call us
                    and we'll get you back in track.
                  </h3>
                </div>
              </div>
            </div>
            <div className="lower-blocks">
              <div className="block-content">
                <img src="" alt="" />
                <div className="block-title">
                  <p>WE COME TO YOU</p>
                  <h3>
                    We drive to your location with everything we need to service
                    your car professionally.
                  </h3>
                </div>
              </div>
              <div className="block-content">
                <img src="" alt="" />
                <div className="block-title">
                  <p>FAST</p>
                  <h3>
                    We're fast and we make sure your car is make it shine,
                    sparkle and smell like it was new car.
                  </h3>
                </div>
              </div>
              <div className="block-content">
                <img src={volunteerActivism} alt="" />
                <div className="block-title">
                  <p>WE CARE</p>
                  <h3>
                    We love cars and we're in business to make you happy about
                    your cars.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-us">
        <div className="right-content-dir">
          <div className="about-us-img-container">
            <img src={aboutUsCircle} alt="" />
          </div>
          <div className="about-us-title">
            <p>ABOUT US</p>
            <h3>
              We are the best mobile service serving the Bay Area with over 10
              years experience with full van of equipment and use P&S products
              (Professional Detailing Products). We're real people who love
              cars. Our service is designed for busy people who love their cars.
              We come to you, your home, your work, your business. We go there,
              we go everywhere!
            </h3>
            <div className="about-us-buttons">
              <a href="">
                <button>OUR TEAM</button>
              </a>
              <a href="">
                <button>RATES</button>
              </a>
            </div>
          </div>
        </div>
        <div className="ida-logo">
          <img src={IDALogo} alt="" />
        </div>
      </div>
      <Ticket />
      <div className="nicole-T-text">
        <p>DRIVE THE RIGHT RESULTS</p>
        <h3>
          "My car looks amazing! That's after getting it detailed by Bay Area
          Auto Detailing. I quickly called and was able to get my car detailed
          the same day. They drive to you and get started. You pay for exactly
          what you get, the interior and exterior are just spotless. You get an
          estimate over the phone, which can include add-ons for additional
          items. Truly my car looks fantastic, and I'll continue to use their
          service".
        </h3>
        <span>— Nicole T. </span>
      </div>
      <Send />
      <Footer />
    </>
  );
}

export default App;
