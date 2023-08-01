import Breadcumb1 from "@/src/components/Breadcumb1";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import React, { useState } from "react";

const ServiceDetails = () => {
  const [service, setService] = useState({ ser: 3 });

  return (
    <Layout>
      <Breadcumb1
        pageName={"Marketing Consulting"}
        title={"Marketing Consulting"}
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
                          <h1> HR Consulting</h1>
                        </div>
                        <div className="serivce-details-desc">
                          <p style={{ textAlign: "justify" }}>
                            Welcome to <b>HR Consulting</b>, where we specialize
                            in helping organizations optimize their human
                            resources processes to attract, develop, engage, and
                            retain top talent. Our comprehensive HR consulting
                            services cover talent acquisition, performance
                            management, employee engagement, and training and
                            development programs. With our expertise in HR
                            strategies and best practices, we empower you to
                            build a high-performing workforce that drives
                            organizational success.
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
                        <h4> Talent Acquisition and Recruitment </h4>
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
                        <h4> Performance Management and Appraisal</h4>
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
                        <h4> Employee Engagement and Retention </h4>
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
                        <h4> Training and Development Programs </h4>
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
                          Codup's competency in HR Consulting lies in our deep
                          understanding of HR strategies, best practices, and
                          compliance. Our consultants have extensive experience
                          working with organizations of various sizes and
                          industries, enabling us to tailor our services to your
                          specific needs. We combine our expertise in talent
                          acquisition, performance management, employee
                          engagement, and training and development to provide
                          comprehensive HR solutions that drive organizational
                          success. With Codup as your HR consulting partner, you
                          can optimize your HR processes, build a thriving
                          workforce, and achieve your strategic objectives.
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
                          <span> Access to Top Talent</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Improved Performance and Productivity </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span>
                            {" "}
                            Enhanced Employee Engagement and Retention
                          </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Customized Training and Development</span>
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
                          We begin by understanding your organization's specific
                          HR needs, challenges, and goals. Our consultants
                          conduct a thorough analysis of your existing HR
                          processes, policies, and systems. We also gather
                          insights from key stakeholders and employees through
                          interviews and surveys to identify areas for
                          improvement.
                        </p>

                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          Based on the needs assessment, we develop a customized
                          HR strategy and action plan tailored to your
                          organization. This includes designing talent
                          acquisition processes, performance management
                          frameworks, employee engagement initiatives, and
                          training programs. We work closely with your HR team
                          to implement the recommended strategies, ensuring
                          smooth integration and adoption.
                        </p>

                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          We believe in the power of data-driven
                          decision-making. We help you establish HR metrics and
                          performance indicators to monitor the effectiveness of
                          implemented strategies. Through regular evaluation and
                          feedback, we identify areas for continuous improvement
                          and make necessary adjustments to optimize your HR
                          processes and initiatives.
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
                        <p>Needs Assessment and Analysis</p>
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
                        <p>Strategic Planning and Implementation</p>
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
                            HR Consulting{" "}
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/SalesConsulting">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 2,
                              })
                            }
                          >
                            {" "}
                            Sales Consulting
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/MarketingConsulting">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 3,
                              })
                            }
                          >
                            {" "}
                            Marketing Consulting{" "}
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          legacyBehavior
                          href="/ProjectManagementConsulting"
                        >
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 4,
                              })
                            }
                          >
                            {" "}
                            Project Management Consulting{" "}
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
                          <h1> Sales Consulting</h1>
                        </div>
                        <div className="serivce-details-desc">
                          <p style={{ textAlign: "justify" }}>
                            Welcome to <b>Sales Consulting</b>, where we
                            specialize in helping businesses optimize their
                            sales strategies, processes, and performance to
                            drive revenue growth. Our comprehensive sales
                            consulting services cover sales strategy
                            development, sales process optimization, sales team
                            training and coaching, and sales performance
                            measurement. With our expertise in sales
                            methodologies and best practices, we empower your
                            sales team to achieve exceptional results and exceed
                            revenue targets.
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
                        <h4> Sales Strategy Development </h4>
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
                        <h4>Sales Process Optimization </h4>
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
                        <h4> Sales Team Training and Coaching</h4>
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
                        <h4> Sales Performance Measurement </h4>
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
                          Codup's competency in Sales Consulting lies in our
                          deep understanding of sales methodologies, market
                          dynamics, and customer behavior. Our consultants have
                          extensive experience working with businesses across
                          various industries, allowing us to tailor our services
                          to your unique needs. We combine our expertise in
                          sales strategy, process optimization, team training,
                          and performance measurement to deliver tangible
                          results. With Codup as your sales consulting partner,
                          you can unlock your sales team's full potential, drive
                          revenue growth, and achieve sustainable success.
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
                          <span> Enhanced Sales Strategy</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Streamlined Sales Process </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Empowered Sales Team</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Scalable and Sustainable Growth </span>
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
                          We start by conducting a comprehensive assessment of
                          your current sales strategies, processes, and team
                          dynamics. Our consultants gather insights through data
                          analysis, interviews, and stakeholder consultations.
                          We identify strengths, weaknesses, and areas for
                          improvement, providing a solid foundation for the
                          development of customized solutions.{" "}
                        </p>

                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          Based on the assessment findings, we collaborate with
                          your team to develop a tailored sales strategy. This
                          includes defining target market segments, setting
                          revenue targets, and designing pricing and
                          distribution strategies. We also optimize the sales
                          process, implement CRM systems, and develop training
                          programs. Through close collaboration, we ensure the
                          seamless implementation of the recommended strategies.{" "}
                        </p>

                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          We establish performance metrics and reporting
                          mechanisms to monitor the effectiveness of the
                          implemented sales strategies. By analyzing sales data,
                          conducting performance assessments, and providing
                          ongoing feedback, we continuously refine and improve
                          your sales approach. Our consultants work closely with
                          your team to identify opportunities, address
                          challenges, and optimize sales performance.{" "}
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
                        <p>Performance Monitoring and Continuous Improvement</p>
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
                      <li>
                        <Link legacyBehavior href="/HRConsulting">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 1,
                              })
                            }
                          >
                            {" "}
                            HR Consulting{" "}
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
                            Sales Consulting
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/MarketingConsulting">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 3,
                              })
                            }
                          >
                            {" "}
                            Marketing Consulting{" "}
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          legacyBehavior
                          href="/ProjectManagementConsulting"
                        >
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 4,
                              })
                            }
                          >
                            {" "}
                            Project Management Consulting{" "}
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
                          <h1> Marketing Consulting</h1>
                        </div>
                        <div className="serivce-details-desc">
                          <p style={{ textAlign: "justify" }}>
                            Welcome to <b>Marketing Consulting</b>, where we
                            specialize in helping businesses develop effective
                            marketing strategies, enhance brand positioning, and
                            drive impactful digital marketing campaigns. Our
                            comprehensive marketing consulting services cover
                            market research and analysis, branding and
                            positioning strategies, digital marketing campaigns,
                            and marketing analytics and measurement. With our
                            expertise in marketing best practices and
                            data-driven insights, we empower your business to
                            achieve marketing success and maximize your return
                            on investment.
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
                        <h4> Marketing Strategy and Planning </h4>
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
                        <h4> Branding and Positioning Strategies</h4>
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
                        <h4>Digital Marketing Campaigns</h4>
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
                        <h4> Marketing Analytics and Measurement </h4>
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
                          Codup's competency in Marketing Consulting lies in our
                          deep understanding of market dynamics, consumer
                          behavior, and digital marketing trends. Our team of
                          experienced marketing consultants brings a wealth of
                          industry knowledge and expertise to every client
                          engagement. We are well-versed in developing strategic
                          marketing plans, implementing effective branding
                          strategies, and driving impactful digital marketing
                          campaigns. With Codup as your marketing consulting
                          partner, you can unlock new growth opportunities,
                          amplify your brand's reach, and achieve marketing
                          success in a rapidly evolving digital landscape.
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
                          <span> Strategic Marketing Planning</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Enhanced Brand Positioning </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Impactful Digital Marketing Campaigns</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Improved Marketing ROI </span>
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
                          We begin by conducting a thorough assessment of your
                          current marketing efforts, including analyzing your
                          market positioning, brand messaging, and existing
                          marketing campaigns. We also evaluate your target
                          audience and competitor landscape. Through this
                          assessment, we identify areas of improvement and
                          opportunities for growth.{" "}
                        </p>

                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          Based on the assessment findings, we work closely with
                          you to develop a customized marketing strategy and
                          plan. This includes defining target audiences,
                          crafting brand positioning, designing digital
                          marketing campaigns, and allocating marketing budgets.
                          We collaborate with your team to ensure seamless
                          execution, leveraging our expertise in marketing best
                          practices and industry trends.{" "}
                        </p>

                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          We implement marketing analytics tools to track and
                          measure the performance of your marketing campaigns.
                          Our consultants analyze the collected data, generate
                          reports, and provide insights to optimize your
                          marketing strategies. We continuously monitor the
                          results, identify areas for improvement, and make
                          data-driven adjustments to enhance campaign
                          effectiveness and maximize ROI.{" "}
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
                        <p>Strategy Development and Execution</p>
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
                        <p>Measurement and Optimization</p>
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
                      <li>
                        <Link legacyBehavior href="/HRConsulting">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 1,
                              })
                            }
                          >
                            {" "}
                            HR Consulting{" "}
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/SalesConsulting">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 2,
                              })
                            }
                          >
                            {" "}
                            Sales Consulting
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
                            Marketing Consulting{" "}
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          legacyBehavior
                          href="/ProjectManagementConsulting"
                        >
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 4,
                              })
                            }
                          >
                            {" "}
                            Project Management Consulting{" "}
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
                          <h1> Project Management Consulting</h1>
                        </div>
                        <div className="serivce-details-desc">
                          <p style={{ textAlign: "justify" }}>
                            Welcome to <b>Project Management Consulting</b>,
                            where we specialize in helping businesses
                            successfully plan, execute, and deliver projects of
                            all sizes and complexities. Our experienced project
                            management consultants work closely with your team
                            to define project objectives, develop comprehensive
                            project plans, manage resources, mitigate risks, and
                            ensure successful project outcomes. With our
                            expertise in project management methodologies and
                            best practices, we empower your organization to
                            streamline processes, optimize resource utilization,
                            and achieve project success.
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
                        <h4>Project Planning and Scheduling </h4>
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
                        <h4> Scope Definition and Requirements Gathering</h4>
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
                        <h4>Resource Allocation and Task Management </h4>
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
                        <h4> Risk Assessment and Mitigation</h4>
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
                          Codup's competency in Project Management Consulting
                          stems from our extensive experience in successfully
                          managing diverse projects across industries. Our team
                          of seasoned project management consultants possesses
                          deep knowledge of project management methodologies,
                          tools, and best practices. We excel in defining clear
                          project objectives, implementing effective project
                          plans, managing resources, mitigating risks, and
                          ensuring on-time project delivery. With Codup as your
                          project management consulting partner, you can expect
                          streamlined project processes, improved project
                          outcomes, and enhanced organizational efficiency.
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
                          <span> Effective Project Planning and Execution</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span>
                            {" "}
                            Improved Resource Allocation and Task Management{" "}
                          </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Proactive Risk Assessment and Mitigation</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span>
                            {" "}
                            Streamlined Project Communication and Reporting{" "}
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
                          Our consultants begin by assessing your project
                          requirements, objectives, and constraints. We
                          collaborate closely with your team to define project
                          scope, deliverables, and resource needs. Through
                          stakeholder interviews and requirements gathering
                          workshops, we ensure a clear understanding of project
                          expectations. Based on this assessment, we develop a
                          comprehensive project plan, including timelines,
                          milestones, and resource allocation.{" "}
                        </p>

                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          Once the project plan is in place, we work alongside
                          your team to execute the project according to the
                          defined scope and objectives. Our consultants
                          facilitate effective project communication and
                          reporting, ensuring all stakeholders are informed and
                          engaged. We closely monitor project progress, track
                          milestones, and manage resources to ensure timely
                          delivery.{" "}
                        </p>

                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          Throughout the project lifecycle, our consultants
                          conduct proactive risk assessments and implement risk
                          mitigation strategies. We monitor project risks,
                          identify potential issues, and take corrective actions
                          as needed. After project completion, we conduct
                          post-project evaluations and lessons learned sessions
                          to document successes, identify areas for improvement,
                          and enhance future project management practices.{" "}
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
                        <p>Project Assessment and Planning</p>
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
                        <p>Project Execution and Monitoring</p>
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
                        <p>Risk Management and Continuous Improvement</p>
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
                      <li>
                        <Link legacyBehavior href="/HRConsulting">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 1,
                              })
                            }
                          >
                            {" "}
                            HR Consulting{" "}
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/SalesConsulting">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 2,
                              })
                            }
                          >
                            {" "}
                            Sales Consulting
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/MarketingConsulting">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 3,
                              })
                            }
                          >
                            {" "}
                            Marketing Consulting{" "}
                          </a>
                        </Link>
                      </li>
                      <li className="active">
                        <Link legacyBehavior href="javascript:void(0)">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 4,
                              })
                            }
                          >
                            {" "}
                            Project Management Consulting{" "}
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
