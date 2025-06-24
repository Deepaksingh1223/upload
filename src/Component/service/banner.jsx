import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
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
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Service
                </h1>
                <ul
                  className="breadcumb-menu"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Service </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
