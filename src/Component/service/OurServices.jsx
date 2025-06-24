  
import "aos/dist/aos.css";
import {useState } from "react";
import { serviceData } from "../../constants/constant";

const OurServices = () => {
   const [hovered, setHovered] = useState(null);

    return (
        <>
        <section className="overflow-hidden space-bottom" id="service-sec">
            <div className="service-wrap2 bg-gray space">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-7 col-xl-8">
                            <div className="title-area text-center mb-50">
                                <span className="sub-title2 justify-content-center mb-30 text-anim text-white" data-aos="fade-up">
                                    Our Services
                                </span>
                                <h2 className="sec-title style2 text-anim2 text-white" data-aos="fade-up">
                                    AI Technology Services Aim To Provide Intelligent Solutions.
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="service-list-wrap" data-aos="fade-up">
                                {serviceData.map((item, index) => (
                                    <div className={`service-card2 hover-item ${hovered === index ? 'item-active' : ''}`}
                                        key={item.id}
                                        onMouseEnter={() => setHovered(index)}
                                        onMouseLeave={() => setHovered(null)}>
                                        <div className="box-img">
                                            <img src={item.img} alt="img" />
                                        </div>
                                        <div className="box-content">
                                            <div className="box-number text-white">{`0${item.id}`}</div>
                                            <h3 className="box-title text-white">
                                                <a href="/">{item.title}</a>
                                            </h3>
                                            <p className="box-text">{item.desc}</p>
                                        </div>
                                        <a href="/" className="icon-btn style2">
                                            <i className="fal fa-arrow-right"></i>
                                        </a>
                                    </div>
                                ))}
                            </div>
                            <div className="btn-wrap justify-content-center mt-60">
                                <a href="/" className="icon-btn style2">
                                    <i className="fal fa-angle-down"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    );
}

export default OurServices
