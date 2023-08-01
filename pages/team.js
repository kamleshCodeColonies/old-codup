import Breadcumb from "@/src/components/Breadcumb";
import ProgressBar from "@/src/components/ProgressBar";
import Layout from "@/src/layout/Layout";
import { brandListProps } from "@/src/sliderProps";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
const Team = () => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState(1);
  useEffect(() => {}, []);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current_menu_item" : "");
  return (
    <Layout>
      <Breadcumb pageName={"Our Team"} title={"Our Team"} />

      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      <div className="about-area style-three upper1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 ">
              <div className="consen-section-title">
                <h5> About Consen </h5>
                <h2>
                  {" "}
                  We Are Global Stakeholder Over 2000+ <span> Companies </span>
                </h2>
                <p className="about-text1">
                  {" "}
                  Appropriately enhance principle-centered innovation rather
                  than high standards in platforms. Credibly orchestrate
                  functional.{" "}
                </p>
              </div>
              <div className="dreamit-icon-box">
                <div className="dreamit-icon-list">
                  <ul>
                    <li>
                      <i className="bi bi-arrow-right-circle" />{" "}
                      <span> Communicate orthogonal process</span>
                    </li>
                    <li>
                      <i className="bi bi-arrow-right-circle" />{" "}
                      <span> Professionally grow cutting-edge paradigms </span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* progress bar */}
              <div className="progress-box">
                <ProgressBar value={95} />
                <div className="circle-progress-title">
                  <h4>
                    {" "}
                    Clients <br /> Satisfactions{" "}
                  </h4>
                </div>
                <div className="extra-progress">
                  <ProgressBar value={85} />
                  <div className="circle-progress-title">
                    <h4>
                      {" "}
                      Clients <br /> Satisfactions{" "}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="about-button">
                <Link legacyBehavior href="/about">
                  <a>
                    {" "}
                    <i className="bi bi-gear" /> More About{" "}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="dreamit-about-thumb">
                <img src="assets/images/about/about-2.png" alt />
                {/* about-shape */}
                <div className="about-shape-thumb1 bounce-animate2">
                  <img src="assets/images/about/about-shpe.png" alt />
                </div>
                <div className="about-shape-thumb3 bounce-animate4">
                  <img src="assets/images/about/about-shape4.png" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Brand Section */}
      {/*===================================================*/}
      <div className="brand-section upper1">
        <div className="container">
          <div className="row">
            <Swiper {...brandListProps} className="brand-list owl-carousel">
              <SwiperSlide className="single-brand">
                <img src="assets/images/resource/brand-1.png" alt="Brand" />
              </SwiperSlide>
              <SwiperSlide className="single-brand">
                <img src="assets/images/resource/brand-2.png" alt="Brand" />
              </SwiperSlide>
              <SwiperSlide className="single-brand">
                <img src="assets/images/resource/brand-3.png" alt="Brand" />
              </SwiperSlide>
              <SwiperSlide className="single-brand">
                <img src="assets/images/resource/brand-4.png" alt="Brand" />
              </SwiperSlide>
              <SwiperSlide className="single-brand">
                <img src="assets/images/resource/brand-5.png" alt="Brand" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start consen Team Area */}
      {/*==================================================*/}
      <div className="team_area style-two upp">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="consen-section-title upper text-center pb-60">
                <h5> Team Member </h5>
                <h2>
                  {" "}
                  Let’s Meet with Our <span> Experts </span>
                </h2>
              </div>
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
                    Advisory Board{" "}
                  </li>
                  <li
                    className={`c-pointer ${activeBtn(2)}`}
                    onClick={handleFilterKeyChange(2)}
                  >
                    {" "}
                    Core Team{" "}
                  </li>
                  <li
                    className={`c-pointer ${activeBtn(3)}`}
                    onClick={handleFilterKeyChange(3)}
                  >
                    {" "}
                    Executive Team{" "}
                  </li>
                  {/* <li
                    className={`c-pointer ${activeBtn(4)}`}
                    onClick={handleFilterKeyChange(4)}
                  >
                    {" "}
                    Functional{" "}
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          {filterKey == 1 && (
            <div className="row">
              <div className="row justify-content-center">
                <div className="col-lg-3 col-sm-6">
                  <div className="single_team">
                    <div className="single_team_thumb1">
                      <img src="assets/images/resource/team/1.png" alt="logo" />
                    </div>
                    <div className="single_team_content">
                      <div className="team-title">
                        <h4>Mr. Ramesh Marand</h4>
                        <span>Designer</span>
                      </div>
                      <div className="single_team_icon">
                        <a
                          href="https://linkedin.com/in/rameshahir"
                          target="_blank"
                        >
                          {" "}
                          <i class="fab fa-linkedin"></i>{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="single_team">
                    <div className="single_team_thumb1">
                      <img
                        src="assets/images/resource/team/2.png"
                        alt="image"
                      />
                    </div>
                    <div className="single_team_content">
                      <div className="team-title">
                        <h4> Mr. Dipen Shah </h4>
                        <span> IT-Executive </span>
                      </div>
                      <div className="single_team_icon">
                        <a
                          href="https://linkedin.com/in/ca-dipen-d-shah-621ba5278"
                          target="_blank"
                        >
                          {" "}
                          <i class="fab fa-linkedin"></i>{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="single_team">
                    <div className="single_team_thumb1">
                      <img
                        src="assets/images/resource/team/3.png"
                        alt="image"
                      />
                    </div>
                    <div className="single_team_content">
                      <div className="team-title">
                        <h4>Mr. Ketan Kumar</h4>
                        <span>Developer</span>
                      </div>
                      <div className="single_team_icon">
                        <a
                          href="https://linkedin.com/in/ketankumar1"
                          target="_blank"
                        >
                          {" "}
                          <i class="fab fa-linkedin"></i>{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {filterKey == 2 && (
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="single_team">
                  <div className="single_team_thumb1">
                    <img src="assets/images/resource/team/4.png" alt="logo" />
                  </div>
                  <div className="single_team_content">
                    <div className="team-title">
                      <h4>Dr. Mahipatsinh Sagar</h4>
                      <span>Chief Consultant</span> &nbsp;
                    </div>
                    <div className="single_team_icon">
                      {/* <a href="#">
                      {" "}
                      <i className="bi bi-facebook" />{" "}
                    </a> */}
                      <a
                        href="https://linkedin.com/in/mahipatsinh-sagar"
                        target="_blank"
                      >
                        {" "}
                        <i class="fab fa-linkedin"></i>{" "}
                      </a>
                      {/* <a href="#">
                      <i className="bi bi-dribbble" />
                    </a> */}
                      {/* <a href="#">
                      {" "}
                      <i className="bi bi-instagram"> </i>{" "}
                    </a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single_team">
                  <div className="single_team_thumb1">
                    <img src="assets/images/resource/team/5.png" alt="image" />
                  </div>
                  <div className="single_team_content">
                    <div className="team-title">
                      <h4> Mr. Bhaumik Shah </h4>
                      <span> Principal Consultant </span>
                    </div>
                    <div className="single_team_icon">
                      {/* <a href="#">
                        {" "}
                        <i className="bi bi-facebook" />{" "}
                      </a>
                      <a href="#">
                        {" "}
                        <i className="bi bi-twitter" />{" "}
                      </a> */}
                      <a
                        href="https://linkedin.com/in/bhaumik-shah-62755b49"
                        target="_blank"
                      >
                        {" "}
                        <i class="fab fa-linkedin"></i>{" "}
                      </a>
                      {/* <a href="#">
                        {" "}
                        <i className="bi bi-instagram"> </i>{" "}
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single_team">
                  <div className="single_team_thumb1">
                    <img src="assets/images/resource/team/6.png" alt="image" />
                  </div>
                  <div className="single_team_content">
                    <div className="team-title">
                      <h4>Mr. Nilesh Malsana</h4>
                      <span>Founder-Director</span>
                    </div>
                    <div className="single_team_icon">
                      {/* <a href="#">
                        {" "}
                        <i className="bi bi-facebook" />{" "}
                      </a>
                      <a href="#">
                        {" "}
                        <i className="bi bi-twitter" />{" "}
                      </a> */}
                      <a
                        href="https://linkedin.com/in/nileshmalsana"
                        target="_blank"
                      >
                        {" "}
                        <i class="fab fa-linkedin"></i>{" "}
                      </a>
                      {/* <a href="#">
                        {" "}
                        <i className="bi bi-instagram"> </i>{" "}
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single_team">
                  <div className="single_team_thumb1">
                    <img src="assets/images/resource/team/7.png" alt="logo" />
                  </div>
                  <div className="single_team_content">
                    <div className="team-title">
                      <h4>Miss Riddhi Pandya</h4>
                      <span>Co-founder and Legal Counsel</span>
                    </div>
                    <div className="single_team_icon">
                      {/* <a href="#">
                        {" "}
                        <i className="bi bi-facebook" />{" "}
                      </a>
                      <a href="#">
                        {" "}
                        <i className="bi bi-twitter" />{" "}
                      </a> */}
                      <a
                        href="https://linkedin.com/in/riddhi-pandya-052547266"
                        target="_blank"
                      >
                        {" "}
                        <i class="fab fa-linkedin"></i>{" "}
                      </a>
                      {/* <a href="#">
                        {" "}
                        <i className="bi bi-instagram"> </i>{" "}
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {filterKey == 3 && (
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="single_team">
                  <div className="single_team_thumb1">
                    <img src="assets/images/resource/team/11.png" alt="logo" />
                  </div>
                  <div className="single_team_content">
                    <div className="team-title">
                      <h4>Yuti Acharya </h4>
                      <span>Sr. Consultant</span> &nbsp;
                    </div>
                    <div className="single_team_icon">
                      {/* <a href="#">
                      {" "}
                      <i className="bi bi-facebook" />{" "}
                    </a> */}
                      <a
                        href="https://linkedin.com/in/yuti-acharya-541238196"
                        target="_blank"
                      >
                        {" "}
                        <i class="fab fa-linkedin"></i>{" "}
                      </a>
                      {/* <a href="#">
                      <i className="bi bi-dribbble" />
                    </a> */}
                      {/* <a href="#">
                      {" "}
                      <i className="bi bi-instagram"> </i>{" "}
                    </a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single_team">
                  <div className="single_team_thumb1">
                    <img src="assets/images/resource/team/9.png" alt="image" />
                  </div>
                  <div className="single_team_content">
                    <div className="team-title">
                      <h4> Japan Patel</h4>
                      <span> Sr. Consultant</span>
                    </div>
                    <div className="single_team_icon">
                      {/* <a href="#">
                        {" "}
                        <i className="bi bi-facebook" />{" "}
                      </a>
                      <a href="#">
                        {" "}
                        <i className="bi bi-twitter" />{" "}
                      </a> */}
                      <a
                        href="https://linkedin.com/in/japan-patel-2306b745"
                        target="_blank"
                      >
                        {" "}
                        <i class="fab fa-linkedin"></i>{" "}
                      </a>
                      {/* <a href="#">
                        {" "}
                        <i className="bi bi-instagram"> </i>{" "}
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single_team">
                  <div className="single_team_thumb1">
                    <img src="assets/images/resource/team/10.png" alt="image" />
                  </div>
                  <div className="single_team_content">
                    <div className="team-title">
                      <h4>Vraj Pandya</h4>
                      <span>Consultant</span>
                    </div>
                    <div className="single_team_icon">
                      {/* <a href="#">
                        {" "}
                        <i className="bi bi-facebook" />{" "}
                      </a>
                      <a href="#">
                        {" "}
                        <i className="bi bi-twitter" />{" "}
                      </a> */}
                      <a
                        href="https://linkedin.com/in/vraj-pandya-219633187"
                        target="_blank"
                      >
                        {" "}
                        <i class="fab fa-linkedin"></i>{" "}
                      </a>
                      {/* <a href="#">
                        {" "}
                        <i className="bi bi-instagram"> </i>{" "}
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single_team">
                  <div className="single_team_thumb1">
                    <img src="assets/images/resource/team/8.png" alt="logo" />
                  </div>
                  <div className="single_team_content">
                    <div className="team-title">
                      <h4>Prakash Bhatti</h4>
                      <span>Consultant</span>
                    </div>
                    <div className="single_team_icon">
                      {/* <a href="#">
                        {" "}
                        <i className="bi bi-facebook" />{" "}
                      </a>
                      <a href="#">
                        {" "}
                        <i className="bi bi-twitter" />{" "}
                      </a> */}
                      <a
                        href="https://linkedin.com/in/prakash-vanzara-84a78627b"
                        target="_blank"
                      >
                        {" "}
                        <i class="fab fa-linkedin"></i>{" "}
                      </a>
                      {/* <a href="#">
                        {" "}
                        <i className="bi bi-instagram"> </i>{" "}
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};
export default Team;
