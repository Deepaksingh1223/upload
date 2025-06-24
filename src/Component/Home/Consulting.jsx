import Image from "../../Component/Image";

const Consulting = () => {
  return (
    <>
      <section className="cta-area-2 overflow-hidden" id="contact-sec">
        <div
          className="cta-wrap2"
          data-bg-src="assets/img/bg/cta-bg-2.png"
          data-overlay="black"
          data-opacity="7"
        >
          <div className="cta-thumb2-1" data-aos="fade-left">
            <div className="img">
              <img src={Image.Consultingcta1} alt="img" />
            </div>
          </div>

          <div className="cta-thumb2-2" data-aos="fade-right">
            <div className="img">
              <img src={Image.Consultingcta2} alt="img" />
            </div>
          </div>

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="title-area text-center mb-0">
                  <span
                    className="sub-title2 justify-content-center mb-30 text-anim text-white"
                    data-aos="fade-up"
                  >
                    AI Consulting
                  </span>

                  <h2
                    className="sec-title style2 text-anim2 text-white"
                    data-aos="fade-up"
                  >
                    Get 40% off your first month of Artificial Intelligent support —
                    Please Consulting Us
                  </h2>

                  <div className="btn-wrap justify-content-center mt-50">
                    <a href="/" className="th-btn style-border2">
                      Get Started Now <i className="far fa-long-arrow-right ms-2"></i>
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

export default Consulting;
