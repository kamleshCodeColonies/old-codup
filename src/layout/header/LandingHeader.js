import Link from "next/link";
import { Fragment, useState } from "react";
import { DaskTopMenusMenus } from "./Menus";

const LandingHeader = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      {/* <div className="header_top_menu d-flex align-items-center landing_header ">
        <div className="container">
          <div className="row d-flex align-items-cente">
            <div className="col-lg-8 col-sm-8">
              <div className="header_top_menu_address">
                <div className="header_top_menu_text">
                  <p>Welcome! to Consen Finance Consultant.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 pr-0">
              <div className="header_top_menu_icon text-right">
                <div className="menu-title">
                  <h6>FOLLOW US</h6>
                </div>
                <div className="header_top_menu_icon_inner">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="bi bi-facebook" />
                      </a>
                    </li>
                    <li className="menu-icon">
                      <a href="#">
                        <i className="bi bi-dribbble" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-twitter" />
                      </a>
                    </li>
                    <li className="menu-icon">
                      <a href="#">
                        <i className="bi bi-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/*==================================================*/}
      {/* End consen Header Top Menu Area Css */}
      {/*===================================================*/}
      {/*==================================================*/}
      {/* Start consen Main Menu Area */}
      {/*==================================================*/}
      {/* <div id="sticky-header" className="consen_nav_manu style-two header____">
        <div className="container">
          <div className="row header-bg align-items-center">
            <div className="col-lg-3">
              <div className="logo">
                <Link legacyBehavior href="/">
                  <a className="logo_img" title="consen">
                    <img src="assets/images/logo2.png" alt="logo" />
                  </a>
                </Link>
                <Link legacyBehavior href="/">
                  <a className="main_sticky" title="consen">
                    <img src="assets/images/logo2.png" alt="logo" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-9 pl-0 pr-0 d-flex align-items-center justify-content-around">
              <nav className="consen_menu">
                <ul className="nav_scroll">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#service">Services </a>
                  </li>
                  <li>
                    <a href="#portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="#team">Team</a>
                  </li>
                  <li>
                    <a href="#blog">Blog</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>

                <div className="search-box-btn search-box-outer">
                  <div className="nav-btn navSidebar-button">
                    <a className="c-pointer" onClick={() => setToggle(true)}>
                      <i className="fas fa-align-left" />
                    </a>
                  </div>
                </div>
                <div className="header-button">
                  <Link legacyBehavior href="contact">
                    Request a Quote
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div> */}

      <div id="sticky-header" className="consen_nav_manu header____">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="logo">
                <Link legacyBehavior href="/">
                  <a className="logo_img" title="consen">
                    <img
                      src="assets/images/logo-white.png"
                      alt="logo"
                      className="img_fluid"
                      style={{ width: "113px" }}
                    />
                  </a>
                </Link>
                <Link legacyBehavior href="/">
                  <a className="main_sticky" title="consen">
                    <img
                      src="assets/images/logo-color.png"
                      alt="logo"
                      style={{ width: "113px" }}
                      className="img_fluid"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-9 pl-0 pr-0">
              <nav className="consen_menu">
                <DaskTopMenusMenus />
                <div className="header-button">
                  <Link legacyBehavior href="/contact">
                    <a>Schedule Consultation</a>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default LandingHeader;
