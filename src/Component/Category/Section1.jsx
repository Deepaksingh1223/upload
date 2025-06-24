
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section1 = () => {

    const categories = [
        "Reactive Agents", "Deliberative Agents", " Hybrid Agents", "Learning Agents", "Autonomous Agents",
        " Multi-Agent Systems (MAS)", "Conversational Agents", "Ethical or Value-Aligned Agents", "Expert Systems"
    ];

    const allCards = [
        {
            id: 1, category: "Reactive Agents", downloads: "18,234",
            image: "https://png.pngtree.com/recommend-works/png-clipart/20240720/ourmid/pngtree-3d-robot-chatbot-ai-servers-technology-png-image_13158549.png",
            description: "Sleek metallic surfaces in shades of purple."
        },
        { id: 2, category: "Reactive Agents", downloads: "15,987", image: "https://png.pngtree.com/png-clipart/20230615/ourmid/pngtree-3d-robot-and-lock-cyber-security-concept-png-image_7143602.png",
             description: "3D dreamy looks, colorful flowers and spheres." },
        { id: 1, category: "Reactive Agents", downloads: "18,234", image: "https://png.pngtree.com/recommend-works/png-clipart/20240920/ourmid/pngtree-3d-robot-machine-learning-ai-in-science-and-business-png-image_13878879.png",
             description: "Sleek metallic surfaces in shades of purple." },
        { id: 2, category: "Reactive Agents", downloads: "15,987", image: "https://png.pngtree.com/png-vector/20240731/ourmid/pngtree-d-robot-companion-smart-ai-toy-in-black-and-white-on-png-image_13310289.png"
            , description: "3D dreamy looks, colorful flowers and spheres." },
        
        {
            id: 3, category: "Deliberative Agents", downloads: "12,000", image: "https://png.pngtree.com/png-vector/20250520/ourmid/pngtree-cute-3d-robot-character-with-glowing-eyes-and-small-arms-colorful-png-image_16335592.png",
            description: "Beautiful natural scenery with trees and sunlight."
        },
        {
            id: 4, category: " Hybrid Agents", downloads: "25,000", image: "https://png.pngtree.com/png-vector/20240325/ourmid/pngtree-3d-robot-character-with-headphones-png-image_12239709.png",
            description: "Dynamic live photo of nature in motion."
        },
        {
            id: 5, category: "Learning Agents", downloads: "9,876", image: "https://png.pngtree.com/png-vector/20241020/ourmid/pngtree-futuristic-3d-robot-figure-png-image_14131077.png",
            description: "Soft pink fantasy clouds and gradients."
        },
        {
            id: 6, category: "Autonomous Agents", downloads: "8,765", image: "https://png.pngtree.com/png-vector/20241105/ourmid/pngtree-3d-robots-png-image_14286354.png",
            description: "Dark theme with shadows and highlights."
        },
        {
            id: 7, category: " Multi-Agent Systems (MAS)", downloads: "11,111", image: "https://png.pngtree.com/png-vector/20240802/ourmid/pngtree-3d-robot-tin-toy-design-pattern-isolated-onthe-transparent-background-png-image_13333742.png",
            description: "Futuristic robot design in chrome and neon."
        },
        {
            id: 8, category: "Conversational Agents", downloads: "22,222", image: "https://png.pngtree.com/png-vector/20240802/ourmid/pngtree-3d-robot-tin-toy-design-pattern-isolated-onthe-transparent-background-png-image_13333742.png",
            description: "Cute animal portrait with natural background."
        },
        {
            id: 9, category: "Ethical or Value-Aligned Agents", downloads: "13,131", image: "https://png.pngtree.com/png-clipart/20230907/ourmid/pngtree-d-robot-chatbot-ai-in-science-and-business-technology-engineering-concept-png-image_10021336.png",
            description: "Dreamy glowing shapes in a surreal environment."
        },
        {
            id: 10, category: "Expert Systems", downloads: "7,000", image: "https://png.pngtree.com/png-vector/20240921/ourmid/pngtree-3d-robot-in-suit-and-tie-on-transparent-background-png-image_13885514.png",
            description: "Stack of fantasy books glowing in the dark."
        },
       
    ];

    const [activeCategory, setActiveCategory] = useState("Reactive Agents");

    const filteredCards = allCards.filter(card => card.category === activeCategory);

    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } }
        ]
    };

    return (
        <section className="cat-section py-5">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="cat-title">Category</h2>
                    <a href="#" className="cat-link">Discover More →</a>
                </div>

                <div className="d-flex flex-wrap gap-3 mb-4">
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCategory(cat)}
                            className={`cat-tab btn btn-sm ${activeCategory === cat ? "cat-active" : "btn-outline-light"}`}>
                            {cat}
                        </button>
                    ))}
                </div>

                {filteredCards.length > 0 ? (
                    <Slider {...sliderSettings} className="cat-slider" key={activeCategory}>
                        {filteredCards.map((item) => (
                            <div className="p-2" key={item.id}>
                                <div className="cat-card">
                                    <div className="cat-card-image">
                                        <img src={item.image} alt={`Image ${item.id}`} className="img-fluid" />
                                        <span className="cat-download">{item.downloads} Download</span>
                                        <a href="#" className="cat-arrow">↗</a>
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
