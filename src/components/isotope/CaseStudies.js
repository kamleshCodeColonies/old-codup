import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";

const CaseStudies = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState(1);
  useEffect(() => {
    // setTimeout(() => {
    //   isotope.current = new Isotope(".image_load", {
    //     itemSelector: ".grid-item",
    //     //    layoutMode: "fitRows",
    //     percentPosition: true,
    //     masonry: {
    //       columnWidth: ".grid-item",
    //     },
    //     animationOptions: {
    //       duration: 750,
    //       easing: "linear",
    //       queue: false,
    //     },
    //   });
    // }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  // useEffect(() => {
  //   if (isotope.current) {
  //     filterKey === "*"
  //       ? isotope.current.arrange({ filter: `*` })
  //       : isotope.current.arrange({ filter: `.${filterKey}` });
  //   }
  // }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current_menu_item" : "");
  return (
    <Fragment>
      <div className="row case-study-bg">
        <div className="col-lg-12">
          <div className="consen-section-title upper text-center pb-50">
            <h5> Case Studies </h5>
            <h2> We Server the Best Works </h2>
            <h2>
              View <span> Case Studies </span>
            </h2>
          </div>
        </div>
        <div className="portfolio-shape">
          <div className="port-shape-thumb rotateme">
            <img src="assets/images/resource/red-dot.png" alt />
          </div>
          <div className="port-shape-thumb2 bounce-animate2">
            <img src="assets/images/resource/all-shape6.png" alt />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="portfolio_nav">
            <div className="portfolio_menu">
              <ul className="menu-filtering">
                <li
                  className={`c-pointer ${activeBtn(1)}`}
                  onClick={handleFilterKeyChange(1)}
                >
                  {" "}
                  Organization{" "}
                </li>
                <li
                  className={`c-pointer ${activeBtn(2)}`}
                  onClick={handleFilterKeyChange(2)}
                >
                  {" "}
                  Strategic{" "}
                </li>
                <li
                  className={`c-pointer ${activeBtn(3)}`}
                  onClick={handleFilterKeyChange(3)}
                >
                  {" "}
                  Optimization{" "}
                </li>
                <li
                  className={`c-pointer ${activeBtn(4)}`}
                  onClick={handleFilterKeyChange(4)}
                >
                  {" "}
                  Functional{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {filterKey == 1 && (
        <div className="row image_load">
          <div className="col-lg-4 col-md-6 grid-item physics english">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img src="assets/images/project/study1.png" alt />
                {/* port icon */}
                {/* <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study1.png"
                  >
                    <i className="bi bi-card-image" />
                  </a>
                </div> */}
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Organization </h6>
                      <h3>
                        {" "}
                        <Link legacyBehavior href="/itsoftware">
                          <a> IT and Software Consulting </a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* <div className="video-icon style-two">
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item physics chemistry math">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img src="assets/images/project/study2.png" alt />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study2.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Organization </h6>
                      <h3>
                        {" "}
                        <Link legacyBehavior href="/management1">
                          <a> Management Consulting </a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* <div className="video-icon style-two">
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item chemistry english">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img src="assets/images/project/study3.png" alt />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study3.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Organization </h6>
                      <h3>
                        {" "}
                        <Link legacyBehavior href="/business">
                          <a> Business Consulting</a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* <div className="video-icon style-two">
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item math english">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img src="assets/images/project/study4.png" alt />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study4.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Organization </h6>
                      <h3>
                        {" "}
                        <Link legacyBehavior href="/management2">
                          <a> Management Consulting</a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* <div className="video-icon style-two">
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item math physics">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img src="assets/images/project/study5.png" alt />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study5.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Organization </h6>
                      <h3>
                        {" "}
                        <Link legacyBehavior href="/startup1">
                          <a> Start-up Consulting </a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* <div className="video-icon style-two">
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item chemistry physics">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img src="assets/images/project/study6.png" alt />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study6.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Organization </h6>
                      <h3>
                        {" "}
                        <Link legacyBehavior href="/startup2">
                          <a> Start-up Consulting</a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* <div className="video-icon style-two">
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}

      {filterKey == 2 && (
        <div className="row image_load">
          <div className="col-lg-4 col-md-6 grid-item physics english">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img src="assets/images/project/study1.png" alt />
                {/* port icon */}
                {/* <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study1.png"
                  >
                    // <i className="bi bi-card-image" />
                  </a>
                </div> */}
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Strategic</h6>
                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="/strategicmergersacquistions"
                        >
                          <a> Strategic Mergers and Acquisitions </a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* <div className="video-icon style-two">
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item physics chemistry math">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img src="assets/images/project/study2.png" alt />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study2.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Strategic</h6>

                      <h3>
                        {" "}
                        <Link legacyBehavior href="/strategicacquisition">
                          <a> Strategic Acquisition </a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* <div className="video-icon style-two">
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item chemistry english">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img src="assets/images/project/study3.png" alt />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study3.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Strategic</h6>

                      <h3>
                        {" "}
                        <Link legacyBehavior href="/strategicalliance">
                          <a> Strategic Alliance</a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* <div className="video-icon style-two">
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item math english">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img src="assets/images/project/study4.png" alt />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study4.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Strategic</h6>

                      <h3>
                        {" "}
                        <Link legacyBehavior href="/strategyexecution">
                          <a> Strategy & Execution</a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* <div className="video-icon style-two">
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item math physics">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img src="assets/images/project/study5.png" alt />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study5.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Strategic</h6>

                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="/strategydigitaltransformation"
                        >
                          <a> Strategy & Digital Transformation </a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* <div className="video-icon style-two">
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item chemistry physics">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img src="assets/images/project/study6.png" alt />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study6.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Strategic</h6>

                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="/strategymanagementconsulting"
                        >
                          <a> Strategy & Management Consulting</a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* <div className="video-icon style-two">
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}

      {filterKey == 3 && (
        <div className="row image_load">
          <div className="col-lg-4 col-md-6 grid-item physics english">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img src="assets/images/project/study1.png" alt />
                {/* port icon */}
                {/* <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study1.png"
                  >
                    // <i className="bi bi-card-image" />
                  </a>
                </div> */}
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Optimization </h6>
                      <h3>
                        {" "}
                        <Link legacyBehavior href="/cloudmigration">
                          <a>Cloud Migration </a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* <div className="video-icon style-two">
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item physics chemistry math">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img src="assets/images/project/study2.png" alt />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study2.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Optimization </h6>
                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="/iTinfrastructureoptimization"
                        >
                          <a> IT Infrastructure Optimization </a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* <div className="video-icon style-two">
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item chemistry english">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img src="assets/images/project/study3.png" alt />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study3.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Optimization </h6>
                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="/legalandregulatorycompliance"
                        >
                          <a> Legal and Regulatory Compliance</a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* <div className="video-icon style-two">
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item math english">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img src="assets/images/project/study4.png" alt />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study4.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Optimization </h6>
                      <h3>
                        {" "}
                        <Link legacyBehavior href="/complianceassessments">
                          <a> Compliance Assessments and Remediation</a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* <div className="video-icon style-two">
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item math physics">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img src="assets/images/project/study5.png" alt />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study5.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Optimization </h6>
                      <h3>
                        {" "}
                        <Link legacyBehavior href="/frameworkdevelopment">
                          <a>
                            {" "}
                            Compliance Framework Development and Risk Assessment{" "}
                          </a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* <div className="video-icon style-two">
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item chemistry physics">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img src="assets/images/project/study6.png" alt />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study6.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Optimization </h6>
                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="/financialplanningandanalysis"
                        >
                          <a> Financial Planning and Analysis</a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* <div className="video-icon style-two">
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}

      {filterKey == 4 && (
        <div className="row image_load">
          <div className="col-lg-4 col-md-6 grid-item physics english">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img src="assets/images/project/study1.png" alt />
                {/* port icon */}
                {/* <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study1.png"
                  >
                    // <i className="bi bi-card-image" />
                  </a>
                </div> */}
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Functional </h6>
                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="/talentacquisitionandmanagement"
                        >
                          <a> Talent Acquisition and Management </a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* <div className="video-icon style-two">
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item physics chemistry math">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img src="assets/images/project/study2.png" alt />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study2.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Functional </h6>
                      <h3>
                        {" "}
                        <Link legacyBehavior href="/hrtransformation">
                          <a> HR Transformation and Talent Management </a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* <div className="video-icon style-two">
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item chemistry english">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img src="assets/images/project/study3.png" alt />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study3.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Functional </h6>
                      <h3>
                        {" "}
                        <Link legacyBehavior href="/marketingstrategy">
                          <a> Marketing Strategy and Implementation</a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* <div className="video-icon style-two">
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item math english">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img src="assets/images/project/study4.png" alt />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study4.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Functional </h6>
                      <h3>
                        {" "}
                        <Link legacyBehavior href="/leadgenerationoptimization">
                          <a> Lead Generation Optimization</a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* <div className="video-icon style-two">
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item math physics">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img src="assets/images/project/study5.png" alt />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study5.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Functional </h6>
                      <h3>
                        {" "}
                        <Link legacyBehavior href="/costoptimization">
                          <a> Cost Optimization </a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* <div className="video-icon style-two">
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item chemistry physics">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img src="assets/images/project/study6.png" alt />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study6.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Functional </h6>
                      <h3>
                        {" "}
                        <Link legacyBehavior href="/cashflowmanagement">
                          <a> Cash Flow Management</a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* <div className="video-icon style-two">
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default CaseStudies;
