import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "../Image";

const GetInTouc = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      className="space-bottom overflow-hidden contact-area-1 position-relative z-index-common bg-white"
      id="contact-sec"
    >
      <div className="container">
        <div className="consulting-wrap1 bg-smoke">
          <div className="row align-items-center">
            <div className="col-xxl-6">
              <div className="page-img mb-0">
                <img src={Image.consultingthumb11} alt="img" />
              </div>
            </div>
            <div className="col-xxl-6">
              <div className="consulting-form-wrap1">
                <div className="title-area mb-20">
                  <h2 className="sec-title">Get In Touch!</h2>
                </div>
                <div className="contact-form-v1">
                  <form
                    action=""
                    method="POST"
                    className="contact-form ajax-contact"
                  >
                    <div className="row">
                      <div className="form-group style-border col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Your name"
                        />
                        <i className="far fa-user"></i>
                      </div>
                      <div className="form-group style-border col-md-6">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Email Address"
                        />
                        <i className="far fa-envelope"></i>
                      </div>
                      <div className="form-group style-border col-md-6">
                        <input
                          type="number"
                          className="form-control"
                          name="phone"
                          id="phone"
                          placeholder="Phone Number"
                        />
                        <i className="far fa-phone"></i>
                      </div>
                      <div className="form-group style-border col-md-6">
                        <select
                          name="subject"
                          id="subject"
                          className="form-select bg-white"
                        >
                          <option value="" disabled hidden>
                            Select Subject
                          </option>
                          <option value="Web Development">
                            Web Development
                          </option>
                          <option value="Brand Marketing">
                            Brand Marketing
                          </option>
                          <option value="UI/UX Designing">
                            UI/UX Designing
                          </option>
                          <option value="Digital Marketing">
                            Digital Marketing
                          </option>
                        </select>
                      </div>
                      <div className="form-group style-border col-12">
                        <input
                          type="text"
                          className="form-control"
                          name="company"
                          id="company"
                          placeholder="Company name"
                        />
                        <i className="far fa-circle-info"></i>
                      </div>
                      <div className="form-group style-border col-12">
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="3"
                          className="form-control"
                          placeholder="How can we help you? feel free to get in touch!*"
                        ></textarea>
                      </div>
                      <div className="form-btn col-12">
                        <button className="th-btn style5" type="button">
                          Submit Message
                        </button>
                      </div>
                    </div>
                    <p className="form-messages mb-0 mt-3"></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouc;
