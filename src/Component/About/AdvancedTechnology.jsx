import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "../Image";

const AdvancedTechnology = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="space bg-smoke overflow-hidden">
      <div className="container">
        <div className="row gy-60 gx-80 flex-row-reverse">
          <div className="col-xxl-6 align-self-end">
            <div className="feature-img-box4" data-aos="fade-right">
              <div className="row gy-4">
                <div className="col-md-6">
                  <div className="img1">
                    <img src={Image.advancedfeature1} alt="img" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img2 mb-4">
                    <img src={Image.advancedfeature2} alt="img" />
                  </div>
                  <div className="img3">
                    <img src={Image.advancedfeature3} alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-6 mt-5">
            <div className="title-area">
              <span
                className="sub-title before-none text-uppercase mb-30"
                data-aos="fade-up"
              >
                Advanced Technology
              </span>
              <h2 className="sec-title fw-bold text-anim2" data-aos="fade-up">
                The Future is Here: Advance Technology
              </h2>
            </div>

            <div className="row gy-4">
              <div className="col-md-6" data-aos="fade-up">
                <div className="feature-card style3">
                  <div className="box-icon">
                    <img src={Image.featureicon1} alt="icon" />
                  </div>
                  <h3 className="box-title">Tech support</h3>
                  <p className="box-text">
                    To empower businesses with intelligent, scalable, and
                    impactful solutions that drive progress
                  </p>
                </div>
              </div>

              <div className="col-md-6" data-aos="fade-up">
                <div className="feature-card style3">
                  <div className="box-icon">
                    <img src={Image.featureicon2} alt="icon" />
                  </div>
                  <h3 className="box-title">Robo Genius</h3>
                  <p className="box-text">
                    To empower businesses with intelligent, scalable, and
                    impactful solutions that drive progress
                  </p>
                </div>
              </div>

              <div className="col-md-6" data-aos="fade-up">
                <div className="feature-card style3">
                  <div className="box-icon">
                    <img src={Image.featureicon2} alt="icon" />
                  </div>
                  <h3 className="box-title">Image Generation</h3>
                  <p className="box-text">
                    To empower businesses with intelligent, scalable, and
                    impactful solutions that drive progress
                  </p>
                </div>
              </div>

              <div className="col-md-6" data-aos="fade-up">
                <div className="feature-card style3">
                  <div className="box-icon">
                    <img src={Image.featureicon4} alt="icon" />
                  </div>
                  <h3 className="box-title">Chatbots</h3>
                  <p className="box-text">
                    To empower businesses with intelligent, scalable, and
                    impactful solutions that drive progress
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedTechnology;
