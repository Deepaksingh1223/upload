import Image from "../Image";

const industryData = [
  {
    id: 1,
    title: "Healthcare AI",
    image: Image.featurethumbshape2 ,
    thumbShape: Image.featurethumbshape1,
    desc1:
      "AI for diagnostics, personalized treatment, and patient care optimization in healthcare.",
    desc2:
      "Enhancing decision-making and automating administrative tasks for better outcomes.",
  },
  {
    id: 2,
    title: "Finance AI",
    image: Image.featurethumbshape3,
    thumbShape: Image.featurethumbshape1,
    desc1:
      "AI in finance offers fraud detection, predictive analytics, and portfolio management.",
    desc2: "Automates financial operations and customer service with chatbots.",
  },
  {
    id: 3,
    title: "Education AI",
    image: Image.featurethumbshape4,
    thumbShape: Image.featurethumbshape1,
    desc1:
      "Adaptive learning, personalized tutoring, and performance tracking using AI in education.",
    desc2: "Improves access, engagement, and outcomes across learning systems.",
  },
  {
    id: 4,
    title: "Manufacturing AI",
    image: Image.featurethumbshape5,
    thumbShape: Image.featurethumbshape1,
    desc1:
      "Smart factories powered by AI increase efficiency, reduce downtime, and predict failures.",
    desc2: "AI enhances quality control and supply chain optimization.",
  },
  {
    id: 5,
    title: "Fintech AI",
    image: Image.featurethumbshape6,
    thumbShape: Image.featurethumbshape1,
    desc1:
      "Fintech uses AI for fraud detection, credit scoring, and personalized financial products.",
    desc2: "Drives customer insights and innovation in digital finance.",
  },
  {
    id: 6,
    title: "E-commerce AI",
    image: Image.featurethumbshape7,
    thumbShape: Image.featurethumbshape1,
    desc1:
      "AI transforms online shopping via recommendation engines, chatbots, and inventory insights.",
    desc2: "Boosts user engagement, sales conversion, and customer support.",
  },
];

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
                data-aos="slideInUp">
                Industries Where AI is Optimizing the Processes
              </h2>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="title-area text-start text-white-50" data-aos="slideInUp">
              <p>
                Our AI agency delivers transformative solutions tailored to each industry's needs.
                Explore how artificial intelligence is revolutionizing sectors through automation,
                analytics, and personalized services.
              </p>
            </div>
          </div>
        </div>

        <div className="feature-wrap3">
          <ul className="nav nav-tabs feature-tab" role="tablist">
            {industryData.map((industry, index) => (
              <li className="nav-item" role="presentation" key={industry.id}>
                <button className={`nav-link ${index === 0 ? "active" : ""}`} id={`feature-tab${industry.id}`} data-bs-toggle="tab" data-bs-target={`#featureTab${industry.id}`} type="button" role="tab" aria-controls={`featureTab${industry.id}`} aria-selected={index === 0 ? "true" : "false"} >
                  <span className="box-number">#{(industry.id).toString().padStart(2, "0")}</span>
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
                    <img src={industry.image} alt={industry.title} className="tab-img" />
                  </div>
                  <div className="feature-tab-content">
                    <h4 className="box-title text-white">{industry.title}</h4>
                    <p className="box-text text-white-50">{industry.desc1}</p>
                    <p className="box-text mt-30 text-white-50">{industry.desc2}</p>
                    <div className="btn-wrap mt-40 text-white-50">
                      <a className="icon-btn style4" href="service-details.html">
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
