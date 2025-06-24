import { industryData } from "../../constants/constant";

const Faq = () => {
  return (
    <section className="space overflow-hidden">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-6">
            <div className="title-area">
              <span
                className="sub-title2 text-gradient text-uppercase mb-30"
                data-aos="slideInUp"
              >
                Industries We Serve
              </span>
              <h2
                className="sec-title style2 fw-bold text-uppercase text-anim2 text-white"
                data-aos="slideInUp"
              >
                Industries Where AI is Optimizing the Processes
              </h2>
            </div>
          </div>
          <div className="col-xl-4">
            <div
              className="title-area text-start text-white-50"
              data-aos="slideInUp"
            >
              <p>
                Our AI agency delivers transformative solutions tailored to each
                industry's needs. Explore how artificial intelligence is
                revolutionizing sectors through automation, analytics, and
                personalized services.
              </p>
            </div>
          </div>
        </div>

        <div className="feature-wrap3">
          <ul className="nav nav-tabs feature-tab" role="tablist">
            {industryData.map((industry, index) => (
              <li className="nav-item" role="presentation" key={industry.id}>
                <button
                  className={`nav-link ${index === 0 ? "active" : ""}`}
                  id={`feature-tab${industry.id}`}
                  data-bs-toggle="tab"
                  data-bs-target={`#featureTab${industry.id}`}
                  type="button"
                  role="tab"
                  aria-controls={`featureTab${industry.id}`}
                  aria-selected={index === 0 ? "true" : "false"}
                >
                  <span className="box-number">
                    #{industry.id.toString().padStart(2, "0")}
                  </span>
                  {industry.title}
                </button>
              </li>
            ))}
          </ul>

          <div className="tab-content">
            {industryData.map((industry, index) => (
              <div
                key={industry.id}
                className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
                id={`featureTab${industry.id}`}
                role="tabpanel"
                aria-labelledby={`feature-tab${industry.id}`}
              >
                <div className="feature-tab-content-wrap">
                  <div
                    className="feature-tab-thumb"
                    style={{
                      backgroundImage: `url(${industry.thumbShape})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="tab-img"
                    />
                  </div>
                  <div className="feature-tab-content">
                    <h4 className="box-title text-white">{industry.title}</h4>
                    <p className="box-text text-white-50">{industry.desc1}</p>
                    <p className="box-text mt-30 text-white-50">
                      {industry.desc2}
                    </p>
                    <div className="btn-wrap mt-40 text-white-50">
                      <a
                        className="icon-btn style4"
                        href="service-details.html"
                      >
                        <i className="fal fa-arrow-right text-white"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
