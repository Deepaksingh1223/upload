import React, { useEffect } from "react";
import Image from "../Image";
import Aos from "aos";
import "aos/dist/aos.css";

const Calculator = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <style>
        {`
        .img-anim {
          display: none;
        } 
      `}
      </style>

      <section className="why-sec3 overflow-hidden space">
        <div className="container-fluid p-0">
          <div className="why-wrap3">
            <div className="why-box3-1">
              <div
                className="img1"
                style={{ backgroundImage: `url(${Image.whythumbshape3}) ` }}
              >
                <img src={Image.whythumbshape1} alt="img" />
              </div>
              <div
                className="img2"
                style={{ backgroundImage: `url(${Image.whythumbshape3}) ` }}
              >
                <img src={Image.whythumbshape2} alt="img" />
              </div>
            </div>
            <div
              className="why-wrap-content"
              style={{ backgroundColor: "#000000" }}
            >
              <div className="why-content">
                <div className="title-area">
                  <span
                    className="sub-title2 text-gradient text-uppercase mb-30 opecity"
                    data-aos="fade-up"
                  >
                    Why Choose Us
                  </span>
                  <h2
                    className="sec-title style2 fw-bold text-uppercase text-anim2 text-white"
                    data-aos="fade-up"
                  >
                    Empowering Businesses with Cutting-Edge AI Solutions to
                    Drive Innovation.
                  </h2>
                  <p data-aos="fade-up" className="text-white-50">
                    Our AI agency is a cutting-edge technology partner that
                    specializes in delivering artificial intelligence solutions
                    to help businesses streamline operations, improve
                    decision-making, and enhance customer experiences. By
                    leveraging the power of AI,
                  </p>
                </div>

                <div className="why-feature-wrap3">
                  <div className="why-feature-card" data-aos="fade-up">
                    <h4 className="box-title text-white">Expertise</h4>
                    <p className="box-text text-white-50">
                      Our team has extensive experience in building and
                      deploying AI solutions across various industries.
                    </p>
                  </div>

                  <div className="why-feature-card" data-aos="fade-up">
                    <h4 className="box-title text-white">Customization</h4>
                    <p className="box-text text-white-50">
                      We offer tailor-made solution designed to address your
                      unique business challenges. various industries.
                    </p>
                  </div>

                  <div className="why-feature-card" data-aos="fade-up">
                    <h4 className="box-title text-white">Innovation</h4>
                    <p className="box-text text-white-50">
                      We stay ahead of the curve by adopting the latest AI
                      advancements & technology. various industries.
                    </p>
                  </div>

                  <div className="why-feature-card" data-aos="fade-up">
                    <h4 className="box-title text-white">Scalability</h4>
                    <p className="box-text text-white-50">
                      Our solutions are designed to grow with your business,
                      ensuring long-term value. various industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Calculator;
