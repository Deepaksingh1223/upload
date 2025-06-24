import Image from "../Component/Image";
import  { useState } from 'react';
import { Link } from "react-router-dom";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu */}
      <div className={`th-menu-wrapper ${menuOpen ? "menu-open" : ""}`}>
        <div className="th-menu-area text-center">
          <button className="th-menu-toggle" onClick={closeMenu}>
            <i className="fal fa-times"></i>
          </button>
          <div className="mobile-logo">
            <a href="/">
              <img src={Image.mdlogo} alt="Robor" />
            </a>
          </div>
          <div className="th-mobile-menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/main">About Us</Link></li>
              <li><Link to="/service">Services</Link></li>  
              <li><Link to="/Category">Category</Link> </li>
              <li><Link to="/Contact">Contact Us</Link></li> 
            <li className="d-xl-block d-xl-none">
            <Link to="/Contact" className="th-btn style2 text-white"> Get Started Now <i className="far fa-long-arrow-right ms-2"></i></Link>
             </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="th-header header-layout1 onepage-nav" >
        <div className="sticky-wrapper">
          <div className="menu-area">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <a href="/">
                      <img src={Image.logo} alt="Robor" />
                    </a>
                  </div>
                </div>

                <div className="col-auto">
                  {/* Desktop Menu */}
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <li><Link to="/">Home</Link> </li>
                      <li><Link to="/main">About Us</Link> </li> 
                      <li><Link to="/service">Services</Link></li> 
                      <li><Link to="/Category">Category</Link> </li>
                      <li><Link to="/Contact">Contact Us</Link> </li> 
                    </ul>
                  </nav>

                  {/* Hamburger Button */}
                  <div className="header-button d-flex d-lg-none">
                    <button
                      type="button"
                      className="th-menu-toggle icon-btn"
                      onClick={toggleMenu}
                    >
                      <i className="far fa-bars"></i>
                    </button>
                  </div>
                </div>

                <div className="col-auto d-none d-xl-block">
                  <div className="header-button">
                    <a href="#contact-sec" className="th-btn style2">
                      Get Started Now <i className="far fa-long-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
