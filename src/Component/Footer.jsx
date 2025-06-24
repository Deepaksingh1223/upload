import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "../Component/Image";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <footer className="footer-wrapper footer-layout1">
        <div
          className="shape-mockup footer-bg-shape1-1"
          data-left="50%"
          data-bottom="-50%"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img src={Image.footerbgshape2} alt="img" />
        </div>

        <div className="container">
          <div className="footer-top">
            <div className="shadow-text text-lg-center" data-aos="slide-up">
              Let’s Talk
            </div>
            <div className="row gy-30 justify-content-lg-around">
              <div className="col-lg-auto" data-aos="slide-up">
                <div className="contact-info-card contact-location-info">
                  <p className="box-title">Location</p>
                  <h4 className="box-text">
                    56 Moo 9 Ladlumkaew-Pathumthani Rd., Pathum Thani 12140,
                    Thailand
                  </h4>
                </div>
              </div>

              <div className="col-lg-auto" data-aos="slide-up">
                <div className="contact-info-card contact-phone-info">
                  <p className="box-title">Phone Call</p>
                  <h4 className="box-text">
                    <a href="tel:6624073460">+6624073460</a>
                  </h4>
                </div>
              </div>

              <div className="col-lg-auto" data-aos="slide-up">
                <div className="contact-info-card contact-mail-info">
                  <p className="box-title">Email Address</p>
                  <h4 className="box-text">
                    <a href="mailto:help24/7.info@Rentelli Gence.com">
                      help24/7.info@Rentelli Gence.com
                    </a>
                  </h4>
                  <h4 className="box-text">
                    <a href="mailto:info@Rentelli Gence.com">
                      info@Rentelli Gence.com
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="widget-area">
              <div className="row justify-content-between">
                <div className="col-md-3" data-aos="fade-up">
                  <div className="widget footer-widget">
                    <div className="th-widget-contact">
                      <h3 className="widget_title">Get In Touch</h3>
                      <p className="footer-text mb-4">
                        56 Moo 9 Ladlumkaew-Pathumthani Rd., Pathum Thani 12140,
                        Thailand We suggest connecting apps
                      </p>
                      <div className="th-social style10">
                        <a href="/">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="/">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="/">
                          <i className="fab fa-youtube"></i>
                        </a>
                        <a href="/">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-3" data-aos="fade-up">
                  <div className="widget widget_nav_menu footer-widget">
                    <h3 className="widget_title">Useful Links</h3>
                    <div className="menu-all-pages-container">
                      <ul className="menu">
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="/">About Us</a>
                        </li>
                        <li>
                          <a href="/">Features</a>
                        </li>
                        <li>
                          <a href="/">Projects</a>
                        </li>
                        <li>
                          <a href="/">Blog</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-sm-3" data-aos="fade-up">
                  <div className="widget widget_nav_menu footer-widget">
                    <h3 className="widget_title">Company</h3>
                    <div className="menu-all-pages-container">
                      <ul className="menu">
                        <li>
                          <a href="/">What we Offer</a>
                        </li>
                        <li>
                          <a href="/">Our Story</a>
                        </li>
                        <li>
                          <a href="/">Latest Posts</a>
                        </li>
                        <li>
                          <a href="/">Help Center</a>
                        </li>
                        <li>
                          <a href="/">Our Partners</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-sm-3" data-aos="fade-up">
                  <div className="widget widget_nav_menu footer-widget">
                    <h3 className="widget_title">Our Service</h3>
                    <div className="menu-all-pages-container">
                      <ul className="menu">
                        <li>
                          <a href="/">Robotic Automation</a>
                        </li>
                        <li>
                          <a href="/">Education & Science</a>
                        </li>
                        <li>
                          <a href="/">Machine Learning</a>
                        </li>
                        <li>
                          <a href="/">Predictive Analysis</a>
                        </li>
                        <li>
                          <a href="/">Data Security</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-wrap bg-gray">
          <div className="container">
            <div className="row gy-2">
              <div className="col-lg-6" data-aos="slide-up">
                <p className="copyright-text">
                  Copyright 2025 <a href="/">Rentelli Gence.</a> All Rights
                  Reserved.
                </p>
              </div>
              <div
                className="col-lg-6 text-center text-lg-end"
                data-aos="slide-up"
              >
                <div className="footer-links">
                  <ul>
                    <li>
                      <a href="/">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/">Contact</a>
                    </li>
                    <li>
                      <a href="/">Terms and Conditions.</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="scroll-top">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear 0s",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: 307.919,
            }}
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Footer;
