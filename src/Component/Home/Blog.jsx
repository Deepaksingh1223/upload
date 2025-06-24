import Image from "../../Component/Image";

const Blog = () => {
  return (
    <>
      <section className="overflow-hidden space" id="blog-sec">
      <div className="blog-wrap2 space bg-gray">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xxl-7 col-xl-8">
              <div className="title-area mb-50">
                <span
                  className="sub-title2 mb-30 text-anim text-white"
                  data-aos="fade-up">
                multiple type robots
                </span>
                <p
                  className="sec-title text-anim2 text-white new-font-size"
                  data-aos="fade-up">
                From industrial giants to friendly helpers, robots are everywhere! Explore the fascinating world of robotics with this guide to different robot types. Discover their uses, applications, and the future of automation!
                </p>
              </div>
            </div>

            <div className="col-auto">
              <div className="sec-btn" data-aos="fade-right">
                <a href="/" className="th-btn style-border2">
                  View All Post <i className="far fa-long-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="row gy-40 justify-content-center">
            <div className="col-xl-4 col-lg-6" data-aos="fade-up">
              <div className="blog-card style2">
                <div className="blog-img">
                  <a href="/">
                    <img src={Image.blogimg1} alt="blog" />
                  </a>
                </div>
                <div className="blog-content">
                  
                  <h3 className="box-title">
                    <a href="/">
                      The rise of AI and Robotics in retail customer experiences
                    </a>
                  </h3>
                  <a href="/" className="th-btn style-border3 w-100">
                    Read More <i className="far fa-long-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6" data-aos="fade-up">
              <div className="blog-card style2">
                <div className="blog-img">
                  <a href="/">
                    <img src={Image.blogimg2} alt="blog" />
                  </a>
                </div>
                <div className="blog-content">
                 
                  <h3 className="box-title">
                    <a href="/">
                      How AI is Transforming Businesses Across Industries
                    </a>
                  </h3>
                  <a href="/" className="th-btn style-border3 w-100">
                    Read More <i className="far fa-long-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6" data-aos="fade-up">
              <div className="blog-card style2">
                <div className="blog-img">
                  <a href="/">
                    <img src={Image.blogimg3} alt="blog" />
                  </a>
                </div>
                <div className="blog-content">
                 
                  <h3 className="box-title">
                    <a href="/">
                      Understanding Deep Learning and Neural Networks in AI
                    </a>
                  </h3>
                  <a href="/" className="th-btn style-border3 w-100">
                    Read More <i className="far fa-long-arrow-right ms-2"></i>
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

export default Blog;
