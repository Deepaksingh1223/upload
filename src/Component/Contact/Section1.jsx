import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Section1 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <div className="breadcumb-wrapper" data-overlay="black" data-opacity="7">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcumb-content">
                <h1
                  className="breadcumb-title text-anim"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  Contact Us
                </h1>
                <ul
                  className="breadcumb-menu"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
