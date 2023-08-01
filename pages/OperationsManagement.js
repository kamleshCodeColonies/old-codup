import Breadcumb1 from "@/src/components/Breadcumb1";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import React, { useState } from "react";

const ServiceDetails = () => {
  const [service, setService] = useState({ ser: 1 });

  return (
    <Layout>
      <Breadcumb1
        pageName={"Operations Management"}
        title={"Operations Management"}
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
                          <h1> Operations Management</h1>
                        </div>
                        <div className="serivce-details-desc">
                          <p style={{ textAlign: "justify" }}>
                            Welcome to <b>Operations Management Consulting</b>,
                            where we specialize in helping businesses optimize
                            their operations, improve efficiency, and drive
                            productivity. Our consulting services encompass
                            process mapping and optimization, supply chain and
                            logistics management, inventory control and demand
                            forecasting, as well as lean management and waste
                            reduction. With our expertise in operations
                            management principles and methodologies, we assist
                            businesses in streamlining their processes,
                            enhancing their supply chain performance, and
                            implementing strategies to achieve operational
                            excellence.
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
                        <h4> Process Mapping and Optimization </h4>
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
                        <h4> Supply Chain and Logistics Management </h4>
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
                        <h4>Inventory Control and Demand Forecasting </h4>
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
                        <h4> Lean Management and Waste Reduction</h4>
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
                          Codup's competency in Operations Management Consulting
                          lies in our deep understanding of operational
                          principles, supply chain dynamics, and lean management
                          methodologies. Our consultants bring a wealth of
                          experience in assessing and optimizing various
                          operations across different industries. We combine our
                          expertise with data-driven insights to develop
                          customized solutions that align with your business
                          goals. With Codup as your operations management
                          partner, you can achieve streamlined processes,
                          improved supply chain performance, and operational
                          excellence that will drive your business forward.
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
                          <span> Improved Efficiency</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Enhanced Supply Chain Performance </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Effective Inventory Control</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span>
                            {" "}
                            Waste Reduction and Continuous Improvement
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
                          We begin by conducting a comprehensive assessment of
                          your current operations. Our consultants analyze your
                          processes, workflows, supply chain performance, and
                          inventory management practices. We identify pain
                          points, bottlenecks, and areas for improvement.
                        </p>

                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          Based on the assessment findings, we develop tailored
                          solutions to address your specific operational
                          challenges. Our consultants work closely with your
                          team to design optimized processes, implement supply
                          chain improvements, and establish effective inventory
                          control systems. We assist in the implementation of
                          these solutions, ensuring a smooth transition and
                          integration.
                        </p>

                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          Once the solutions are implemented, we monitor and
                          evaluate the performance of the optimized operations.
                          We establish key performance indicators (KPIs) and
                          metrics to measure the effectiveness of the
                          improvements. Our consultants provide ongoing support,
                          conduct regular reviews, and identify further
                          opportunities for optimization and continuous
                          improvement.
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
                        <p>Solution Design and Implementation</p>
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
                            Operations Management{" "}
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          legacyBehavior
                          href="/LegalandComplianceConsulting"
                        >
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 2,
                              })
                            }
                          >
                            {" "}
                            Legal and Compliance Consulting
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          legacyBehavior
                          href="/DigitalTransformationConsulting"
                        >
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 3,
                              })
                            }
                          >
                            {" "}
                            Digital Transformation Consulting{" "}
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/CommunicationConsulting">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 4,
                              })
                            }
                          >
                            {" "}
                            Communication Consulting{" "}
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
                          <h1> Legal and Compliance Consulting</h1>
                        </div>
                        <div className="serivce-details-desc">
                          <p style={{ textAlign: "justify" }}>
                            Welcome to <b>Legal and Compliance Consulting</b>,
                            your trusted partner in navigating the complex
                            landscape of legal and regulatory requirements. We
                            provide comprehensive consulting services to help
                            businesses ensure compliance, develop effective
                            policies and procedures, manage contracts, mitigate
                            risks, and receive expert legal support. Our team of
                            experienced legal professionals understands the
                            intricacies of various industries and regulatory
                            frameworks, enabling us to provide tailored
                            solutions that meet your specific needs.
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
                        <h4> Regulatory Compliance Assessment </h4>
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
                        <h4>Policy and Procedure Development</h4>
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
                        <h4> Policy and Procedure Development</h4>
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
                        <h4> Risk Mitigation and Legal Support </h4>
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
                          Codup's competency in Legal and Compliance Consulting
                          lies in our team of experienced legal professionals
                          with diverse expertise across industries. We stay
                          up-to-date with the latest legal and regulatory
                          developments, ensuring that our clients receive
                          accurate and reliable advice. Our commitment to
                          understanding your unique business requirements allows
                          us to deliver customized solutions that align with
                          your goals. With Codup as your legal and compliance
                          consulting partner, you can navigate complex legal
                          landscapes with confidence, minimize risks, and ensure
                          compliance to protect your business.
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
                          <span> Regulatory Compliance Assurance</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Customized Policies and Procedures </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Contract Drafting and Negotiation</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span>
                            {" "}
                            Dispute Resolution and Litigation Management{" "}
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
                          We begin by conducting a comprehensive compliance
                          assessment, including audits and risk assessments. Our
                          consultants evaluate your current compliance status,
                          identify gaps or areas of non-compliance, and assess
                          associated risks. This analysis forms the basis for
                          developing effective compliance strategies.{" "}
                        </p>

                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          Based on the assessment findings, we design tailored
                          solutions to address your specific legal and
                          compliance needs. We develop customized policies and
                          procedures, assist in contract drafting and
                          negotiation, and provide guidance on risk mitigation
                          strategies. Our consultants work closely with your
                          team to ensure seamless implementation of these
                          solutions.{" "}
                        </p>

                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          We provide ongoing support to help you maintain
                          compliance with changing laws and regulations. Our
                          consultants assist with compliance reporting and
                          documentation, conduct periodic compliance reviews,
                          and offer training to your employees on policy changes
                          and expectations. We remain a trusted partner in your
                          compliance journey, offering guidance and support
                          whenever needed.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="service-work-process-box">
                      <div className="service-work-process-number">
                        <span>01</span>
                      </div>

                      <div className="service-work-process-desc">
                        <p>Compliance Assessment and Analysis</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="service-work-process-box">
                      <div className="service-work-process-number">
                        <span>02</span>
                      </div>

                      <div className="service-work-process-desc">
                        <p>Solution Design and Implementation</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="service-work-process-box">
                      <div className="service-work-process-number">
                        <span>03</span>
                      </div>

                      <div className="service-work-process-desc">
                        <p>Ongoing Compliance Monitoring and Support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                {/* widget search */}

                <div className="widget-categories-box">
                  {/* categories title */}
                  <div className="categories-title">
                    <h4> Services </h4>
                  </div>
                  {/* widget categories menu */}
                  <div className="widget-categories-menu">
                    <ul>
                      <li>
                        <Link legacyBehavior href="/Operations Management">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 1,
                              })
                            }
                          >
                            {" "}
                            Operations Management{" "}
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
                            Legal and Compliance Consulting
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          legacyBehavior
                          href="/DigitalTransformationConsulting"
                        >
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 3,
                              })
                            }
                          >
                            {" "}
                            Digital Transformation Consulting{" "}
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/CommunicationConsulting">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 4,
                              })
                            }
                          >
                            {" "}
                            Communication Consulting{" "}
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
                          <h1> Digital Transformation Consulting</h1>
                        </div>
                        <div className="serivce-details-desc">
                          <p style={{ textAlign: "justify" }}>
                            Welcome to <b>Digital Transformation Consulting</b>,
                            where we empower organizations to navigate the
                            rapidly evolving digital landscape and unlock their
                            full potential. Our consulting services are designed
                            to guide you through the transformative journey,
                            leveraging the power of technology and data to drive
                            growth, innovation, and customer-centricity. With
                            our expertise in digital readiness assessment,
                            technology adoption, data-driven decision-making,
                            and customer experience enhancement, we help you
                            thrive in the digital age.
                          </p>
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
                        <h4> Digital Readiness Assessment </h4>
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
                        <h4> Technology Adoption and Implementation</h4>
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
                        <h4>Data-Driven Decision-Making Strategies </h4>
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
                        <h4> Customer Experience and Engagement</h4>
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
                          Codup's competency in Digital Transformation
                          Consulting lies in our deep understanding of digital
                          technologies, industry trends, and customer-centric
                          approaches. Our consultants have extensive experience
                          in guiding organizations through successful digital
                          transformations across various sectors. We combine
                          strategic thinking, technical expertise, and a focus
                          on driving tangible results to deliver transformative
                          outcomes. With Codup as your digital transformation
                          partner, you can embark on a journey of growth,
                          innovation, and digital excellence.
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
                          <span> Enhanced Competitiveness</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Increased Efficiency and Productivity</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Data-Driven Insights</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Agility and Adaptability </span>
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
                          We begin by assessing your organization's current
                          digital capabilities and maturity. Our consultants
                          conduct thorough evaluations, including technology
                          assessments, to identify gaps and opportunities for
                          digital transformation. This assessment forms the
                          foundation for developing tailored strategies and
                          roadmaps.{" "}
                        </p>

                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          Based on the assessment findings, we recommend
                          suitable technologies and oversee their
                          implementation. Our consultants manage the entire
                          process, from selecting digital tools and systems to
                          providing training and change management support. We
                          ensure a smooth transition and adoption of digital
                          solutions across your organization.{" "}
                        </p>

                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          Digital transformation is an ongoing journey. We help
                          you monitor and measure the impact of your digital
                          initiatives, providing insights for optimization and
                          continuous improvement. Our consultants collaborate
                          with you to refine strategies, identify new
                          opportunities, and adapt to evolving market dynamics,
                          ensuring sustained success in the digital era.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="service-work-process-box">
                      <div className="service-work-process-number">
                        <span>01</span>
                      </div>

                      <div className="service-work-process-desc">
                        <p>Digital Readiness Assessment</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="service-work-process-box">
                      <div className="service-work-process-number">
                        <span>02</span>
                      </div>

                      <div className="service-work-process-desc">
                        <p>Technology Adoption and Implementation</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="service-work-process-box">
                      <div className="service-work-process-number">
                        <span>03</span>
                      </div>

                      <div className="service-work-process-desc">
                        <p>Continuous Monitoring and Optimization</p>
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
                        <Link legacyBehavior href="/OperationsManagement">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 1,
                              })
                            }
                          >
                            {" "}
                            Operations Management{" "}
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          legacyBehavior
                          href="/LegalandComplianceConsulting"
                        >
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 2,
                              })
                            }
                          >
                            {" "}
                            Legal and Compliance Consulting
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
                            Digital Transformation Consulting{" "}
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/CommunicationConsulting">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 4,
                              })
                            }
                          >
                            {" "}
                            Communication Consulting{" "}
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
                          <h1> Communication Consulting</h1>
                        </div>
                        <div className="serivce-details-desc">
                          <p style={{ textAlign: "justify" }}>
                            Welcome to <b>Communication Consulting</b>, where we
                            help organizations master the art of effective
                            communication to build strong relationships, enhance
                            brand reputation, and drive success. Our consulting
                            services empower you to develop comprehensive
                            communication strategies, engage stakeholders,
                            navigate crises, and craft compelling brand
                            messaging. With our expertise in internal and
                            external communication, stakeholder management,
                            crisis communication, and brand positioning, we
                            ensure that your organization's message is clear,
                            impactful, and resonates with your target audiences.
                          </p>
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
                        <h4>Internal and External Communication Strategies</h4>
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
                        <h4> Stakeholder Engagement and Management</h4>
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
                        <h4>Crisis Communication Planning and Response </h4>
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
                        <h4> Brand Messaging and Positioning </h4>
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
                          Codup's competency in Communication Consulting lies in
                          our deep understanding of effective communication
                          strategies, stakeholder engagement, crisis management,
                          and brand positioning. Our consultants have extensive
                          experience working with diverse organizations across
                          industries, helping them achieve their communication
                          goals. We combine strategic thinking, creative
                          storytelling, and expertise in various communication
                          channels to deliver impactful results. With Codup as
                          your communication partner, you can unlock the power
                          of effective communication and establish a strong,
                          influential presence in the market.
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
                          <span> Enhanced Organizational Alignment</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Stronger Stakeholder Relationships </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Crisis Preparedness and Management</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Improved Communication Effectiveness </span>
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
                          We begin by understanding your organization's goals,
                          values, and target audiences. Our consultants conduct
                          thorough assessments of your existing communication
                          practices and develop tailored communication
                          strategies aligned with your objectives. This includes
                          internal and external communication plans, stakeholder
                          engagement strategies, and crisis communication
                          protocols.{" "}
                        </p>

                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          Once the communication strategies are developed, we
                          assist you in implementing them effectively. This
                          involves creating communication channels, developing
                          content, training employees, and executing stakeholder
                          engagement initiatives. We ensure that your
                          communication efforts are consistent, impactful, and
                          aligned with your brand identity.{" "}
                        </p>

                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          We continuously monitor and evaluate the effectiveness
                          of your communication initiatives. Our consultants
                          analyze key metrics, gather feedback, and provide
                          insights to optimize your communication strategies. By
                          measuring the impact of your communication efforts,
                          you can identify areas for improvement, refine your
                          messaging, and enhance your overall communication
                          effectiveness.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="service-work-process-box">
                      <div className="service-work-process-number">
                        <span>01</span>
                      </div>

                      <div className="service-work-process-desc">
                        <p>Communication Strategy Development</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="service-work-process-box">
                      <div className="service-work-process-number">
                        <span>02</span>
                      </div>

                      <div className="service-work-process-desc">
                        <p>Implementation and Execution</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="service-work-process-box">
                      <div className="service-work-process-number">
                        <span>03</span>
                      </div>

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
                        <Link legacyBehavior href="/Operations Management">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 1,
                              })
                            }
                          >
                            {" "}
                            Operations Management{" "}
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          legacyBehavior
                          href="/LegalandComplianceConsulting"
                        >
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 2,
                              })
                            }
                          >
                            {" "}
                            Legal and Compliance Consulting
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          legacyBehavior
                          href="/DigitalTransformationConsulting"
                        >
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 3,
                              })
                            }
                          >
                            {" "}
                            Digital Transformation Consulting{" "}
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
                            Communication Consulting{" "}
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
    </Layout>
  );
};
export default ServiceDetails;
