import { useEffect } from "react";
import AOS, { init } from "aos";
import "aos/dist/aos.css";
import Image from "../Image";

const PricingPlan = () => {
  useEffect(() => {
    init({
      duration: 1000,
      once: true,
    });
  });
  return (
    <>
      <section className="space-bottom overflow-hidden">
        <div className="price-wrap1 bg-black space">
          <div
            className="price-bg-shape1-2 shape-mockup"
            data-left="50%"
            data-bottom="0"
          >
            <img src={Image.bgshape1} alt="img" />
          </div>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-xxl-12">
                <div className="title-area text-center">
                  <span
                    className="sub-title style4 text-anim"
                    data-aos="fade-up"
                  >
                    PRICING PLAN
                  </span>
                  <h2
                    className="sec-title text-white text-anim2"
                    data-aos="fade-up"
                  >
                    Affordable Pricing Plan
                  </h2>
                </div>
              </div>
            </div>
            <div className="row gy-30 justify-content-center">
              <div className="col-xl-4 col-md-6" data-aos="fade-up">
                <div className="price-card bg-gray">
                  <h3 className="box-title text-white">Basic</h3>
                  <p className="box-text text-gray3">
                    This is an excellent option for people & small businesses
                    who are starting out.
                  </p>
                  <div className="price_card-wrap bg-black">
                    <h4 className="price-card_price text-white">
                      $25.95
                      <span className="duration text-gray3">/Per month</span>
                    </h4>
                    <p className="box-subtitle text-gray3">
                      Up to 10 Members per month
                    </p>
                  </div>
                  <div className="checklist text-gray3">
                    <ul>
                      <li>
                        <i className="fas fa-circle-check"></i> Cultivation
                        plans and field boundaries
                      </li>
                      <li className="unavailable">
                        <i className="fas fa-circle-check"></i> Scouting
                        app/module
                      </li>
                      <li className="unavailable">
                        <i className="fas fa-circle-check"></i> Satellite
                        relative crop moisture
                      </li>
                    </ul>
                  </div>
                  <div className="btn-wrap">
                    <a href="/" className="th-btn style4 w-100">
                      Choose Your plan
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6" data-aos="fade-up">
                <div className="price-card bg-gray">
                  <h3 className="box-title text-white">Standard</h3>
                  <p className="box-text text-gray3">
                    This is an excellent option for people & small businesses
                    who are starting out.
                  </p>
                  <div className="price_card-wrap bg-black">
                    <h4 className="price-card_price">
                      $85.95
                      <span className="duration text-gray3">/Per month</span>
                    </h4>
                    <p className="box-subtitle text-gray3">
                      Up to 10 Members per month
                    </p>
                  </div>
                  <div className="checklist text-gray3">
                    <ul>
                      <li>
                        <i className="fas fa-circle-check"></i> Cultivation
                        plans and field boundaries
                      </li>
                      <li>
                        <i className="fas fa-circle-check"></i> Scouting
                        app/module
                      </li>
                      <li className="unavailable">
                        <i className="fas fa-circle-check"></i> Satellite
                        relative crop moisture
                      </li>
                    </ul>
                  </div>
                  <div className="btn-wrap">
                    <a href="/" className="th-btn style4 w-100">
                      Choose Your plan
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6" data-aos="fade-up">
                <div className="price-card bg-gray">
                  <h3 className="box-title text-white">Premium</h3>
                  <p className="box-text text-gray3">
                    This is an excellent option for people & small businesses
                    who are starting out.
                  </p>
                  <div className="price_card-wrap bg-black">
                    <h4 className="price-card_price text-white">
                      $165.95
                      <span className="duration text-gray3">/Per month</span>
                    </h4>
                    <p className="box-subtitle text-gray3">
                      Up to 10 Members per month
                    </p>
                  </div>
                  <div className="checklist text-gray3">
                    <ul>
                      <li>
                        <i className="fas fa-circle-check"></i> Cultivation
                        plans and field boundaries
                      </li>
                      <li>
                        <i className="fas fa-circle-check"></i> Scouting
                        app/module
                      </li>
                      <li>
                        <i className="fas fa-circle-check"></i> Satellite
                        relative crop moisture
                      </li>
                    </ul>
                  </div>
                  <div className="btn-wrap">
                    <a href="/" className="th-btn style4 w-100">
                      Choose Your plan
                    </a>
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

export default PricingPlan;
