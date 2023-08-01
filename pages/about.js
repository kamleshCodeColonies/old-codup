import Breadcumb from "@/src/components/Breadcumb";
import Counter from "@/src/components/Counter";
import Faqs from "@/src/components/Faqs";
import LogoSlider from "@/src/components/LogoSlider";
import Layout from "@/src/layout/Layout";
import { testimonial_list_slider } from "@/src/sliderProps";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import ProssessBar from "@/src/components/ProssessBar";

const About = () => {
  return (
    <Layout>
      <Breadcumb pageName={"About Us"} title={"About Us"} />
      {/* ========================================================= */}
      {/* Start abouts area  */}
      {/* ========================================================= */}
      {/* <div className="abouts_areas">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="singles_abouts_boxs">
                <div className="abouts_thumb">
                  <img src="assets/images/resource/abouts_1.png" alt />
                  <div className="about-inner-content">
                    <div className="abouts_titles">
                      <h3>
                        All in one web solution for your digital business{" "}
                      </h3>
                      <div className="abouts_icons">
                        <a href="#">
                          <i className="fas fa-angle-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="singles_abouts_boxs">
                <div className="abouts_thumb">
                  <img src="assets/images/resource/abouts_2.png" alt />
                  <div className="abouts_titles upper">
                    <h3>The top best digital agency in new road market usa </h3>
                    <div className="abouts_icons">
                      <a href="#">
                        <i className="fas fa-angle-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Vision-mission starts */}
      <div className="process-area style-two">
        <div className="container">
          {/* <div className="row align-items-center">
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
          </div> */}
          {/* process shape */}
          {/* <div className="process-shape">
            <div className="service-shape">
              <img src="assets/images/resource/all-shape3.png" alt />
            </div>
            <div className="process-shape-thumb bounce-animate2">
              <img src="assets/images/resource/all-shape6.png" alt />
            </div>
          </div> */}
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
                  <h3>Vision</h3>
                  <p>
                    To be the most trusted and respected consulting firm in the
                    IT and software industry, known for our exceptional services
                    and client satisfaction.
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
                  <h3> Mission </h3>
                  <p>
                    Our mission is to provide innovative and reliable consulting
                    services to IT companies and software businesses, enabling
                    them to achieve their goals and optimize their performance.
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
                  <h3> Intention </h3>
                  <p>
                    Empower IT and software companies through comprehensive
                    support services, enabling them to outsource non-core tasks
                    cost-effectively, focus on their core competencies, and
                    achieve optimal performance.
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
      {/* Vision-mission ends */}

      <div className="process-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="row process-bg">
                <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box">
                    <div className="process-number">
                      <span>1</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        {/* Idea <span> Generate </span> */}
                        Versatility
                      </h3>
                      <p>
                        From organizational excellence to strategic advisory,
                        optimization, and functional expertise, we deliver
                        tailored solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box upper">
                    <div className="process-number">
                      <span>2</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        {" "}
                        {/* System <span> Design </span> */}
                        Efficiency
                      </h3>
                      <p>
                        We meticulously plan, implement, and monitor every step
                        of the process, delivering results on time and within
                        budget.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box upper1">
                    <div className="process-number">
                      <span>3</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        {" "}
                        {/* 24/7 <span> Support </span> */}
                        Expertise
                      </h3>
                      <p>
                        Dedicated team of consultants leverages industry best
                        practices and deep expertise to deliver optimal impact
                        for your organization.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box upper2">
                    <div className="process-number">
                      <span>4</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        {" "}
                        {/* Sales <span> Generate </span> */}
                        Partnership
                      </h3>
                      <p>
                        Our team becomes an extension of your organization,
                        aligning our strategies and efforts with your vision for
                        success.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="process-shape">
                  <div className="process-thumb">
                    <img src="assets/images/resource/process-shape.png" alt />
                  </div>
                  <div className="process-thumb1">
                    <img src="assets/images/resource/dreamit-shape.png" alt />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 pl-lg-50">
              <div className="consen-section-title mt-4 mt-lg-0">
                <h2> Your Dedicated and </h2>
                <h2>
                  {" "}
                  dependable <span> Ally </span>
                </h2>
              </div>
              <div className="lines style-three pt-30 pb-10">
                <div className="line" />
              </div>
              <div className="dreamit-smart-title">
                <h4>
                  {" "}
                  Introducing <span>Codup</span>{" "}
                </h4>
                <p>
                  With 12+ years of hands-on experience, we specialize in
                  providing practical and cost-effective solutions for the IT
                  and software industry.
                </p>
                <p>
                  We aspire to work together with you as strategic partners,
                  offering comprehensive support services that allow you to
                  focus on your core tasks and technical expertise. Our
                  Association will be a transformative journey where
                  collaboration and cost advantage converge, propelling your
                  business to new heights.
                </p>
              </div>
              <div className="about-button">
                <Link legacyBehavior href="/about">
                  <a>
                    {" "}
                    More About <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="row pt-50">
            <div className="col-lg-12">
              <div className="dreamits-top-title">
                <h3> More Then 5K+ Brands with work Consen</h3>
              </div>
            </div>
          </div>
          <div className="row pt-30">
            <Swiper {...brandListProps} className="brand-list owl-carousel">
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/allian.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/figma.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/google.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/redit.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/allian.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/figma.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/google.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/redit.png" alt />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div> */}
        </div>
      </div>
      {/*=================================================*/}

      {/* Start consen Testimonial Area */}
      {/*==================================================*/}
      <div className="testimonial-area">
        <div className="container">
          <div className="row testi-rotate align-items-center">
            <div className="col-lg-7 col-md-6">
              {/* <div className="consen-section-title white pb-50">
                <h5> Testimonials </h5>
                <h2> Consen Trusted Customers </h2>
                <h2>
                  {" "}
                  Awesome <span> Reviews </span>
                </h2>
              </div> */}
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="row">
                <div className="col-6">
                  <div className="testi-counter-box upper">
                    <div className="testi-counter-title">
                      <h3 className="counter"> 10</h3>
                      <span>X</span>
                      <p> Return on Investments on our fees </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="testi-counter-box">
                    <div className="testi-counter-title">
                      <h3 className="counter">
                        {" "}
                        1<span>/</span>3{" "}
                      </h3>
                      {/* <span></span> */}
                      <p> Our Service Cost at Just of the Actual Expense</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testi-shape-thumb1 rotateme">
              <img src="assets/images/resource/testimonial-map.png" alt />
            </div>
          </div>
          {/* <div className="row">
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
                        <h4>Philip Anthorpy</h4>
                        <p>UI Designer</p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
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
                        <h4> Shilpa Shethy </h4>
                        <p> CEO, Founder </p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
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
                        <h4> David Alexon </h4>
                        <p> MH Manager </p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
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
                        <h4> Shilpa Shethy </h4>
                        <p> CEO, Founder </p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
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
                        <h4> David Alexon </h4>
                        <p> MH Manager </p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
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
                        <h4>Philip Anthorpy</h4>
                        <p>UI Designer</p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
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
                        <h4> David Alexon </h4>
                        <p> MH Manager </p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
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
            </Swiper>
            <div className="testi-shape">
              <div className="testi-shape-thumb">
                <img src="assets/images/resource/all-shape5.png" alt />
              </div>
            </div>
          </div> */}

          <div className="row testi-rotate align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="consen-section-title">
                <h5> Features </h5>
                <h2 className="all">
                  {" "}
                  We Are Global Stakeholder Over 2000+ <span> Companies </span>
                </h2>
                <p className="about-text1 all">
                  {" "}
                  Appropriately enhance principle-centered innovation rather
                  than high standards in platforms. Credibly orchestrate
                  functional.{" "}
                </p>
              </div>
              <div className="dreamit-icon-list">
                <ul>
                  <li>
                    <i
                      className="bi bi-arrow-right-circle"
                      style={{ color: "#ff3c00" }}
                    />{" "}
                    <span> Communicate orthogonal process </span>
                  </li>
                  <li>
                    <i
                      className="bi bi-arrow-right-circle"
                      style={{ color: "#ff3c00" }}
                    />{" "}
                    <span> Professionally grow cutting-edge paradigms </span>
                  </li>
                  <li>
                    <i
                      className="bi bi-arrow-right-circle"
                      style={{ color: "#ff3c00" }}
                    />{" "}
                    <span> Professionally grow cutting-edge paradigms </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              {/* Hero */}
              <Tab.Container defaultActiveKey={"t1"}>
                <div className="tab">
                  <Nav as="ul" className="tabs">
                    <li>
                      <Nav.Link className="c-pointer" as="a" eventKey={"t1"}>
                        Experience
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link className="c-pointer" as="a" eventKey={"t2"}>
                        Expertise
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link className="c-pointer" as="a" eventKey={"t3"}>
                        Evolution
                      </Nav.Link>
                    </li>
                  </Nav>{" "}
                  {/* / tabs */}
                  <Tab.Content className="tab_content">
                    <Tab.Pane eventKey={"t1"} className="tabs_item">
                      <img
                        src="assets/images/resource/img-1.png"
                        alt="business image"
                      />

                      <ul className="tabs-inner-list pt-2 ">
                        <li className="all">
                          <i className="fas fa-check" />
                          <span>Rather than unique Idea.</span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>Entums estibulum dignissim posuere</span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>Quality users after Breed Applications.</span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>Market Positioning Expertise.</span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>Rather than unique Idea.</span>
                        </li>
                      </ul>
                    </Tab.Pane>{" "}
                    {/* / tabs_item */}
                    <Tab.Pane eventKey={"t2"} className="tabs_item">
                      <img
                        src="assets/images/resource/img-1.png"
                        alt="business image"
                      />
                      {/* <ul className="tabs-inner-list pt-2">
                      <li className="all">
                        <i className="fas fa-check" />
                        <span>Maximize Your Potential.</span>
                      </li>
                      <li>
                        <i className="fas fa-check" />
                        <span>Master Your Core.</span>
                      </li>
                      <li>
                        <i className="fas fa-check" />
                        <span>Drive Core Achievement.</span>
                      </li>
                      <li>
                        <i className="fas fa-check" />
                        <span>Supercharge Your Growth.</span>
                      </li>
                      <li>
                        <i className="fas fa-check" />
                        <span>Your Core, Our Care.</span>
                      </li>
                    </ul> */}
                      <ul className="tabs-inner-list pt-2 ">
                        <li className="all">
                          <i className="fas fa-check" />
                          <span>
                            Maximize Your Potential. &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp;
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>
                            Master Your Core. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp;
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>Drive Core Achievement.</span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>
                            Supercharge Your Growth.&nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp;
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>Your Core, Our Care.</span>
                        </li>
                      </ul>
                    </Tab.Pane>{" "}
                    {/* / tabs_item */}
                    <Tab.Pane eventKey={"t3"} className="tabs_item">
                      <img
                        src="assets/images/resource/img-1.png"
                        alt="business image"
                      />
                      <ul className="tabs-inner-list pt-2">
                        <li className="all">
                          <i className="fas fa-check" />
                          <span>Outsource. Dominate. Succeed.</span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>Streamline Your Success.</span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>Unleash the Power Within.</span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>Elevate Your Excellence</span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>Ignite Your Core Competencies.</span>
                        </li>
                      </ul>
                    </Tab.Pane>{" "}
                    {/* / tabs_item */}
                  </Tab.Content>{" "}
                  {/* / tab_content */}
                </div>
              </Tab.Container>
              {/* / tab */}
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen Testimonial Area */}
      {/*==================================================*/}

      {/* START  feture-area Section */}
      {/*=================================================*/}
      <div className="ceo-cod-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 ">
              <div className="consen-section-title">
                <h2> What Say Our CEO, About</h2>
                <h2>
                  {" "}
                  Consen <span> Customers </span>
                </h2>
                <div className="lines style-three pt-20 pb-10">
                  <div className="line" />
                </div>
                <p className="about-text">
                  {" "}
                  “We help Our Clients to Renew Their Business Function to
                  Create Brandable Organizations”{" "}
                </p>
                <p className="about-text2">
                  Appropriately enhance principle-centered innovation rather
                  than high standards in platforms. Credibly orchestrate
                  functional markets through multidisciplinary services.
                  Uniquely strategize transparent technology and user friendly
                  ideas markets.{" "}
                </p>
              </div>
              <div className="dreamit-ceo-title">
                <h4> Philip Antrophy </h4>
                <span>SEO &amp; Founder</span>
              </div>
              <div className="about-button">
                <Link legacyBehavior href="/testimonial">
                  <a>
                    {" "}
                    Clients Review <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="dreamit-about-thumb1">
                <img src="assets/images/about/about2.png" alt />
              </div>
              <div className="about-shape-box">
                <div className="about-shape-thumb bounce-animate">
                  <img src="assets/images/about/ab-shape.png" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}

      {/* Start consen Skills Area Css */}
      {/*==================================================*/}
      <div className="skill-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="extra-animation-div">
                <div className="consen-section-title white">
                  <h2> Scaling New Heights: Outsourced Support for </h2>
                  <h2>
                    {" "}
                    Software <span>Trailblazers</span>
                  </h2>
                </div>
                <div className="lines style-three upper pt-30 pb-10">
                  <div className="line" />
                </div>
                <div className="dreamit-smart-title">
                  <p className="slill-text">
                    Continually generate 2.0 communities and client-focused
                    products. In synergize strategic manufactured products
                    whereas levera.
                  </p>
                </div>
              </div>
              <ProssessBar />
            </div>
            <div className="col-md-6">
              <div className="slill-single-thumb mt-4 mt-lg-0 pl-50 ml-1">
                <img src="assets/images/resource/skill.png" alt />
                {/* thumb content */}
                <div className="skill-thumb-content">
                  <div className="skill-title">
                    <h3 className="counter"> 12 </h3>
                    <span>+</span>
                    <h5> YEARS EXPERIENCE </h5>
                  </div>
                </div>
                {/* skill shape */}
                <div className="skill-shape dance">
                  <img src="assets/images/resource/skill-shape.png" alt />
                </div>
                <div className="skill-shape1 bounce-animate2">
                  <img src="assets/images/resource/all-shape.png" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen Skill Area Css */}
      {/*==================================================*/}

      {/*==================================================*/}
      {/*  Start  Counter Section */}
      {/*===================================================*/}
      <div className="counter-section style-33 pt-30 pb-80">
        <div className="container">
          <div className="counter-container">
            <div className="row hr pt-40">
              <div className="col-md-6 col-lg-4">
                <div className="counter-single-item-inner d-flex">
                  <div className="counter-content">
                    <div className="counter-text">
                      <h1>
                        <span className="counter">
                          <Counter end={20} />
                        </span>
                      </h1>
                      <span />
                      <div className="counter-title">
                        <h4>Organizations to </h4>
                        <h3>Achieve Goals</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="counter-single-item-inner d-flex">
                  <div className="counter-content">
                    <div className="counter-text">
                      <h1>
                        <span className="counter">
                          <Counter end={150} />
                        </span>
                      </h1>

                      <span />
                      <div className="counter-title">
                        <h4>Projects</h4>
                        <h3>Completed</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="counter-single-item-inner d-flex">
                  <div className="counter-content">
                    <div className="counter-text">
                      <h1>
                        <span className="counter">
                          <Counter end={10} />
                        </span>
                      </h1>
                      <span />
                      <div className="counter-title">
                        <h4>Successful </h4>
                        <h3>Merger and Acquisition</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start consen Team Area */}
      {/*==================================================*/}
      {/* <div className="team_area style-two">
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
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single_team">
                <div className="single_team_thumb1">
                  <img src="assets/images/resource/team-1.jpg" alt="image" />
                </div>
                <div className="single_team_content">
                  <div className="team-title">
                    <h4>Silvia Garden</h4>
                    <span>Designer</span>
                  </div>
                  <div className="single_team_icon">
                    <a href="#">
                      {" "}
                      <i className="bi bi-facebook" />{" "}
                    </a>
                    <a href="#">
                      {" "}
                      <i className="bi bi-twitter" />{" "}
                    </a>
                    <a href="#">
                      <i className="bi bi-dribbble" />
                    </a>
                    <a href="#">
                      {" "}
                      <i className="bi bi-instagram"> </i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_team">
                <div className="single_team_thumb1">
                  <img src="assets/images/resource/team-2.jpg" alt="image" />
                </div>
                <div className="single_team_content">
                  <div className="team-title">
                    <h4> Monalisha Shen </h4>
                    <span> IT-Executive </span>
                  </div>
                  <div className="single_team_icon">
                    <a href="#">
                      {" "}
                      <i className="bi bi-facebook" />{" "}
                    </a>
                    <a href="#">
                      {" "}
                      <i className="bi bi-twitter" />{" "}
                    </a>
                    <a href="#">
                      <i className="bi bi-dribbble" />
                    </a>
                    <a href="#">
                      {" "}
                      <i className="bi bi-instagram"> </i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_team">
                <div className="single_team_thumb1">
                  <img src="assets/images/resource/team-3.jpg" alt="image" />
                </div>
                <div className="single_team_content">
                  <div className="team-title">
                    <h4>Bubli Khanam</h4>
                    <span>Developer</span>
                  </div>
                  <div className="single_team_icon">
                    <a href="#">
                      {" "}
                      <i className="bi bi-facebook" />{" "}
                    </a>
                    <a href="#">
                      {" "}
                      <i className="bi bi-twitter" />{" "}
                    </a>
                    <a href="#">
                      <i className="bi bi-dribbble" />
                    </a>
                    <a href="#">
                      {" "}
                      <i className="bi bi-instagram"> </i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/*==================================================*/}
      {/* End consen Team Area */}
      {/*==================================================*/}
      {/* {consen about starts} */}
      <div className="about-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="dreamit-about-thumb">
                <img src="assets/images/about/about.png" alt />
                {/* about-shape */}
                <div className="about-shape-thumb1 bounce-animate2">
                  <img src="assets/images/about/about-shape2.png" alt />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 ">
              <div className="consen-section-title white pb-10">
                <h2> Solutions for complex </h2>
                <h2>
                  {" "}
                  business <span> challenges </span>
                </h2>
                <p>
                  We use our expertise to provide tailored solutions that solve
                  even the most complex challenges.
                </p>
              </div>
              <div className="lines style-two pb-15">
                <div className="line" />
              </div>
              <div className="dreamit-icon-title">
                <h4>
                  {" "}
                  We are Since <span>2007 to Present</span> in Sandigo, USA{" "}
                </h4>
              </div>
              <div className="dreamit-icon-list">
                <ul>
                  <li>
                    <i className="flaticon-tick" style={{ color: "#ff3c00" }} />{" "}
                    <span>
                      {" "}
                      Strategic planning and implementation for digital
                      transformation.
                    </span>
                  </li>
                  <li>
                    <i className="flaticon-tick" style={{ color: "#ff3c00" }} />{" "}
                    <span>
                      {" "}
                      Streamlined IT operations for maximum efficiency and
                      productivity.
                    </span>
                  </li>
                  <li>
                    <i className="flaticon-tick" style={{ color: "#ff3c00" }} />{" "}
                    <span>
                      {" "}
                      Solutions for cloud computing,development and IT
                      infrastructure.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="about-button">
                <Link legacyBehavior href="/about">
                  <a>
                    {" "}
                    Learn More <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div>
            {/* about thumb */}
            <div className="about-shape-thumb2 bounce-animate4">
              <img src="assets/images/resource/all-shape.png" alt />
            </div>
          </div>
          <div className="row counter-vip">
            <div className="col-lg-12">
              <div className="couter-top-title">
                <h3> Consen Finished this Achivement in 7 Years </h3>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={25} />
                  </h4>
                  <span>%</span>
                  <p>
                    Boosted Employee Productivity by through Effective
                    Performance Management
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={40} />
                  </h4>
                  <span>%</span>
                  <p>
                    Streamlined Processes and Achieved Efficiency Improvement
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={30} />
                  </h4>
                  <span>%</span>
                  <p>Average Increase in Revenue for Our Clientele</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={3} />
                  </h4>
                  <span>X</span>
                  <p>Profit Maximization and Wealth Creation for Our Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {consen about ends} */}
      {/* {CEO starts} */}
      {/* <div className="ceo-cod-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 ">
              <div className="consen-section-title">
                <h2> What Say Our CEO, About</h2>
                <h2>
                  {" "}
                  Consen <span> Customers </span>
                </h2>
                <div className="lines style-three pt-20 pb-10">
                  <div className="line" />
                </div>
                <p className="about-text">
                  {" "}
                  “We help Our Clients to Renew Their Business Function to
                  Create Brandable Organizations”{" "}
                </p>
                <p className="about-text2">
                  Appropriately enhance principle-centered innovation rather
                  than high standards in platforms. Credibly orchestrate
                  functional markets through multidisciplinary services.
                  Uniquely strategize transparent technology and user friendly
                  ideas markets.{" "}
                </p>
              </div>
              <div className="dreamit-ceo-title">
                <h4> Philip Antrophy </h4>
                <span>SEO &amp; Founder</span>
              </div>
              <div className="about-button">
                <Link legacyBehavior href="/testimonial">
                  <a>
                    {" "}
                    Clients Review <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="dreamit-about-thumb1">
                <img src="assets/images/about/about2.png" alt />
              </div>
              <div className="about-shape-box">
                <div className="about-shape-thumb bounce-animate">
                  <img src="assets/images/about/ab-shape.png" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* {CEO ends} */}
      <div className="brand-section">
        <div className="container">
          <div className="row">
            <LogoSlider />
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start  FAQ Section */}
      {/*===================================================*/}
      <div className="faq-sectiions ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="consen-section-title white pb-1 mb-1">
                <h5> process </h5>
                <h2>
                  {" "}
                  Freequently Asked <span> Question </span>
                </h2>
                <p className="study-text1">
                  {" "}
                  Appropriately enhance principle-centered innovation rather
                  than high standards in platforms. Credibly orchestrate
                  functional.{" "}
                </p>
              </div>
              <div className="dreamit-icon-list">
                <ul>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{" "}
                    <span> Communicate orthogonal process </span>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{" "}
                    <span> Professionally grow cutting-edge paradigms </span>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{" "}
                    <span> Communicate orthogonal process </span>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{" "}
                    <span> Professionally grow cutting-edge paradigms </span>
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
            <div className="col-lg-6 col-md-12 pl-0">
              {/* Start Accordion */}
              <div className="tab_container pl-30 pt-20">
                <Faqs />
              </div>
              {/* End Accordion */}
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/*Start  Brand Section */}
      {/*===================================================*/}
      {/* <div className="brand-section">
        <div className="container">
          <div className="row">
            <LogoSlider />
          </div>
        </div>
      </div> */}
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
              {/* <div className="col-lg-8 col-md-12">
                <a href="tel:09837393403" className="subscribe-icon">
                  <i className="bi bi-telephone-inbound" />
                </a>
                <div className="subscribe-title2">
                  <h1> +98 376 (2890) 100 </h1>
                  <p> example@gmail.com </p>
                </div>
              </div> */}
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
      {/*==================================================*/}
      {/* End consen Subscribe Area */}
      {/*==================================================*/}
    </Layout>
  );
};
export default About;
