import Counter from "@/src/components/Counter";
import Faqs from "@/src/components/Faqs";
import ProgressBar from "@/src/components/ProgressBar";
import Layout from "@/src/layout/Layout";
import { testimonial_list_slider, brandListProps2 } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const CaseStudies = dynamic(
  () => import("@/src/components/isotope/CaseStudies"),
  {
    ssr: false,
  }
);
const Landing1 = () => {
  return (
    <Layout header={4}>
      <div className="slider-area slider2 d-flex align-items-center" id="home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="slider-content">
                {/* <h1 style={{ color: "white", fontSize: "66px" }}>
                  {" "}
                  The Financial
                </h1>{" "}
                <h1 style={{ color: "white", fontSize: "66px" }}>
                  Planning <span>Guide</span>{" "}
                </h1> */}
                <h1 style={{ color: "white" }}> The Financial</h1>{" "}
                <h1 style={{ color: "white" }}>
                  Planning <span>Guide</span>{" "}
                </h1>
                {/* <h1>
                  {" "}
                  Planning <span>Guide</span>{" "}
                </h1> */}
                <p>
                  We are building strong relationships with our clients, based
                  on trust, transparency, and integrity
                </p>
              </div>
              <div className="slider-button mt-5">
                <Link legacyBehavior href="/service">
                  <a>
                    {" "}
                    <i className="bi bi-gear" /> Discover More{" "}
                  </a>
                </Link>
              </div>
            </div>
            {/* slider shape */}
            <div className="slider-shape">
              <div className="slider-shape-thumb2">
                <img src="assets/images/slider/shape2.png" alt="" />
              </div>
              <div className="slider-shape-thumb4">
                <img src="assets/images/slider/shape3.png" alt="" />
              </div>
              <div className="slider-shape-thumb5 dance">
                <img src="assets/images/slider/circle1.png" alt="" />
              </div>
              <div className="slider-shape-thumb6 bounce-animate">
                <img src="assets/images/slider/circle2.png" alt="" />
              </div>
              <div className="slider-shape-thumb7 bounce-animate2">
                <img src="assets/images/slider/circle3.png" alt="" />
              </div>
              <div className="slider-shape-thumb8 bounce-animate3">
                <img src="assets/images/slider/white-dot.png" alt="" />
              </div>
              <div className="slider-shape-thumb9 ">
                <img src="assets/images/slider/line.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start consen feature Area */}
      {/*==================================================*/}
      <div className="feature-area">
        <div className="container">
          <div className="row feature-bg">
            <div className="col-lg-4 col-md-6">
              <div className="single-feature-box">
                <div className="feature-box-inner">
                  <div className="feature-icon1">
                    <img src="assets/images/resource/main1.png" alt />
                  </div>
                  <div className="feature-title">
                    <h3> Business Planning </h3>
                  </div>
                  <div className="feature-text">
                    <p>
                      {" "}
                      Appropriately enhance principle-cent standards in
                      platforms. Credibly orch popular services.{" "}
                    </p>
                  </div>
                  <div className="feature-bar" />
                </div>
                {/* feature back */}
                <div className="consen-feature-back">
                  <div className="feature-back-title">
                    <h3> Strategy </h3>
                    <h2> Strategy Building </h2>
                  </div>
                  <div className="feature-back-icon">
                    <a href="#">+</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature-box uppp-1">
                <div className="feature-box-inner">
                  <div className="feature-icon1">
                    <img src="assets/images/resource/main3.png" alt />
                  </div>
                  <div className="feature-title">
                    <h3> Cloud Solutions </h3>
                  </div>
                  <div className="feature-text">
                    <p>
                      {" "}
                      Appropriately enhance principle-cent standards in
                      platforms. Credibly orch popular services.{" "}
                    </p>
                  </div>
                  <div className="feature-bar" />
                </div>
                {/* feature back */}
                <div className="consen-feature-back">
                  <div className="feature-back-title">
                    <h3> Strategy </h3>
                    <h2> Strategy Building </h2>
                  </div>
                  <div className="feature-back-icon">
                    <a href="#">+</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature-box uppp-1">
                <div className="feature-box-inner">
                  <div className="feature-icon1">
                    <img src="assets/images/resource/main2.png" alt />
                  </div>
                  <div className="feature-title">
                    <h3> Customers Support </h3>
                  </div>
                  <div className="feature-text">
                    <p>
                      {" "}
                      Appropriately enhance principle-cent standards in
                      platforms. Credibly orch popular services.{" "}
                    </p>
                  </div>
                  <div className="feature-bar" />
                </div>
                {/* feature back */}
                <div className="consen-feature-back">
                  <div className="feature-back-title">
                    <h3> Strategy </h3>
                    <h2> Strategy Building </h2>
                  </div>
                  <div className="feature-back-icon">
                    <a href="#">+</a>
                  </div>
                </div>
              </div>
            </div>
            {/* feature shape */}
            <div className="feature-shape bounce-animate2">
              <img src="assets/images/resource/all-shape4.png" alt />
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen feature Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      <div className="about-area style-three" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="dreamit-about-thumb mr-lg-4">
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
            <div className="col-lg-6 col-md-12">
              <div className="consen-section-title">
                <h5> Our Story </h5>
                <h2> From humble beginnings to IT consulting excellence </h2>
                {/* <h2>
                  {" "}
                  Over 2000+ <span> Companies </span>
                </h2> */}
                <p className="about-text1" style={{ textAlign: "justify" }}>
                  {" "}
                  Welcome to Codup, a leading IT consulting firm specializing in
                  providing comprehensive solutions to the IT and software
                  industry with over 12 years of experience and a proven track
                  record of success, we are committed to delivering exceptional
                  services to our clients, ranging from startups to established
                  enterprises.{" "}
                </p>
              </div>
              {/* <div className="dreamit-icon-box">
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
              </div> */}
              {/* progress bar */}
              <div className=" progress-box ">
                <ProgressBar value1={9.5} />

                <div className="circle-progress-title">
                  <h4>
                    {" "}
                    Clients <br /> Success Score{" "}
                  </h4>
                </div>
                <div className="extra-progress">
                  <ProgressBar value1={1} />
                  <div className="circle-progress-title">
                    <h4>
                      {" "}
                      Clients <br /> Satisfaction Score{" "}
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
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen feature Area */}
      {/*==================================================*/}
      {/* <div className="service-area style-three" id="service">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6">
              <div className="consen-section-title white pb-50 mb-1">
                <h5> What We Do? </h5>
                <h2> We Run All Kinds Of Services</h2>
                <h2>
                  {" "}
                  From <span> Technologies </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6 pl-1">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon1 upper">
                    <img src="assets/images/resource/service-icon8.png" alt />
                  </div>
                  <div className="em-service-title">
                    <h3> Business Growth </h3>
                  </div>
                  <div className="service-bar" />
                  <div className="em-service-text">
                    <p>
                      {" "}
                      Dramatically cultivate qualit user centric growth stratege
                      enable emerging.{" "}
                    </p>
                  </div>
                  <div className="service-button">
                    <Link legacyBehavior href="/service-details">
                      <a>
                        {" "}
                        Read More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 pl-1">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon1">
                    <img src="assets/images/resource/service-icon5.png" alt />
                  </div>
                  <div className="em-service-title">
                    <h3> Content Startegy </h3>
                  </div>
                  <div className="service-bar" />
                  <div className="em-service-text">
                    <p>
                      {" "}
                      Dramatically cultivate qualit user centric growth stratege
                      enable emerging.{" "}
                    </p>
                  </div>
                  <div className="service-button">
                    <Link legacyBehavior href="/service-details">
                      <a>
                        {" "}
                        Read More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 pl-1">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon1">
                    <img src="assets/images/resource/service-icon6.png" alt />
                  </div>
                  <div className="em-service-title">
                    <h3> IT Consulting </h3>
                  </div>
                  <div className="service-bar" />
                  <div className="em-service-text">
                    <p>
                      {" "}
                      Dramatically cultivate qualit user centric growth stratege
                      enable emerging.{" "}
                    </p>
                  </div>
                  <div className="service-button">
                    <Link legacyBehavior href="/service-details">
                      <a>
                        {" "}
                        Read More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 pl-1">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon1">
                    <img src="assets/images/resource/service-icon7.png" alt />
                  </div>
                  <div className="em-service-title">
                    <h3> Leadership Work </h3>
                  </div>
                  <div className="service-bar" />
                  <div className="em-service-text">
                    <p>
                      {" "}
                      Dramatically cultivate qualit user centric growth stratege
                      enable emerging.{" "}
                    </p>
                  </div>
                  <div className="service-button">
                    <Link legacyBehavior href="/service-details">
                      <a>
                        {" "}
                        Read More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="service-bottom-text">
                <p>
                  {" "}
                  Consulting and Finance Services Built Specially and Business{" "}
                  <Link legacyBehavior href="/service">
                    <a>Find Solutions</a>
                  </Link>
                </p>
              </div>
            </div>
            <div className="service-shape">
              <img src="assets/images/resource/all-shape3.png" alt />
            </div>
            <div className="service-shape1 bounce-animate2">
              <img src="assets/images/resource/all-shape6.png" alt />
            </div>
          </div>
        </div>
      </div> */}

      <div className="service-area">
        <div className="container">
          <div className="row align-items-center mb-90">
            <div className="col-lg-7 col-md-8 pl-0">
              <div className="consen-section-title mobile-center">
                <h2> We Run All Kinds Of Services</h2>
                <h2>
                  {" "}
                  From <span> Technologies </span>
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-4">
              <div className="consen-button text-right">
                <Link legacyBehavior href="/service">
                  <a>
                    {" "}
                    All Service <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6 p-0">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon">
                    <img src="assets/images/resource/service-icon.png" alt />
                  </div>
                  <div className="em-service-title">
                    {/* <h2> Interacture Capacity Planning </h2> */}
                    <h2> Organization Consulting </h2>
                  </div>
                  <div className="service-number">
                    <h1> 01 </h1>
                  </div>
                  <div className="em-service-text">
                    <p>
                      {" "}
                      Dramatically cultivate from quality user centric growth
                      strateges emerging{" "}
                    </p>
                  </div>
                  <div className="service-button">
                    <Link legacyBehavior href="/Organization">
                      <a>
                        {" "}
                        Read More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 p-0">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon">
                    <img src="assets/images/resource/service-icon2.png" alt />
                  </div>
                  <div className="em-service-title">
                    <h2> Strategic Consulting </h2>
                  </div>
                  <div className="service-number">
                    <h1> 02 </h1>
                  </div>
                  <div className="em-service-text">
                    <p>
                      {" "}
                      Dramatically cultivate from quality user centric growth
                      strateges emerging{" "}
                    </p>
                  </div>
                  <div className="service-button">
                    <Link legacyBehavior href="/Strategic">
                      <a>
                        {" "}
                        Read More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 p-0">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon">
                    <img src="assets/images/resource/service-icon3.png" alt />
                  </div>
                  <div className="em-service-title">
                    <h2> Optimization Consulting </h2>
                  </div>
                  <div className="service-number">
                    <h1> 03 </h1>
                  </div>
                  <div className="em-service-text">
                    <p>
                      {" "}
                      Dramatically cultivate from quality user centric growth
                      strateges emerging{" "}
                    </p>
                  </div>
                  <div className="service-button">
                    <Link legacyBehavior href="/Optimization">
                      <a>
                        {" "}
                        Read More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 p-0">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon">
                    <img src="assets/images/resource/service-icon.png" alt />
                  </div>
                  <div className="em-service-title">
                    <h2> Functional Consulting </h2>
                  </div>
                  <div className="service-number">
                    <h1> 04 </h1>
                  </div>
                  <div className="em-service-text">
                    <p>
                      {" "}
                      Dramatically cultivate from quality user centric growth
                      strateges emerging{" "}
                    </p>
                  </div>
                  <div className="service-button">
                    <Link legacyBehavior href="/Functional">
                      <a>
                        {" "}
                        Read More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*==================================================*/}
      {/* End consen feature Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen case study Area */}
      {/*==================================================*/}
      <div className="why-choose-us-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="consen-section-title">
                <h5>Why Choose Us? </h5>
                <h3> Experience the unmatched value</h3>
                <h3>
                  {" "}
                  of Codup's <span> Consulting Service </span>
                </h3>
                <p className="choose-text1">
                  {" "}
                  Our emphasis on building long-term partnerships with our
                  clients, not just providing one-time services.{" "}
                </p>
              </div>
              <div className="dreamit-icon-list">
                <ul>
                  <li>
                    {/* <i className="bi bi-arrow-right-circle" />{" "} */}
                    <img src="assets/images/feature/c1.png" />

                    <span>
                      {" "}
                      <b>Client Focused | Collaboration | Creativity</b>{" "}
                    </span>
                  </li>
                  <li>
                    {/* <i className="bi bi-arrow-right-circle" />{" "} */}
                    <img src="assets/images/feature/o1.png" />
                    <span>
                      {" "}
                      <b>Ownership | Openness | Optimism</b>{" "}
                    </span>
                  </li>
                  <li>
                    {/* <i className="bi bi-arrow-right-circle" />{" "} */}
                    <img src="assets/images/feature/d1.png" />
                    <span>
                      {" "}
                      <b>Data driven | Dedication | Diversity </b>
                    </span>
                  </li>
                  <li>
                    {/* <i className="bi bi-arrow-right-circle" />{" "} */}
                    <img src="assets/images/feature/u1.png" />
                    <span>
                      {" "}
                      <b>Unwavering commitment | Understanding | Unity</b>{" "}
                    </span>
                  </li>
                  <li>
                    {/* <i className="bi bi-arrow-right-circle" />{" "} */}
                    <img src="assets/images/feature/p1.png" />
                    <span>
                      {" "}
                      <b>Professionalism | Passion | Performance Driven</b>{" "}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="why-choose-button">
                <Link legacyBehavior href="/about">
                  <a>
                    {" "}
                    <i className="bi bi-gear" /> More About{" "}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-thumb">
                <img src="assets/images/resource/why-choose.png" alt />
                {/* choose shape thumb */}
                <div className="why-choose-us-image">
                  <div className="why-choose-us-shape-thumb bounce-animate">
                    <img src="assets/images/resource/all-shape2.png" alt />
                  </div>
                  <div className="why-choose-us-shape-thumb2 rotateme">
                    <img src="assets/images/resource/case-shape.png" alt />
                  </div>
                  <div className="why-choose-us-shape-thumb3 bounce-animate2">
                    <img src="assets/images/resource/case-shape2.png" alt />
                  </div>
                  <div className="why-choose-us-shape-thumb4">
                    <img src="assets/images/about/about-shape4.png" alt />
                  </div>
                </div>
                {/* end choose shape thumb */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen case study Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen Testimonial Area */}
      {/*==================================================*/}
      <div className="testimonial-area">
        <div className="container">
          <div className="row testi-rotate align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="consen-section-title white pb-50">
                <h5> Testimonials </h5>
                <h2> What they say </h2>
                <h2>
                  {" "}
                  About <span> Us </span>
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="row">
                <div className="col-6">
                  <div className="testi-counter-box upper">
                    <div className="testi-counter-title">
                      <h3 className="counter">
                        {" "}
                        <Counter end={30} />{" "}
                      </h3>
                      <span>+</span>
                      <p>Satisfied Clients Served by Our Dedicated Team</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="testi-counter-box">
                    <div className="testi-counter-title">
                      <h3 className="counter">
                        {" "}
                        <Counter end={95} />{" "}
                      </h3>
                      <span>%</span>
                      <p>Client Satisfaction and Positive Feedback </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testi-shape-thumb1 rotateme">
              <img src="assets/images/resource/testimonial-map.png" alt />
            </div>
          </div>
          <div className="row">
            <Swiper
              {...testimonial_list_slider}
              className="testimonial_list owl-carousel"
            >
              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/images/resource/testi1.png" alt />
                      </div>
                      <div className="quote-title">
                        <h4>Strategic Consulting </h4>
                        <p>CEO</p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “Codup has been an invaluable partner in our
                        organization's digital transformation journey. Their
                        strategic consulting services helped us align our
                        business objectives with technology solutions, resulting
                        in improved efficiency and accelerated growth”.
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-half" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/images/resource/testi1.png" alt />
                      </div>
                      <div className="quote-title">
                        <h4> Optimization Consulting </h4>
                        <p>COO</p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “We are extremely grateful for the exceptional guidance
                        and expertise provided by Codup's optimization
                        consulting team. Their insights and recommendations have
                        helped us streamline our processes, reduce costs, and
                        enhance overall operational efficiency”.
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-half" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/images/resource/testi3.png" alt />
                      </div>
                      <div className="quote-title">
                        <h4> Functional Consulting </h4>
                        <p>CTO </p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “Working with Codup's functional consulting team was a
                        game-changer for our company. Their deep understanding
                        of our industry and hands-on approach to solving complex
                        challenges enabled us to optimize our internal systems
                        and drive tangible business results”.
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-half" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/images/resource/testi2.png" alt />
                      </div>
                      <div className="quote-title">
                        <h4> Organization Consulting </h4>
                        <p> HR Director </p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “Codup's organization consulting services have been
                        instrumental in reshaping our company culture and
                        driving organizational excellence. Their expert guidance
                        and tailored solutions have empowered our teams to
                        collaborate effectively and deliver exceptional
                        results”.
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-half" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/images/resource/testi3.png" alt />
                      </div>
                      <div className="quote-title">
                        <h4> Strategic Consulting </h4>
                        <p> VP of Sales </p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “The strategic consulting services provided by Codup
                        have transformed our business trajectory. Their in-depth
                        market analysis, competitor insights, and growth
                        strategies have helped us identify new opportunities and
                        expand our market presence”.
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-half" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/images/resource/testi2.png" alt />
                      </div>
                      <div className="quote-title">
                        <h4> Organization Consulting </h4>
                        <p> Founder </p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “Codup's start-up consulting expertise played a crucial
                        role in our company's success. Their comprehensive
                        business plan, market entry strategies, and investor
                        pitch support were instrumental in securing funding and
                        launching our innovative software product”.
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-half" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/images/resource/testi1.png" alt />
                      </div>
                      <div className="quote-title">
                        <h4>Organization Consulting</h4>
                        <p>CEO</p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “We are immensely impressed by Codup's management
                        consulting services. Their guidance in strategic
                        decision-making, project management, and business
                        process optimization has helped us achieve operational
                        excellence and drive sustainable growth”.
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-half" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/images/resource/testi2.png" alt />
                      </div>
                      <div className="quote-title">
                        <h4> Optimization Consulting </h4>
                        <p> General Counsel </p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “Codup's legal and compliance consulting team has been a
                        reliable partner in navigating complex regulatory
                        landscapes. Their expert advice and meticulous approach
                        to compliance have ensured our company's adherence to
                        industry standards and mitigated potential risks”.
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-half" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/images/resource/testi2.png" alt />
                      </div>
                      <div className="quote-title">
                        <h4> Strategic Consulting </h4>
                        <p> CEO </p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “We owe our successful merger and acquisition to the
                        expertise of Codup's consulting team. Their meticulous
                        due diligence, integration strategies, and post-merger
                        support were pivotal in achieving a seamless transition
                        and maximizing synergies”.
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-half" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <div className="owl-dots"></div>
            </Swiper>
            <div className="testi-shape">
              <div className="testi-shape-thumb">
                <img src="assets/images/resource/all-shape5.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen Testimonial Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen case study Area */}
      {/*==================================================*/}
      <div className="case-study-area style-three" id="portfolio">
        <div className="container">
          <CaseStudies />
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen case study Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen process Area */}
      {/*==================================================*/}
      <div className="process-area style-two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="consen-section-title white pb-4 pb-lg-5">
                <h5> Process </h5>
                <h2> We follow some easy steps to </h2>
                <h2>
                  {" "}
                  developed <span> Projects </span>
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="process-text">
                <p style={{ textAlign: "justify" }}>
                  {" "}
                  Our vision and mission serve as the guiding principles for
                  everything we do. They inspire us to strive for excellence,
                  push boundaries, and make a positive impact on the world.{" "}
                </p>
              </div>
            </div>
          </div>
          {/* process shape */}
          <div className="process-shape">
            <div className="service-shape">
              <img src="assets/images/resource/all-shape3.png" alt />
            </div>
            <div className="process-shape-thumb bounce-animate2">
              <img src="assets/images/resource/all-shape6.png" alt />
            </div>
          </div>
        </div>
      </div>
      <div className="process-extra-area style-two">
        <div className="container">
          <div className="row justify-content-center process-bg">
            <div className="col-lg-4 col-sm-6">
              <div className="process-single-box2">
                <div className="process-icon-thumb">
                  <img src="assets/images/resource/a.png" alt />
                </div>
                <div className="process-title">
                  <h3>Idea Generate</h3>
                  <p>
                    Collaboratively initiate strategic ex formulate based
                    internal.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="process-single-box2 responsive">
                <div className="process-icon-thumb">
                  <img src="assets/images/resource/b.png" alt />
                </div>
                <div className="process-title">
                  <h3> System Design </h3>
                  <p>
                    Collaboratively initiate strategic ex formulate based
                    internal.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="process-single-box2 upper">
                <div className="process-icon-thumb">
                  <img src="assets/images/resource/c.png" alt />
                </div>
                <div className="process-title">
                  <h3> Report Analysis </h3>
                  <p>
                    Collaboratively initiate strategic ex formulate based
                    internal.
                  </p>
                </div>
              </div>
            </div>
            <div className="process-shape">
              <div className="process-shape-thumb3 bounce-animate3">
                <img src="assets/images/resource/all-shape2.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen process Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen Team Area */}
      {/*==================================================*/}
      <div className="team_area" id="team">
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
                  <img src="assets/images/resource/team/2.png" alt="image" />
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
                  <img src="assets/images/resource/team/3.png" alt="image" />
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
      </div>
      {/*==================================================*/}
      {/* End consen Team Area */}
      {/*==================================================*/}
      {/* Brand starts */}
      <div className="brand-section new-style">
        <div className="container">
          <div className="row">
            <Swiper {...brandListProps2} className="brand-list2 owl-carousel">
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/br1.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/br2.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/br3.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/br4.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/br1.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/br2.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/br3.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/br4.png" alt />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      {/* Brand ends */}
      {/*==================================================*/}
      {/* Start faq Area */}
      {/*==================================================*/}
      <div className="faq-area" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 pl-0">
              {/* Start Accordion */}
              <div className="tab_container">
                <div className="consen-section-title white pb-40 mb-1">
                  <h5> FAQ </h5>
                  <h2>
                    {" "}
                    Freequently Asked <span> Question </span>
                  </h2>
                </div>
                <Faqs />
              </div>
              {/* End Accordion */}
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="contract-form-bg">
                <div className="contact-form-title">
                  <h4> Schedule Consultant </h4>
                  <p> 24/7 anytime Open Our Services </p>
                </div>
                <div className="contact_from">
                  <form onSubmit={(e) => e.preventDefault()} id="dreamit-form">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form_box mb-20">
                          <input type="text" name="name" placeholder="Name*" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_box mb-20">
                          <input
                            type="email"
                            name="email"
                            placeholder="Your E-Mail*"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_box mb-20">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_box mb-20">
                          <textarea
                            name="message"
                            id="message"
                            cols={30}
                            rows={10}
                            placeholder="Write a Message"
                            defaultValue={""}
                          />
                        </div>
                        <div className="quote_button">
                          <button className="btn" type="submit">
                            {" "}
                            <i className="bi bi-gear" /> Schedule Consultant{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div id="status" />
                </div>
              </div>
            </div>
            <div className="form-shape">
              <div className="testi-shape-thumb">
                <img src="assets/images/resource/all-shape5.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen faq Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen Blog Area */}
      {/*==================================================*/}
      {/* <div className="blog-area style-two" id="blog">
        <div className="container">
          <div className="row pb-40">
            <div className="col-lg-7 col-md-6">
              <div className="consen-section-title mobile-center">
                <h2> We Run All Kinds Of Services </h2>
                <h2>
                  {" "}
                  From <span> Technologies </span>
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="consen-button text-right pt-4 pt-md-0">
                <Link legacyBehavior href="/blog-grid">
                  <a>
                    {" "}
                    <i className="bi bi-gear" /> View all Blog{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <img src="assets/images/resource/blog1.png" alt />
                  <div className="blog-top-button">
                    <a href="#"> GRAPHIC </a>
                  </div>
                </div>
                <div className="em-blog-content">
                  <div className="meta-blog-text">
                    <p> August 25, 2023 </p>
                  </div>
                  <div className="em-blog-title">
                    <h2>
                      {" "}
                      <Link legacyBehavior href="/blog-details">
                        <a> Popular Consultants are big Meetup 2023 </a>
                      </Link>{" "}
                    </h2>
                  </div>
                  <div className="em-blog-icon">
                    <div className="em-blog-thumb">
                      <img src="assets/images/resource/blog-icon.png" alt />
                    </div>
                    <div className="em-blog-icon-title">
                      <h6> Alex Collins </h6>
                    </div>
                  </div>
                  <div className="blog-button">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        {" "}
                        Learn More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <img src="assets/images/resource/blog2.png" alt />
                  <div className="blog-top-button">
                    <a href="#"> DEVELOPMENT </a>
                  </div>
                </div>
                <div className="em-blog-content">
                  <div className="meta-blog-text">
                    <p> August 21, 2023 </p>
                  </div>
                  <div className="em-blog-title">
                    <h2>
                      {" "}
                      <Link legacyBehavior href="/blog-details">
                        <a> How to Increase Business Products Sales </a>
                      </Link>{" "}
                    </h2>
                  </div>
                  <div className="em-blog-icon">
                    <div className="em-blog-thumb">
                      <img src="assets/images/resource/blog-icon.png" alt />
                    </div>
                    <div className="em-blog-icon-title">
                      <h6> Julia Moris </h6>
                    </div>
                  </div>
                  <div className="blog-button">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        {" "}
                        Learn More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <img src="assets/images/resource/blog3.png" alt />
                  <div className="blog-top-button">
                    <a href="#"> DESIGN </a>
                  </div>
                </div>
                <div className="em-blog-content">
                  <div className="meta-blog-text">
                    <p> August 20, 2023 </p>
                  </div>
                  <div className="em-blog-title">
                    <h2>
                      {" "}
                      <Link legacyBehavior href="/blog-details">
                        <a> Top 10 Most Populars Google Chrome app</a>
                      </Link>
                    </h2>
                  </div>
                  <div className="em-blog-icon">
                    <div className="em-blog-thumb">
                      <img src="assets/images/resource/blog-icon.png" alt />
                    </div>
                    <div className="em-blog-icon-title">
                      <h6> Amantha </h6>
                    </div>
                  </div>
                  <div className="blog-button">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        {" "}
                        Learn More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-shape">
              <div className="port-shape-thumb2 bounce-animate2">
                <img src="assets/images/resource/all-shape6.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/*==================================================*/}
      {/* End consen Blog Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen Subscribe Area */}
      {/*==================================================*/}
      <div className="subscribe-area style-two mt-5 mt-sm-0">
        <div className="container">
          <div className="subscribe">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-12">
                <div className="subscribe-title">
                  <h1>Get your Free Business Consolution</h1>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <a href="mailto:connect@codup.tech" className="subscribe-icon">
                  <i className="bi bi-envelope" />
                </a>
                <div className="subscribe-title2">
                  <h1> Requirement Submission </h1>
                  <p>
                    {" "}
                    <a
                      href="mailto:consulting@codup.tech"
                      style={{ color: "blue" }}
                    >
                      consulting@codup.tech{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Landing1;
