import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "../Image";

const Certificate = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <div
        className="space overflow-hidden contact-area-1 position-relative z-index-common bg-white"
        id="contact-sec"
      >
        <div className="container">
          <div className="consulting-wrap1 bg-smoke">
            <div className="row align-items-center">
              <div className="col-xxl-6">
                <div className="page-img mb-0">
                  <iframe
                    src={Image.PDF}
                    title="Certificate PDF"
                    width="100%"
                    height="800px"
                    style={{ border: "none" }}
                  ></iframe>
                </div>
              </div>
              <div className="col-xxl-6">
                <div className="consulting-form-wrap1">
                  <p className="mt-15 aos-init aos-animate">
                    Incorporated on 17th June 2025, Rentelligence Limited is a
                    privately held company registered in England and Wales
                    (Company Number: 16522288). Formed under the Companies Act
                    2006, we are committed to bringing innovation and
                    intelligence to the property rental and management industry.
                    At Rentelligence, we aim to revolutionize the way rental
                    properties are managed and experienced — by both landlords
                    and tenants. Whether it's leveraging technology to
                    streamline processes or providing data-driven insights for
                    smarter decision-making, our mission is to make property
                    rental more efficient, transparent, and accessible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
