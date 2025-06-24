import { useEffect } from "react";
import AOS, { init } from "aos";
import "aos/dist/aos.css";
import Image from "../Image";

const OurService = () => {
  useEffect(() => {
    init({
      duration: 1000,
      once: true,
    });
  });
  return (
    <>
      <section className="space bg-white" id="service-sec">
        <div
          className="service-bg-shape1-1 shape-mockup"
          data-bottom="0"
          data-left="50%"
        >
          <img src={Image.bgshape1} alt="img" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-8 col-xl-9 col-lg-8 col-md-10">
              <div className="title-area text-center">
                <div className="shadow-title">Services</div>
                <span className="sub-title text-anim" data-aos="fade-up">
                  OUR SERVICES
                </span>
                <h2 className="sec-title text-anim2" data-aos="fade-up">
                  Intelligent Innovations: Tailored AI Solutions
                </h2>
              </div>
            </div>
          </div>
          <div className="row gy-4 justify-content-center">
            <div className="col-xxl-3 col-xl-4 col-md-6" data-aos="fade-up">
              <div className="service-card">
                <div className="box-icon">
                  <div className="color-masking">
                    <img src={Image.serviceicon1} alt="icon" />
                  </div>
                </div>
                <h3 className="box-title">
                  <a href="/">AI Development</a>
                </h3>
                <p className="box-text">
                  Creating & optimizing models using proprietary or customer
                  data. AI model tailored to specific business.
                </p>
                <a href="/" className="link-btn style4">
                  Read More <i className="fas fa-long-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6" data-aos="fade-up">
              <div className="service-card">
                <div className="box-icon">
                  <div className="color-masking">
                    <div className="color-masking">
                      <img src={Image.serviceicon2} alt="icon" />
                    </div>
                  </div>
                </div>
                <h3 className="box-title">
                  <a href="/">Data Analytics</a>
                </h3>
                <p className="box-text">
                  Providing insights for time-sensitive decisions. Forecasting
                  trends, risks, and opportunities.
                </p>
                <a href="/" className="link-btn style4">
                  Read More <i className="fas fa-long-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6" data-aos="fade-up">
              <div className="service-card">
                <div className="box-icon">
                  <div className="color-masking">
                    <div className="color-masking">
                      <img src={Image.serviceicon3} alt="icon" />
                    </div>
                  </div>
                </div>
                <h3 className="box-title">
                  <a href="/">Machine Learning</a>
                </h3>
                <p className="box-text">
                  Building algorithms tailored to specific needs. Using advanced
                  techniques to improve accuracy and efficiency.
                </p>
                <a href="/" className="link-btn style4">
                  Read More <i className="fas fa-long-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6" data-aos="fade-up">
              <div className="service-card">
                <div className="box-icon">
                  <div className="color-masking">
                    <div className="color-masking">
                      <img src={Image.serviceicon4} alt="icon" />
                    </div>
                  </div>
                </div>
                <h3 className="box-title">
                  <a href="/">AI Consulting Services</a>
                </h3>
                <p className="box-text">
                  Helping businesses identify the most impactful AI
                  applications. Evaluating a business’s preparedness.
                </p>
                <a href="/" className="link-btn style4">
                  Read More <i className="fas fa-long-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6" data-aos="fade-up">
              <div className="service-card">
                <div className="box-icon">
                  <div className="color-masking">
                    <div className="color-masking">
                      <img src={Image.serviceicon5} alt="icon" />
                    </div>
                  </div>
                </div>
                <h3 className="box-title">
                  <a href="/">Automation and Process</a>
                </h3>
                <p className="box-text">
                  Automating repetitive tasks like data entry or invoice
                  processing. Enhancing customer support.
                </p>
                <a href="/" className="link-btn style4">
                  Read More <i className="fas fa-long-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6" data-aos="fade-up">
              <div className="service-card">
                <div className="box-icon">
                  <div className="color-masking">
                    <div className="color-masking">
                      <img src={Image.serviceicon6} alt="icon" />
                    </div>
                  </div>
                </div>
                <h3 className="box-title">
                  <a href="/">Education & Science</a>
                </h3>
                <p className="box-text">
                  Diagnostic tools, patient management systems, and predictive
                  care. Fraud detection, algorithmic trading,
                </p>
                <a href="/" className="link-btn style4">
                  Read More <i className="fas fa-long-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6" data-aos="fade-up">
              <div className="service-card">
                <div className="box-icon">
                  <div className="color-masking">
                    <div className="color-masking">
                      <img src={Image.serviceicon7} alt="icon" />
                    </div>
                  </div>
                </div>
                <h3 className="box-title">
                  <a href="/">AI Research</a>
                </h3>
                <p className="box-text">
                  Automating repetitive tasks like data entry or invoice
                  processing. Enhancing efficiency by integrating.
                </p>
                <a href="/" className="link-btn style4">
                  Read More <i className="fas fa-long-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6" data-aos="fade-up">
              <div className="service-card">
                <div className="box-icon">
                  <div className="color-masking">
                    <img src={Image.serviceicon8} alt="icon" />
                  </div>
                </div>
                <h3 className="box-title">
                  <a href="/">AI in Cybersecurity</a>
                </h3>
                <p className="box-text">
                  Ensuring system integrity through AI-driven oversight. Using
                  AI to detect anomalies and prevent.
                </p>
                <a href="/" className="link-btn style4">
                  Read More
                  <i className="fas fa-long-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurService;
