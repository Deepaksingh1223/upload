import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from "react-intersection-observer";

const Flexibility = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [showSVG, setShowSVG] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 200 });
  }, []);

  useEffect(() => {
    if (inView) {
      setShowSVG(true);
    }
  }, [inView]);

  return (
    <section className="space sectionbg-jhilmil" ref={ref}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-9 col-lg-8 col-md-10">
            <div className="title-area text-center">
              <div className="center-div">
                <p>Innovative Web3 Solutions</p>
              </div>
              <h2
                className="sec-title text-anim2 text-gradient innovations-taxt"
                data-aos="fade-up"
              >
                Intelligent Innovations: Tailored AI Solutions
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-7" data-aos="fade-right">
            <div className="text-div">
              <svg
                className="section1-svg-icon"
                width="45"
                height="45"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <rect
                  x="14"
                  y="14"
                  width="8"
                  height="8"
                  stroke="black"
                  strokeWidth="2"
                />
                <rect
                  x="42"
                  y="14"
                  width="8"
                  height="8"
                  stroke="black"
                  strokeWidth="2"
                />
                <rect
                  x="14"
                  y="42"
                  width="8"
                  height="8"
                  stroke="black"
                  strokeWidth="2"
                />
                <rect
                  x="42"
                  y="42"
                  width="8"
                  height="8"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1="22"
                  y1="18"
                  x2="42"
                  y2="18"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1="18"
                  y1="22"
                  x2="18"
                  y2="42"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1="22"
                  y1="46"
                  x2="42"
                  y2="46"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1="46"
                  y1="22"
                  x2="46"
                  y2="42"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>

              <h1 className="Future-Forward-text">Future-Forward Solutions</h1>
              <p className="Future-Forward-text-p">
                Our Web3 fintech simplifies complex finance for everyone. With
                innovative technology, we make navigating the financial future
                easier.
              </p>
              <a href="/" className="th-btn style2">
                Get Started <i className="far fa-long-arrow-right ms-2"></i>
              </a>
            </div>
          </div>

          <div className="col-md-5" data-aos="fade-left">
            <div className="card-right">
              {showSVG && (
                <svg
                  width="242"
                  height="242"
                  viewBox="0 0 242 242.729"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" stroke="#d3d3d3" strokeWidth="2">
                    <line x1="121" y1="0" x2="121" y2="0">
                      <animate
                        attributeName="x2"
                        from="121"
                        to="242"
                        dur="0.8s"
                        begin="0s"
                        fill="freeze"
                      />
                      <animate
                        attributeName="y2"
                        from="0"
                        to="121"
                        dur="0.8s"
                        begin="0s"
                        fill="freeze"
                      />
                    </line>
                    <line x1="242" y1="121" x2="242" y2="121">
                      <animate
                        attributeName="x2"
                        from="242"
                        to="121"
                        dur="0.8s"
                        begin="0.8s"
                        fill="freeze"
                      />
                      <animate
                        attributeName="y2"
                        from="121"
                        to="242"
                        dur="0.8s"
                        begin="0.8s"
                        fill="freeze"
                      />
                    </line>
                    <line x1="121" y1="242" x2="121" y2="242">
                      <animate
                        attributeName="x2"
                        from="121"
                        to="0"
                        dur="0.8s"
                        begin="1.6s"
                        fill="freeze"
                      />
                      <animate
                        attributeName="y2"
                        from="242"
                        to="121"
                        dur="0.8s"
                        begin="1.6s"
                        fill="freeze"
                      />
                    </line>
                    <line x1="0" y1="121" x2="0" y2="121">
                      <animate
                        attributeName="x2"
                        from="0"
                        to="121"
                        dur="0.8s"
                        begin="2.4s"
                        fill="freeze"
                      />
                      <animate
                        attributeName="y2"
                        from="121"
                        to="0"
                        dur="0.8s"
                        begin="2.4s"
                        fill="freeze"
                      />
                    </line>
                  </g>

                  <g>
                    <path
                      d="M90.607 30.597C107.286 13.919 134.327 13.919 151.005 30.597C167.683 47.276 167.683 74.317 151.005 90.995C134.327 107.673 107.286 107.673 90.607 90.995C73.929 74.317 73.929 47.276 90.607 30.597Z"
                      fill="transparent"
                      stroke="white"
                      strokeDasharray="6,3"
                    />
                    <path
                      d="M30.209 90.995C46.888 74.317 73.929 74.317 90.607 90.995C107.286 107.673 107.286 134.714 90.607 151.393C73.929 168.071 46.888 168.071 30.209 151.393C13.531 134.714 13.531 107.673 30.209 90.995Z"
                      fill="transparent"
                      stroke="white"
                      strokeDasharray="6,3"
                    />
                    <path
                      d="M151.005 90.995C167.684 74.317 194.725 74.317 211.403 90.995C228.081 107.673 228.081 134.714 211.403 151.393C194.725 168.071 167.684 168.071 151.005 151.393C134.327 134.714 134.327 107.673 151.005 90.995Z"
                      fill="transparent"
                      stroke="white"
                      strokeDasharray="6,3"
                    />
                    <path
                      d="M90.607 151.392C107.286 134.714 134.327 134.714 151.005 151.392C167.683 168.071 167.683 195.112 151.005 211.79C134.327 228.468 107.286 228.468 90.607 211.79C73.929 195.112 73.929 168.071 90.607 151.392Z"
                      fill="transparent"
                      stroke="white"
                      strokeDasharray="6,3"
                    />

                    <circle cx="181.2" cy="121.2" r="2.5" fill="white" />
                    <circle cx="120.8" cy="181.8" r="2.5" fill="white" />
                    <circle cx="60.4" cy="121.2" r="2.5" fill="white" />
                    <circle cx="120.8" cy="60.8" r="2.5" fill="white" />

                    <path
                      d="M60.556 181.959L120.438 122.077L180.32 181.959L120.438 241.841Z"
                      fill="transparent"
                      stroke="rgb(217,217,217)"
                    />
                  </g>
                </svg>
              )}
            </div>
          </div>
        </div>

        <div className="row mt-5 pt-5" data-aos-delay="1000">
          <div className="col-md-5" data-aos="fade-left">
            <div className="card-right">
              {showSVG && (
                <svg
                  width="260"
                  height="260"
                  viewBox="0 0 260 260"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="130"
                    cy="130"
                    r="120"
                    stroke="white"
                    fill="none"
                  />

                  <circle
                    cx="130"
                    cy="82"
                    r="45"
                    stroke="white"
                    fill="none"
                    stroke-dasharray="5,5"
                  />

                  <circle cx="85" cy="160" r="45" stroke="white" fill="none" />

                  <circle cx="175" cy="160" r="45" stroke="white" fill="none" />

                  <g>
                    <circle cx="130" cy="10" r="4" fill="white" />
                    <circle cx="250" cy="140" r="4" fill="white" />
                    <circle cx="130" cy="250" r="4" fill="white" />
                    <circle cx="10" cy="140" r="4" fill="white" />

                    <animateTransform
                      attributeName="transform"
                      attributeType="XML"
                      type="rotate"
                      from="0 130 130"
                      to="360 130 130"
                      dur="5s"
                      repeatCount="indefinite"
                    />
                  </g>
                </svg>
              )}
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-5" data-aos="fade-right">
            <div className="text-div">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="section1-svg-icon2"
                height="45"
                width="45"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="4" y1="21" x2="4" y2="14" />
                <line x1="4" y1="10" x2="4" y2="3" />
                <line x1="12" y1="21" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12" y2="3" />
                <line x1="20" y1="21" x2="20" y2="16" />
                <line x1="20" y1="12" x2="20" y2="3" />
                <line x1="1" y1="14" x2="7" y2="14" />
                <line x1="9" y1="8" x2="15" y2="8" />
                <line x1="17" y1="16" x2="23" y2="16" />
              </svg>

              <h1 className="Future-Forward-text">Efficient Smart Contract </h1>
              <p className="Future-Forward-text-p">
                Our platform ensures your smart contracts are executed
                seamlessly, optimizing both speed and accuracy.
              </p>
              <a href="/" className="th-btn style2">
                Get Started <i className="far fa-long-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-5 pt-5">
          <div className="col-md-7" data-aos="fade-right">
            <div className="text-div">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="section1-svg-icon2"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M12 7l4 2v4l-4 2-4-2V9l4-2z" />
                <path d="M12 7v4" />
                <path d="M16 9l-4 2" />
                <path d="M8 9l4 2" />
              </svg>

              <h1 className="Future-Forward-text">
                Unleash the Potential of Finance
              </h1>
              <p className="Future-Forward-text-p">
                Experience the power of decentralized finance right at your
                fingertips, transforming the way you manage your assets and
                engage with the financial world.
              </p>
              <a href="/" className="th-btn style2">
                Get Started <i className="far fa-long-arrow-right ms-2"></i>
              </a>
            </div>
          </div>

          <div className="col-md-5" data-aos="fade-left">
            <div
              className="card-right text-center d-flex justify-content-center align-items-center"
              style={{ height: "300px" }}
            >
              {showSVG && (
                <svg
                  viewBox="0 0 300 300"
                  width="350"
                  height="350"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="60"
                    y1="150"
                    x2="300"
                    y2="150"
                    stroke="white"
                    stroke-dasharray="6,6"
                    stroke-width="1"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="0"
                      to="-12"
                      dur="0.6s"
                      repeatCount="indefinite"
                    />
                  </line>

                  <g fill="none" stroke="#ffffff55" stroke-width="1.2">
                    <circle cx="100" cy="150" r="20" stroke-dasharray="4,3" />
                    <circle cx="120" cy="150" r="40" />
                    <circle cx="140" cy="150" r="60" />
                    <circle cx="160" cy="150" r="80" />
                    <circle cx="180" cy="150" r="100" />
                  </g>

                  <circle
                    cx="180"
                    cy="150"
                    r="100"
                    stroke="white"
                    stroke-width="1.5"
                    fill="none"
                  />

                  <g fill="white">
                    <circle r="3" cx="100" cy="130">
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 100 150"
                        to="360 100 150"
                        dur="5s"
                        repeatCount="indefinite"
                      />
                    </circle>

                    <circle r="3" cx="120" cy="110">
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="360 120 150"
                        to="0 120 150"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </circle>

                    <circle r="3" cx="140" cy="90">
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 140 150"
                        to="360 140 150"
                        dur="5s"
                        repeatCount="indefinite"
                      />
                    </circle>

                    <circle r="3" cx="160" cy="70">
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="360 160 150"
                        to="0 160 150"
                        dur="6s"
                        repeatCount="indefinite"
                      />
                    </circle>

                    <circle r="3" cx="180" cy="50">
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 180 150"
                        to="360 180 150"
                        dur="7s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flexibility;
