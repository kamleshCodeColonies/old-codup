import Breadcumb1 from "@/src/components/Breadcumb1";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import React, { useState } from "react";

const ServiceDetails = () => {
  const [service, setService] = useState({ ser: 3 });

  return (
    <Layout>
      <Breadcumb1
        pageName={"Management Consulting"}
        title={"Management Consulting"}
      />
      {/*==================================================*/}
      {/* Start consen service details Area */}
      {/*==================================================*/}
      {service.ser === 1 && (
        <div className="service-detials-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <div className="consen-service-details-box">
                      <div className="consen-service-thumb">
                        <img src="assets/images/resource/srd1.jpg" alt />
                      </div>
                      <div className="service-details-content">
                        <div className="service-page-title">
                          <h1> Start-up Consulting</h1>
                        </div>
                        <div className="serivce-details-desc">
                          <p style={{ textAlign: "justify" }}>
                            Welcome to <b>Start-up Consulting</b>, where we
                            empower entrepreneurs and start-ups to turn their
                            ideas into successful businesses. Our comprehensive
                            consulting services are designed to guide you
                            through every step of the start-up journey, from
                            idea validation to market analysis, business plan
                            development, funding strategies, and go-to-market
                            strategies. With our expertise and industry
                            knowledge, we provide valuable insights and
                            actionable recommendations to help you make informed
                            decisions and maximize your chances of success.
                          </p>
                          {/* <p className="pb-35">
                            Transparent technologies whereas timely
                            functionalities. Continually repurpose e-business
                            information and prospective
                            <span>intellectual</span> capital. Enthusiastically
                            create strategic communities.
                          </p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="service-details-box">
                      <div className="service-details-icon">
                        <img
                          src="assets/images/resource/details-icon1.jpg"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4> Business Idea Validation and Market Analysis </h4>
                      </div>
                      <div className="services-detials-desc">
                        {/* <p>Functionalities continually to prospective intellec</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="service-details-box">
                      <div className="service-details-icon">
                        <img
                          src="assets/images/resource/details-icon2.jpg"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4> Business Plan Development </h4>
                      </div>
                      <div className="services-detials-desc">
                        {/* <p>Functionalities continually to prospective intellec</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="service-details-box">
                      <div className="service-details-icon">
                        <img
                          src="assets/images/resource/details-icon3.jpg"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4>Funding and Investor Strategies </h4>
                      </div>
                      <div className="services-detials-desc">
                        {/* <p>Functionalities continually to prospective intellec</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="service-details-box">
                      <div className="service-details-icon">
                        <img
                          src="assets/images/resource/details-icon4.jpg"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4> Launch and Go-to-market Strategies </h4>
                      </div>
                      <div className="services-detials-desc">
                        {/* <p>Functionalities continually to prospective intellec</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="service-details-content">
                      <div className="service-page-title2">
                        <h1>Competency</h1>
                      </div>
                      <div className="serivce-details-desc">
                        <p className="pb-35" style={{ textAlign: "justify" }}>
                          At Codup, we have a proven track record of
                          successfully supporting start-ups in their journey
                          from ideation to market entry. Our team of experienced
                          consultants combines their industry knowledge with a
                          deep understanding of start-up dynamics to deliver
                          exceptional results. With our holistic approach,
                          personalized guidance, and commitment to your success,
                          we are dedicated to helping you build a thriving and
                          sustainable start-up. Trust Codup as your partner in
                          turning your entrepreneurial dreams into reality.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-6">
                    <div className="service-details-thumb">
                      <img src="assets/images/resource/srd2.jpg" alt />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-6">
                    <div className="service-details-icon-box">
                      <div className="service-page-title2">
                        <h1>Consulting Results</h1>
                      </div>
                      <div className="widget-service-details-icon">
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Idea Validation</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Comprehensive Business Plans </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Market Insights</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Expert Guidance</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="service-details-content pt-40">
                      <div className="service-page-title2">
                        <h1>Working Process</h1>
                      </div>
                      <div className="serivce-details-desc">
                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          We begin by thoroughly evaluating your business idea
                          and conducting comprehensive market research. This
                          step helps us understand the market potential, target
                          audience, and competitive landscape.
                        </p>

                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          Based on the insights gathered, we work closely with
                          you to develop a comprehensive business plan. This
                          includes defining your vision, mission, and goals, as
                          well as formulating strategies for marketing,
                          operations, and finance.
                        </p>

                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          Once the business plan is finalized, we assist you in
                          implementing the strategies and plans outlined. Our
                          team provides ongoing support, guidance, and
                          monitoring to ensure the successful execution of your
                          start-up venture.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="service-work-process-box">
                      <div className="service-work-process-number">
                        <span>01</span>
                      </div>
                      {/* <div className="service-work-process-title">
                        <h4> Plan Project </h4>
                      </div> */}
                      <div className="service-work-process-desc">
                        <p>Idea Assessment and Market Analysis</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="service-work-process-box">
                      <div className="service-work-process-number">
                        <span>02</span>
                      </div>
                      {/* <div className="service-work-process-title">
                        <h4> Finished Work </h4>
                      </div> */}
                      <div className="service-work-process-desc">
                        <p>Business Plan Development</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="service-work-process-box">
                      <div className="service-work-process-number">
                        <span>03</span>
                      </div>
                      {/* <div className="service-work-process-title">
                        <h4> Deliver You </h4>
                      </div> */}
                      <div className="service-work-process-desc">
                        <p>Implementation and Support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="widget-categories-box">
                  {/* categories title */}
                  <div className="categories-title">
                    <h4> Services </h4>
                  </div>
                  {/* widget categories menu */}
                  <div className="widget-categories-menu">
                    <ul>
                      <li className="active">
                        <Link legacyBehavior href="javascript:void(0)">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 1,
                              })
                            }
                          >
                            {" "}
                            Start-up Consulting{" "}
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/BusinessConsulting">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 2,
                              })
                            }
                          >
                            {" "}
                            Business Consulting
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/ManagementConsulting">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 3,
                              })
                            }
                          >
                            {" "}
                            Management Consulting{" "}
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/ItandSoftwareConsulting">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 4,
                              })
                            }
                          >
                            {" "}
                            It and Software Consulting{" "}
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* categoreis thumb */}
                <div className="widget-categories-thumb">
                  {/* widget categories content  */}
                  <div className="widget-categories-content text-center">
                    <div className="logo-thumb">
                      <Link legacyBehavior href="/index">
                        <a>
                          {" "}
                          <img src="assets/images/logo.png" alt />{" "}
                        </a>
                      </Link>
                    </div>
                    <div className="widget-title2">
                      <h3>Need Service?</h3>
                    </div>
                    <div className="widget-button">
                      <Link legacyBehavior href="/contact">
                        <a>
                          {" "}
                          <i className="bi bi-envelope" /> Contact Us{" "}
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {service.ser === 2 && (
        <div className="service-detials-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <div className="consen-service-details-box">
                      <div className="consen-service-thumb">
                        <img src="assets/images/resource/srd1.jpg" alt />
                      </div>
                      <div className="service-details-content">
                        <div className="service-page-title">
                          <h1> Business Consulting</h1>
                        </div>
                        <div className="serivce-details-desc">
                          <p style={{ textAlign: "justify" }}>
                            Welcome to <b>Business Consulting</b>, where we help
                            organizations optimize their processes, enhance
                            performance, and drive transformational change. Our
                            consulting services are designed to identify areas
                            for improvement, streamline workflows, enhance
                            organizational structure, implement performance
                            management systems, and guide you through change
                            management processes. With our expertise and proven
                            methodologies, we empower businesses to achieve
                            operational excellence and sustainable growth.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="service-details-box">
                      <div className="service-details-icon">
                        <img
                          src="assets/images/resource/details-icon2.jpg"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4> Process Improvement and Optimization </h4>
                      </div>
                      <div className="services-detials-desc">
                        {/* <p>Functionalities continually to prospective intellec</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="service-details-box">
                      <div className="service-details-icon">
                        <img
                          src="assets/images/resource/details-icon3.jpg"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4>Organizational Structure and Design </h4>
                      </div>
                      <div className="services-detials-desc">
                        {/* <p>Functionalities continually to prospective intellec</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="service-details-box">
                      <div className="service-details-icon">
                        <img
                          src="assets/images/resource/details-icon4.jpg"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4> Performance Measurement and Management</h4>
                      </div>
                      <div className="services-detials-desc">
                        {/* <p>Functionalities continually to prospective intellec</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="service-details-box">
                      <div className="service-details-icon">
                        <img
                          src="assets/images/resource/details-icon1.jpg"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4> Change Management and Transformation </h4>
                      </div>
                      <div className="services-detials-desc">
                        {/* <p>Functionalities continually to prospective intellec</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="service-details-content">
                      <div className="service-page-title2">
                        <h1>Competency</h1>
                      </div>
                      <div className="serivce-details-desc">
                        <p className="pb-35" style={{ textAlign: "justify" }}>
                          At Codup, we pride ourselves on our extensive
                          experience and expertise in business consulting. Our
                          consultants bring a wealth of knowledge across various
                          industries, enabling us to provide innovative and
                          effective solutions to complex business challenges.
                          With a client-centric approach, we prioritize
                          understanding your unique needs and tailoring our
                          services to deliver measurable results. Trust Codup as
                          your partner in achieving operational excellence and
                          driving transformational change for your business.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-6">
                    <div className="service-details-thumb">
                      <img src="assets/images/resource/srd2.jpg" alt />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-6">
                    <div className="service-details-icon-box">
                      <div className="service-page-title2">
                        <h1>Consulting Results</h1>
                      </div>
                      <div className="widget-service-details-icon">
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Process Improvement and Optimization</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Organizational Structure and Design </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Change Management and Transformation</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Expert Guidance </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="service-details-content pt-40">
                      <div className="service-page-title2">
                        <h1>Working Process</h1>
                      </div>
                      <div className="serivce-details-desc">
                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          We begin by conducting a comprehensive assessment of
                          your organization's processes, structure, and
                          performance. This involves gathering data, conducting
                          interviews, and analyzing existing documentation to
                          identify areas of improvement.{" "}
                        </p>

                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          Based on the assessment findings, we work closely with
                          you to develop a customized strategy. This includes
                          designing process improvement initiatives,
                          organizational structure recommendations, performance
                          measurement frameworks, and change management plans.
                          We then guide you through the implementation process,
                          providing hands-on support and expertise.{" "}
                        </p>

                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          We believe in the power of continuous improvement.
                          Once the strategies are implemented, we closely
                          monitor their effectiveness, measure performance
                          against KPIs, and make necessary adjustments. Our team
                          helps you embed a culture of continuous improvement
                          within your organization, ensuring long-term success.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="service-work-process-box">
                      <div className="service-work-process-number">
                        <span>01</span>
                      </div>
                      {/* <div className="service-work-process-title">
                        <h4> Plan Project </h4>
                      </div> */}
                      <div className="service-work-process-desc">
                        <p>Assessment and Analysis</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="service-work-process-box">
                      <div className="service-work-process-number">
                        <span>02</span>
                      </div>
                      {/* <div className="service-work-process-title">
                        <h4> Finished Work </h4>
                      </div> */}
                      <div className="service-work-process-desc">
                        <p>Strategy Development and Implementation</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="service-work-process-box">
                      <div className="service-work-process-number">
                        <span>03</span>
                      </div>
                      {/* <div className="service-work-process-title">
                        <h4> Deliver You </h4>
                      </div> */}
                      <div className="service-work-process-desc">
                        <p>Monitoring and Continuous Improvement</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                {/* widget search */}
                {/* <div className="widget_search mt-5 mt-lg-0">
              <form
                onSubmit={(e) => e.preventDefault()}
                action="#"
                method="get"
              >
                <input
                  type="text"
                  name="s"
                  placeholder="Search Here"
                  title="Search for:"
                />
                <button type="submit" className="icons">
                  <i className="fa fa-search" />
                </button>
              </form>
            </div> */}
                <div className="widget-categories-box">
                  {/* categories title */}
                  <div className="categories-title">
                    <h4> Services </h4>
                  </div>
                  {/* widget categories menu */}
                  <div className="widget-categories-menu">
                    <ul>
                      <li>
                        <Link legacyBehavior href="/StartupConsulting">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 1,
                              })
                            }
                          >
                            {" "}
                            Start-up Consulting{" "}
                          </a>
                        </Link>
                      </li>
                      <li className="active">
                        <Link legacyBehavior href="javascript:void(0)">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 2,
                              })
                            }
                          >
                            {" "}
                            Business Consulting
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/ManagementConsulting">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 3,
                              })
                            }
                          >
                            {" "}
                            Management Consulting{" "}
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/ItandSoftwareConsulting">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 4,
                              })
                            }
                          >
                            {" "}
                            It and Software Consulting{" "}
                          </a>
                        </Link>
                      </li>
                      {/* <li>
                    <Link legacyBehavior href="/service-details">
                      <a> Product Development </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/service-details">
                      <a> Content Marketing </a>
                    </Link>
                  </li> */}
                    </ul>
                  </div>
                </div>
                {/* categoreis thumb */}
                <div className="widget-categories-thumb">
                  {/* widget categories content  */}
                  <div className="widget-categories-content text-center">
                    <div className="logo-thumb">
                      <Link legacyBehavior href="/index">
                        <a>
                          {" "}
                          <img src="assets/images/logo.png" alt />{" "}
                        </a>
                      </Link>
                    </div>
                    <div className="widget-title2">
                      <h3>Need Service?</h3>
                    </div>
                    <div className="widget-button">
                      <Link legacyBehavior href="/contact">
                        <a>
                          {" "}
                          <i className="bi bi-envelope" /> Contact Us{" "}
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {service.ser === 3 && (
        <div className="service-detials-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <div className="consen-service-details-box">
                      <div className="consen-service-thumb">
                        <img src="assets/images/resource/srd1.jpg" alt />
                      </div>
                      <div className="service-details-content">
                        <div className="service-page-title">
                          <h1> Management Consulting</h1>
                        </div>
                        <div className="serivce-details-desc">
                          <p style={{ textAlign: "justify" }}>
                            Welcome to <b>Management Consulting</b>, where we
                            partner with organizations to enhance their
                            strategic planning, leadership development,
                            decision-making, and performance evaluation
                            processes. Our consulting services are designed to
                            empower your management team with the tools and
                            frameworks they need to drive organizational
                            success. With our expertise in strategic planning,
                            leadership development, problem-solving, and
                            performance evaluation, we help you build a strong
                            foundation for growth and excellence.
                          </p>
                          {/* <p className="pb-35">
                            Transparent technologies whereas timely
                            functionalities. Continually repurpose e-business
                            information and prospective
                            <span>intellectual</span> capital. Enthusiastically
                            create strategic communities.
                          </p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="service-details-box">
                      <div className="service-details-icon">
                        <img
                          src="assets/images/resource/details-icon1.jpg"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4> Strategic Planning and Goal Setting </h4>
                      </div>
                      <div className="services-detials-desc">
                        {/* <p>Functionalities continually to prospective intellec</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="service-details-box">
                      <div className="service-details-icon">
                        <img
                          src="assets/images/resource/details-icon2.jpg"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4> Leadership Development and Training</h4>
                      </div>
                      <div className="services-detials-desc">
                        {/* <p>Functionalities continually to prospective intellec</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="service-details-box">
                      <div className="service-details-icon">
                        <img
                          src="assets/images/resource/details-icon3.jpg"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4>Decision-making and Problem-solving Frameworks </h4>
                      </div>
                      <div className="services-detials-desc">
                        {/* <p>Functionalities continually to prospective intellec</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="service-details-box">
                      <div className="service-details-icon">
                        <img
                          src="assets/images/resource/details-icon4.jpg"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4> Performance Evaluation and Feedback </h4>
                      </div>
                      <div className="services-detials-desc">
                        {/* <p>Functionalities continually to prospective intellec</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="service-details-content">
                      <div className="service-page-title2">
                        <h1>Competency</h1>
                      </div>
                      <div className="serivce-details-desc">
                        <p className="pb-35" style={{ textAlign: "justify" }}>
                          At Codup, we are proud of our competencies in
                          management consulting. Our consultants bring a wealth
                          of experience and expertise across various industries,
                          allowing us to provide tailored solutions to address
                          your unique challenges. With a client-centric
                          approach, we prioritize understanding your
                          organizational objectives and collaboratively working
                          towards achieving them. Trust Codup as your partner in
                          enhancing strategic planning, leadership development,
                          decision-making, and performance evaluation within
                          your organization. Together, we can build a foundation
                          for sustainable success.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-6">
                    <div className="service-details-thumb">
                      <img src="assets/images/resource/srd2.jpg" alt />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-6">
                    <div className="service-details-icon-box">
                      <div className="service-page-title2">
                        <h1>Consulting Results</h1>
                      </div>
                      <div className="widget-service-details-icon">
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Strategic Planning and Goal Setting</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Leadership Development and Training </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span>
                            {" "}
                            Decision-making and Problem-solving Frameworks
                          </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Performance Evaluation and Feedback </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="service-details-content pt-40">
                      <div className="service-page-title2">
                        <h1>Working Process</h1>
                      </div>
                      <div className="serivce-details-desc">
                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          We start by conducting a thorough assessment of your
                          organization's current state. This involves evaluating
                          strategic planning processes, leadership capabilities,
                          decision-making frameworks, and performance evaluation
                          systems. We gather data through interviews, surveys,
                          and analysis of existing documentation.{" "}
                        </p>

                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          Based on the assessment findings, we collaborate with
                          your management team to develop a customized strategy.
                          This includes defining strategic goals, designing
                          leadership development programs, implementing
                          decision-making frameworks, and developing performance
                          evaluation systems. We provide guidance and support
                          throughout the implementation process.{" "}
                        </p>

                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          We believe in the importance of monitoring and
                          continuous improvement. Once the strategies and
                          frameworks are in place, we establish mechanisms for
                          tracking and measuring performance. We work closely
                          with your management team to identify areas for
                          improvement and make necessary adjustments, ensuring
                          that your organization is continuously evolving and
                          excelling.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="service-work-process-box">
                      <div className="service-work-process-number">
                        <span>01</span>
                      </div>
                      {/* <div className="service-work-process-title">
                        <h4> Plan Project </h4>
                      </div> */}
                      <div className="service-work-process-desc">
                        <p>Assessment and Analysis</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="service-work-process-box">
                      <div className="service-work-process-number">
                        <span>02</span>
                      </div>
                      {/* <div className="service-work-process-title">
                        <h4> Finished Work </h4>
                      </div> */}
                      <div className="service-work-process-desc">
                        <p>Strategy Development and Implementation</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="service-work-process-box">
                      <div className="service-work-process-number">
                        <span>03</span>
                      </div>
                      {/* <div className="service-work-process-title">
                        <h4> Deliver You </h4>
                      </div> */}
                      <div className="service-work-process-desc">
                        <p>Monitoring and Continuous Improvement</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                {/* widget search */}
                {/* <div className="widget_search mt-5 mt-lg-0">
              <form
                onSubmit={(e) => e.preventDefault()}
                action="#"
                method="get"
              >
                <input
                  type="text"
                  name="s"
                  placeholder="Search Here"
                  title="Search for:"
                />
                <button type="submit" className="icons">
                  <i className="fa fa-search" />
                </button>
              </form>
            </div> */}
                <div className="widget-categories-box">
                  {/* categories title */}
                  <div className="categories-title">
                    <h4> Services </h4>
                  </div>
                  {/* widget categories menu */}
                  <div className="widget-categories-menu">
                    <ul>
                      <li>
                        <Link legacyBehavior href="/StartupConsulting">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 1,
                              })
                            }
                          >
                            {" "}
                            Start-up Consulting{" "}
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/BusinessConsulting">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 2,
                              })
                            }
                          >
                            {" "}
                            Business Consulting
                          </a>
                        </Link>
                      </li>
                      <li className="active">
                        <Link legacyBehavior href="javascript:void(0)">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 3,
                              })
                            }
                          >
                            {" "}
                            Management Consulting{" "}
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/ItandSoftwareConsulting">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 4,
                              })
                            }
                          >
                            {" "}
                            It and Software Consulting{" "}
                          </a>
                        </Link>
                      </li>
                      {/* <li>
                    <Link legacyBehavior href="/service-details">
                      <a> Product Development </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/service-details">
                      <a> Content Marketing </a>
                    </Link>
                  </li> */}
                    </ul>
                  </div>
                </div>
                {/* categoreis thumb */}
                <div className="widget-categories-thumb">
                  {/* widget categories content  */}
                  <div className="widget-categories-content text-center">
                    <div className="logo-thumb">
                      <Link legacyBehavior href="/index">
                        <a>
                          {" "}
                          <img src="assets/images/logo.png" alt />{" "}
                        </a>
                      </Link>
                    </div>
                    <div className="widget-title2">
                      <h3>Need Service?</h3>
                    </div>
                    <div className="widget-button">
                      <Link legacyBehavior href="/contact">
                        <a>
                          {" "}
                          <i className="bi bi-envelope" /> Contact Us{" "}
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {service.ser === 4 && (
        <div className="service-detials-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <div className="consen-service-details-box">
                      <div className="consen-service-thumb">
                        <img src="assets/images/resource/srd1.jpg" alt />
                      </div>
                      <div className="service-details-content">
                        <div className="service-page-title">
                          <h1> IT and Software Consulting</h1>
                        </div>
                        <div className="serivce-details-desc">
                          <p style={{ textAlign: "justify" }}>
                            Welcome to <b>IT and Software Consulting</b>, where
                            we leverage our expertise in technology and software
                            development to help businesses optimize their IT
                            strategies and processes. Our consulting services
                            focus on aligning IT with your business goals,
                            implementing agile software development
                            methodologies, evaluating and recommending
                            technology solutions, and enhancing quality
                            assurance and testing processes. With our in-depth
                            knowledge of IT infrastructure, software development
                            practices, and emerging technologies, we empower you
                            to leverage technology as a strategic advantage and
                            drive innovation within your organization.
                          </p>
                          {/* <p className="pb-35">
                            Transparent technologies whereas timely
                            functionalities. Continually repurpose e-business
                            information and prospective
                            <span>intellectual</span> capital. Enthusiastically
                            create strategic communities.
                          </p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="service-details-box">
                      <div className="service-details-icon">
                        <img
                          src="assets/images/resource/details-icon1.jpg"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4>IT Strategy and Roadmaps </h4>
                      </div>
                      <div className="services-detials-desc">
                        {/* <p>Functionalities continually to prospective intellec</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="service-details-box">
                      <div className="service-details-icon">
                        <img
                          src="assets/images/resource/details-icon2.jpg"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4> Software Development Methodologies</h4>
                      </div>
                      <div className="services-detials-desc">
                        {/* <p>Functionalities continually to prospective intellec</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="service-details-box">
                      <div className="service-details-icon">
                        <img
                          src="assets/images/resource/details-icon3.jpg"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4>
                          Technology Stack Evaluation and Recommendations{" "}
                        </h4>
                      </div>
                      <div className="services-detials-desc">
                        {/* <p>Functionalities continually to prospective intellec</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="service-details-box">
                      <div className="service-details-icon">
                        <img
                          src="assets/images/resource/details-icon4.jpg"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4> Quality Assurance and Testing Processes </h4>
                      </div>
                      <div className="services-detials-desc">
                        {/* <p>Functionalities continually to prospective intellec</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="service-details-content">
                      <div className="service-page-title2">
                        <h1>Competency</h1>
                      </div>
                      <div className="serivce-details-desc">
                        <p className="pb-35" style={{ textAlign: "justify" }}>
                          At Codup, we pride ourselves on our competency in IT
                          and software consulting. Our consultants combine their
                          technical expertise with industry knowledge, enabling
                          us to provide tailored solutions to meet your specific
                          needs. With a client-focused approach, we prioritize
                          understanding your business objectives and delivering
                          innovative solutions that drive efficiency,
                          productivity, and innovation. Trust Codup as your
                          partner in leveraging technology to achieve your
                          business goals and gain a competitive edge in the
                          digital landscape. Together, we can unlock the full
                          potential of your IT and software capabilities.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-6">
                    <div className="service-details-thumb">
                      <img src="assets/images/resource/srd2.jpg" alt />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-6">
                    <div className="service-details-icon-box">
                      <div className="service-page-title2">
                        <h1>Consulting Results</h1>
                      </div>
                      <div className="widget-service-details-icon">
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Aligned IT Strategy</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Agile Software Development </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Optimized Technology Stack</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span>
                            {" "}
                            Quality Assurance and Testing Excellence{" "}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="service-details-content pt-40">
                      <div className="service-page-title2">
                        <h1>Working Process</h1>
                      </div>
                      <div className="serivce-details-desc">
                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          We start by conducting a thorough assessment of your
                          IT infrastructure, software development processes, and
                          technology stack. This involves gathering data,
                          evaluating existing systems, and identifying areas for
                          improvement.{" "}
                        </p>

                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          Based on the assessment findings, we work closely with
                          your team to develop a customized IT strategy. This
                          includes defining IT roadmaps, implementing agile
                          development frameworks, recommending technology
                          upgrades, and optimizing quality assurance and testing
                          processes. We provide guidance and support throughout
                          the implementation process.{" "}
                        </p>

                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          We believe in the importance of continuous
                          improvement. Once the strategies and processes are in
                          place, we monitor their effectiveness and make
                          necessary adjustments. Our team works closely with
                          your IT and software development teams, providing
                          ongoing support, training, and guidance to ensure
                          optimal performance and successful outcomes.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="service-work-process-box">
                      <div className="service-work-process-number">
                        <span>01</span>
                      </div>
                      {/* <div className="service-work-process-title">
                        <h4> Plan Project </h4>
                      </div> */}
                      <div className="service-work-process-desc">
                        <p>Assessment and Analysis</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="service-work-process-box">
                      <div className="service-work-process-number">
                        <span>02</span>
                      </div>
                      {/* <div className="service-work-process-title">
                        <h4> Finished Work </h4>
                      </div> */}
                      <div className="service-work-process-desc">
                        <p>Strategy Development and Implementation</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="service-work-process-box">
                      <div className="service-work-process-number">
                        <span>03</span>
                      </div>
                      {/* <div className="service-work-process-title">
                        <h4> Deliver You </h4>
                      </div> */}
                      <div className="service-work-process-desc">
                        <p>Monitoring and Continuous Improvement</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                {/* widget search */}
                {/* <div className="widget_search mt-5 mt-lg-0">
              <form
                onSubmit={(e) => e.preventDefault()}
                action="#"
                method="get"
              >
                <input
                  type="text"
                  name="s"
                  placeholder="Search Here"
                  title="Search for:"
                />
                <button type="submit" className="icons">
                  <i className="fa fa-search" />
                </button>
              </form>
            </div> */}
                <div className="widget-categories-box">
                  {/* categories title */}
                  <div className="categories-title">
                    <h4> Services </h4>
                  </div>
                  {/* widget categories menu */}
                  <div className="widget-categories-menu">
                    <ul>
                      <li>
                        <Link legacyBehavior href="/StartupConsulting">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 1,
                              })
                            }
                          >
                            {" "}
                            Start-up Consulting{" "}
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/BusinessConsulting">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 2,
                              })
                            }
                          >
                            {" "}
                            Business Consulting
                          </a>
                        </Link>
                      </li>
                      <li className="active">
                        <Link legacyBehavior href="javascript:void(0)">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 3,
                              })
                            }
                          >
                            {" "}
                            Management Consulting{" "}
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/ItandSoftwareConsulting">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 4,
                              })
                            }
                          >
                            {" "}
                            It and Software Consulting{" "}
                          </a>
                        </Link>
                      </li>
                      {/* <li>
                    <Link legacyBehavior href="/service-details">
                      <a> Product Development </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/service-details">
                      <a> Content Marketing </a>
                    </Link>
                  </li> */}
                    </ul>
                  </div>
                </div>
                {/* categoreis thumb */}
                <div className="widget-categories-thumb">
                  {/* widget categories content  */}
                  <div className="widget-categories-content text-center">
                    <div className="logo-thumb">
                      <Link legacyBehavior href="/index">
                        <a>
                          {" "}
                          <img src="assets/images/logo.png" alt />{" "}
                        </a>
                      </Link>
                    </div>
                    <div className="widget-title2">
                      <h3>Need Service?</h3>
                    </div>
                    <div className="widget-button">
                      <Link legacyBehavior href="/contact">
                        <a>
                          {" "}
                          <i className="bi bi-envelope" /> Contact Us{" "}
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};
export default ServiceDetails;
