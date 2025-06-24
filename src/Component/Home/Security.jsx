import Image from "../Image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Security = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      <div className="space">
        <div className="row justify-content-center" data-aos="fade-up">
          <div className="col-xxl-7 col-xl-8">
            <div className="title-area text-center mb-50">
              <h1
                className="sec-title text-anim2 text-gradient innovations-taxt aos-init aos-animate"
                data-aos="fade-left"
              >
                Security
              </h1>

              <p
                className="s text-anim2 aos-init aos-animate"
                data-aos="fade-up"
              >
                Protect your assets and transactions with our advanced
                encryption technology and decentralized infrastructure.
              </p>
            </div>
          </div>
        </div>
        <div className="row" data-aos="fade-right">
          <div className="secure-lock-wrapper">
            <div className="dots-bg"></div>

            <div className="ripple-container" data-aos="fade-left">
              <span className="ripple"></span>
              <span className="ripple"></span>
              <span className="ripple"></span>
            </div>

            <div className="lock-container" data-aos="fade-up">
              <img src={Image.lockimg} alt="lock" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Security;
