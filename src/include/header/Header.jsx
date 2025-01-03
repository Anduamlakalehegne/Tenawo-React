import React from "react";
import logo from "../../assets/img/Header3.jpg";

export default function Header() {
  return (
    <header className="cursor-light">
      {/* Navigation */}
      <nav className="navbar navbar-top-default nav-radius navbar-expand-lg">
        <div className="container">
          <a href="#home" title="Logo" className="logo scroll">
            {/* Logo Default */}
            {/* <img src={logo} alt="logo" className="logo-dark default" /> */}
            <h2>Tenawo</h2>
          </a>

          {/* Nav Link */}
          <div className="collapse navbar-collapse">
            <div className="navbar-nav ml-auto">
              <a className="nav-link scroll" href="#home">
                Home
              </a>
              <a className="nav-link scroll" href="#ourblogs">
                Our Blogs
              </a>

              <a className="nav-link scroll" href="#services">
                Services
              </a>
              <a className="nav-link scroll" href="#testimonial">
                Our Team
              </a>
              <a className="nav-link scroll" href="#whymegaone">
                Why Tenawo
              </a>
              <a className="nav-link scroll" href="#contactus">
                Contact us
              </a>
            </div>
          </div>
        </div>

        {/* Side menu button */}
        <a
          href="javascript:void(0)"
          className="parallax-btn sidemenu_btn"
          id="sidemenu_toggle"
        >
          <div className="animated-wrap sidemenu_btn_inner">
            <div className="animated-element">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </a>
      </nav>

      {/* Side Nav */}
      <div className="side-menu">
        <div className="inner-wrapper">
          <span className="btn-close link" id="btn_sideNavClose"></span>
          <nav className="side-nav w-100">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link scroll" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link scroll" href="#whymegaone">
                  Why Tenawo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link scroll" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link scroll" href="#testimonial">
                  Our Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link scroll" href="#ourblogs">
                  Our Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link scroll" href="#contactus">
                  Contact us
                </a>
              </li>
            </ul>
          </nav>

          <div className="side-footer text-white w-100">
            <ul className="social-icons-simple">
              <li className="animated-wrap">
                <a className="animated-element" href="javascript:void(0)">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="animated-wrap">
                <a className="animated-element" href="javascript:void(0)">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="animated-wrap">
                <a className="animated-element" href="javascript:void(0)">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
            <p className="text-white">
              &copy; 2020 MegaOne. Made With Love by Themesindustry
            </p>
          </div>
        </div>
      </div>
      <a id="close_side_menu" href="javascript:void(0);"></a>
      {/* end side menu */}
    </header>
  );
}
