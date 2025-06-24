import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { categories } from "../../constants/constant";
import { allCards } from "../../constants/constant";

const Section1 = () => {
  const [activeCategory, setActiveCategory] = useState("Reactive Agents");

  const filteredCards = allCards.filter(
    (card) => card.category === activeCategory
  );

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="cat-section py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="cat-title">Category</h2>
          <a href="#" className="cat-link">
            Discover More →
          </a>
        </div>

        <div className="d-flex flex-wrap gap-3 mb-4 ">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={`cat-tab btn btn-sm ${
                activeCategory === cat ? "cat-active" : "btn-outline-light"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredCards.length > 0 ? (
          <Slider
            {...sliderSettings}
            className="cat-slider"
            key={activeCategory}
          >
            {filteredCards.map((item) => (
              <div className="p-2" key={item.id}>
                <div className="cat-card">
                  <div className="cat-card-image">
                    <img
                      src={item.image}
                      alt={`Image ${item.id}`}
                      className="img-fluid"
                    />
                    <span className="cat-download">
                      {item.downloads} Download
                    </span>
                    <a href="#" className="cat-arrow">
                      ↗
                    </a>
                  </div>
                  <p className="cat-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <p className="cat-no-items">No items found in this category.</p>
        )}
      </div>
    </section>
  );
};

export default Section1;
