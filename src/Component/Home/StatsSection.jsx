import React, { useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import { stats } from "../../constants/constant";
const compactFormatter = new Intl.NumberFormat("en", {
  notation: "compact",
  compactDisplay: "short",
});

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 200 });
  }, []);

  return (
    <div className="row" ref={ref} data-aos="fade-up">
      <div className="col-md-8" style={{ margin: "0 auto" }}>
        <div className="stats-section-container">
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div className="stat-box" key={idx}>
                <h5 className="stat-title">{stat.title}</h5>
                <h2 className="stat-value">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2}
                      separator=","
                      formattingFn={(val) =>
                        `${stat.prefix || ""}${compactFormatter.format(val)}${
                          stat.suffix || ""
                        }`
                      }
                    />
                  ) : (
                    `${stat.prefix || ""}0${stat.suffix || ""}`
                  )}
                </h2>
                <p className="stat-subtitle">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
