import Image from "../../Component/Image";

const Team = () => {
  return (
    <>
      <section className="space overflow-hidden team-area-1">
        <div className="container">
          <div className="title-area text-xl-start text-center">
            <div className="row justify-content-center align-items-center">
              <div className="col-xl-auto">
                <h2
                  className="sub-title2 text-white text-anim justify-content-xl-start justify-content-center"
                  data-aos="fade-left"
                >
                  AI Expert Team
                </h2>
              </div>
              <div className="col-md d-none d-xl-block">
                <hr className="title-line bg-black3 mb-0" />
              </div>
              <div className="col-xl-4">
                <h2
                  className="sec-title style2 text-anim2 text-white mb-0"
                  data-aos="fade-left"
                >
                  Our Professionals AI Expert Team.
                </h2>
              </div>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-xl-6">
              <div className="team-wrap1" data-aos="fade-left">
                <p className="text-gray3">
                  Artificial Intelligence (AI) technology refers to the
                  simulation of human intelligence in machines that are
                  programmed to think, learn, and make decisions. AI technology
                  leverages data, algorithms, and computing power to automate
                  tasks, optimize processes, and provide insights that improve
                  business performance and enhance user experiences.
                </p>
                <p className="text-gray3 mb-0">
                  AI is transforming industries by enabling machines to perform
                  tasks that previously required human intervention,
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="th-team team-card" data-aos="fade-up">
                <div className="team-img">
                  <img src={Image.teamimg1} alt="Team" />
                </div>
                <div className="team-card-content">
                  <h3 className="box-title">
                    <a href="/">Alex Javed</a>
                  </h3>
                </div>
                <div className="th-social">
                  <a target="_blank" href="/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a target="_blank" href="/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a target="_blank" href="/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a target="_blank" href="/">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="th-team team-card" data-aos="fade-up">
                <div className="team-img">
                  <img src={Image.teamimg2} alt="Team" />
                </div>
                <div className="team-card-content">
                  <h3 className="box-title">
                    <a href="/">Jenny William</a>
                  </h3>
                </div>
                <div className="th-social">
                  <a target="_blank" href="/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a target="_blank" href="/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a target="_blank" href="/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a target="_blank" href="/">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="th-team team-card" data-aos="fade-up">
                <div className="team-img">
                  <img src={Image.teamimg3} alt="Team" />
                </div>
                <div className="team-card-content">
                  <h3 className="box-title">
                    <a href="/">Daniel Thomas</a>
                  </h3>
                </div>
                <div className="th-social">
                  <a target="_blank" href="/">
                    <i className="fab fa-facebook-f"></i>
                  </a>{" "}
                  <a target="_blank" href="/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a target="_blank" href="/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a target="_blank" href="/">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="th-team team-card" data-aos="fade-up">
                <div className="team-img">
                  <img src={Image.teamimg4} alt="Team" />
                </div>
                <div className="team-card-content">
                  <h3 className="box-title">
                    <a href="/">Jessica Lauren</a>
                  </h3>
                </div>
                <div className="th-social">
                  <a target="_blank" href="/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a target="_blank" href="/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a target="_blank" href="/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a target="_blank" href="/">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="th-team team-card" data-aos="fade-up">
                <div className="team-img">
                  <img src={Image.teamimg5} alt="Team" />
                </div>
                <div className="team-card-content">
                  <h3 className="box-title">
                    <a href="/">Alex Joseph</a>
                  </h3>
                </div>
                <div className="th-social">
                  <a target="_blank" href="/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a target="_blank" href="/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a target="_blank" href="/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a target="_blank" href="/">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 align-self-center text-center">
              <a
                href="/"
                className="circle-btn th-btn style4 mt-xl-0 mt-30"
                data-aos="fade-up"
              >
                View All Members
                <i className="far fa-long-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
