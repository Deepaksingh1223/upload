import Image from "../../Component/Image";

const CaseStudy = () => {
  return (
    <>
      <section className="position-relative space overflow-hidden pt-0" id="project-sec">
        <div className="container">
          <div className="title-area text-xl-start text-center z-index-n1">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-auto">
                <div className="shadow-title style3">Project</div>
                <h2 className="sub-title2 text-white text-anim justify-content-xl-start justify-content-center" data-aos="fade-left">Case Study</h2>
              </div>
              <div className="col-md d-none d-xl-block">
                <hr className="title-line bg-black3 mb-0" /></div>
              <div className="col-xl-3">
                <h2 className="sec-title style2 text-anim2 text-white mb-0" data-aos="fade-left">
                  Our Projects & Case Studies</h2>
              </div>
            </div>
          </div>
          <div className="row gx-80 gy-80 justify-content-center">
            <div className="col-md-6" data-aos="slideInUp">
              <div className="project-card2">
                <div className="box-img">
                  <img src={Image.servicecard1} alt="img" />
                  <a href="/" className="icon-btn"><i className="fal fa-arrow-up-right">
                  </i>
                  </a>
                </div>
                <div className="box-content">
                  <p className="box-subtitle text-white">User Research</p>
                  <h3 className="box-title text-white">
                    <a href="/">Speech recognizer using deep learning</a></h3>
                </div>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-Up">
              <div className="project-card2">
                <div className="box-img">
                  <img src={Image.servicecard2} alt="img" />
                  <a href="/" className="icon-btn">
                    <i className="fal fa-arrow-up-right"></i>
                  </a>
                </div>
                <div className="box-content">
                  <p className="box-subtitle text-white">Robotics, Program</p>
                  <h3 className="box-title text-white">
                    <a href="/">AI Machine Learning</a></h3>
                </div>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-Up">
              <div className="project-card2">
                <div className="box-img">
                  <img src={Image.servicecard3} alt="img" />
                  <a href="/" className="icon-btn">
                    <i className="fal fa-arrow-up-right"></i>
                  </a>
                </div>
                <div className="box-content">
                  <p className="box-subtitle text-white">Technology, Program</p>
                  <h3 className="box-title text-white">
                    <a href="/">Smart House Technology</a></h3>
                </div>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-Up">
              <div className="project-card2">
                <div className="box-img">
                  <img src={Image.servicecard4} alt="img" />
                  <a href="/" className="icon-btn">
                    <i className="fal fa-arrow-up-right"></i>
                  </a>
                </div>
                <div className="box-content">
                  <p className="box-subtitle text-white">AI, Program</p>
                  <h3 className="box-title text-white">
                    <a href="/">Artificial Intelligence Dev</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CaseStudy
