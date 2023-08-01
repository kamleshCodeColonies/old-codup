import Breadcumb1 from "@/src/components/Breadcumb1";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import React, { useState } from "react";

const ServiceDetails = () => {
  const [service, setService] = useState({ ser: 4 });

  return (
    <Layout>
      <Breadcumb1
        pageName={"Valuation Consulting"}
        title={"Valuation Consulting"}
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
                          <h1> Strategy Consulting</h1>
                        </div>
                        <div className="serivce-details-desc">
                          <p style={{ textAlign: "justify" }}>
                            Welcome to <b>Strategy Consulting</b>, where we
                            specialize in helping businesses navigate the
                            complexities of the market and develop robust
                            strategies for success. Our consulting services
                            encompass market analysis, strategic planning,
                            business model innovation, scenario planning, and
                            risk management. By partnering with us, you can gain
                            valuable insights, align your goals with your
                            vision, and create a roadmap for sustainable growth
                            and competitive advantage.
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
                        <h4> Market Analysis and Competitive Intelligence </h4>
                      </div>
                      <div className="services-detials-desc"></div>
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
                        <h4> Strategic Planning and Goal Alignment </h4>
                      </div>
                      <div className="services-detials-desc"></div>
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
                        <h4>Business Model Innovation </h4>
                      </div>
                      <div className="services-detials-desc"></div>
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
                        <h4> Scenario Planning and Risk Management </h4>
                      </div>
                      <div className="services-detials-desc"></div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="service-details-content">
                      <div className="service-page-title2">
                        <h1>Competency</h1>
                      </div>
                      <div className="serivce-details-desc">
                        <p className="pb-35" style={{ textAlign: "justify" }}>
                          At Codup, we are committed to delivering excellence in
                          Strategy Consulting. Our consultants possess deep
                          industry knowledge and expertise, enabling us to
                          provide tailored solutions that address your specific
                          challenges. We prioritize collaboration and
                          partnership, working closely with you to understand
                          your unique business needs and deliver strategic
                          insights that drive tangible results. Trust Codup as
                          your trusted advisor in strategy development, and
                          together, we can unlock the potential of your business
                          and position you for long-term success.
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
                          <span> In-depth Market Insights</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Strategic Planning and Alignment </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Business Model Innovation</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Ongoing Monitoring and Evaluation</span>
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
                          We start by gaining a comprehensive understanding of
                          your business, industry, and goals. Through in-depth
                          market research and analysis, we identify market
                          trends, competitors, and growth opportunities. We also
                          assess your current strategies, business model, and
                          risk landscape.
                        </p>

                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          Based on our analysis, we collaborate with you to
                          develop a customized strategy. This involves
                          facilitating strategic planning sessions, defining
                          your vision and goals, and identifying key
                          initiatives. We work closely with your team to ensure
                          the strategy is actionable, measurable, and aligned
                          with your business objectives.
                        </p>

                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          Once the strategy is defined, we support you
                          throughout the implementation process. Our consultants
                          provide guidance, resources, and expertise to help you
                          execute your strategic initiatives. We also establish
                          monitoring and evaluation mechanisms to track
                          progress, measure outcomes, and make data-driven
                          adjustments as needed.
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
                        <p>Discovery and Analysis</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="service-work-process-box">
                      <div className="service-work-process-number">
                        <span>02</span>
                      </div>

                      <div className="service-work-process-desc">
                        <p>Strategy Development and Planning</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="service-work-process-box">
                      <div className="service-work-process-number">
                        <span>03</span>
                      </div>

                      <div className="service-work-process-desc">
                        <p>Implementation and Evaluation</p>
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
                            Strategy Consulting{" "}
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          legacyBehavior
                          href="/MergerandAcquisitionConsulting"
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
                            Merger and Acquisition Consulting
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/PrivateEquityConsulting">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 3,
                              })
                            }
                          >
                            {" "}
                            Private Equity Consulting{" "}
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/ValuationConsulting">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 4,
                              })
                            }
                          >
                            {" "}
                            Valuation Consulting{" "}
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
                          <h1> Merger and Acquisition Consulting</h1>
                        </div>
                        <div className="serivce-details-desc">
                          <p style={{ textAlign: "justify" }}>
                            Welcome to <b>Merger and Acquisition Consulting</b>,
                            where we specialize in guiding businesses through
                            the complex process of mergers and acquisitions. Our
                            consulting services cover target identification and
                            due diligence, valuation and financial modeling,
                            deal structuring and negotiation, as well as
                            integration planning and execution. With our
                            expertise and support, you can navigate the
                            intricacies of M&A transactions, maximize value, and
                            ensure a successful integration of the acquired
                            company into your organization.
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
                        <h4>Market Analysis and Competitive Intelligence </h4>
                      </div>
                      <div className="services-detials-desc"></div>
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
                        <h4>Strategic Planning and Goal Alignment </h4>
                      </div>
                      <div className="services-detials-desc"></div>
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
                        <h4>Business Model Innovation</h4>
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
                        <h4>Scenario Planning and Risk Management</h4>
                      </div>
                      <div className="services-detials-desc"></div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="service-details-content">
                      <div className="service-page-title2">
                        <h1>Competency</h1>
                      </div>
                      <div className="serivce-details-desc">
                        <p className="pb-35" style={{ textAlign: "justify" }}>
                          At Codup, we possess a proven competency in Merger and
                          Acquisition Consulting. Our team combines extensive
                          experience in M&A transactions with deep industry
                          knowledge, enabling us to provide tailored solutions
                          that address your unique needs. We prioritize
                          collaboration and transparency, working closely with
                          you throughout the entire process to ensure successful
                          outcomes. Trust Codup as your partner in M&A
                          transactions, and together, we can navigate the
                          complexities of mergers and acquisitions and drive
                          growth for your business.
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
                          <span> Target Identification and Due Diligence</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Valuation and Financial Modeling </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Deal Structuring and Negotiation</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Integration Planning and Execution </span>
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
                          We start by understanding your M&A objectives and
                          strategic priorities. Our consultants conduct thorough
                          market research and analysis to identify potential
                          acquisition targets. We perform due diligence,
                          assessing the financial and operational aspects of
                          target companies. Based on our findings, we
                          collaborate with you to develop a comprehensive M&A
                          strategy and roadmap.{" "}
                        </p>

                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          With a clear understanding of the target company's
                          value, we guide you through the valuation process
                          using various methods. Our experts develop financial
                          models that analyze the financial impact of the
                          acquisition, enabling you to make informed decisions.
                          We assist in negotiating favorable terms and
                          conditions, ensuring alignment with your strategic
                          goals.{" "}
                        </p>

                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          Once the acquisition is finalized, we help you develop
                          integration strategies and plans. Our consultants
                          coordinate cross-functional teams, addressing cultural
                          and organizational challenges that may arise during
                          the integration process. We closely monitor and
                          evaluate the progress of integration activities,
                          ensuring the realization of synergies and value from
                          the acquisition.{" "}
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
                        <p>Evaluation and Planning</p>
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
                        <p>Valuation and Negotiation</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="service-work-process-box">
                      <div className="service-work-process-number">
                        <span>03</span>
                      </div>

                      <div className="service-work-process-desc">
                        <p>Integration and Value Realization</p>
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
                        <Link legacyBehavior href="/StrategyConsulting">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 1,
                              })
                            }
                          >
                            {" "}
                            Strategy Consulting{" "}
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
                            Merger and Acquisition Consulting
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/PrivateEquityConsulting">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 3,
                              })
                            }
                          >
                            {" "}
                            Private Equity Consulting{" "}
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/ValuationConsulting">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 4,
                              })
                            }
                          >
                            {" "}
                            Valuation Consulting{" "}
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
                          <h1>Private Equity Consulting</h1>
                        </div>
                        <div className="serivce-details-desc">
                          <p style={{ textAlign: "justify" }}>
                            Welcome to <b>Private Equity Consulting</b>, where
                            we specialize in providing comprehensive guidance
                            and support to private equity firms and investors.
                            Our consulting services cover investment opportunity
                            assessment, due diligence and risk analysis,
                            portfolio company performance improvement, as well
                            as exit strategy planning and execution. With our
                            expertise and strategic insights, we help you make
                            informed investment decisions, optimize portfolio
                            company performance, and achieve successful exits.
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
                        <h4>Investment Opportunity Assessment </h4>
                      </div>
                      <div className="services-detials-desc"></div>
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
                        <h4>Due Diligence and Risk Analysis</h4>
                      </div>
                      <div className="services-detials-desc"></div>
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
                        <h4>Portfolio Company Performance Improvement</h4>
                      </div>
                      <div className="services-detials-desc"></div>
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
                        <h4>Exit Strategy Planning and Execution </h4>
                      </div>
                      <div className="services-detials-desc"></div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="service-details-content">
                      <div className="service-page-title2">
                        <h1>Competency</h1>
                      </div>
                      <div className="serivce-details-desc">
                        <p className="pb-35" style={{ textAlign: "justify" }}>
                          Codup's competency in Private Equity Consulting is
                          built on our deep understanding of the private equity
                          landscape and our ability to provide tailored
                          solutions to our clients. Our team consists of
                          seasoned professionals with extensive experience in
                          private equity transactions, portfolio management, and
                          exit strategies. We combine our industry knowledge,
                          analytical capabilities, and strategic thinking to
                          deliver results that drive value for our clients.
                          Trust Codup as your partner in private equity
                          ventures, and together, we can navigate the
                          complexities of the private equity landscape and
                          maximize your investment outcomes.
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
                          <span> Investment Opportunity Assessment</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Due Diligence and Risk Analysis </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span>
                            {" "}
                            Portfolio Company Performance Improvement
                          </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Exit Strategy Planning and Execution </span>
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
                          We begin by understanding your investment objectives
                          and criteria. Our consultants conduct thorough
                          industry and market analysis, evaluating potential
                          investment opportunities. We perform financial
                          analysis to assess growth potential and investment
                          risks. Based on our findings, we provide you with
                          detailed reports and recommendations for investment
                          consideration.{" "}
                        </p>

                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          Once an investment opportunity is identified, we
                          conduct comprehensive due diligence. Our experts
                          evaluate financial statements, operations, and market
                          positioning. We assess risks and opportunities
                          associated with the investment. We provide you with a
                          detailed due diligence report, highlighting key
                          findings and recommendations for informed
                          decision-making.{" "}
                        </p>

                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          After an investment is made, we collaborate with
                          portfolio companies to develop performance improvement
                          plans. Our consultants identify operational
                          efficiencies, cost optimization opportunities, and
                          revenue growth strategies. We work closely with
                          management teams to implement these initiatives and
                          enhance portfolio company performance. Additionally,
                          we assist in developing exit strategies aligned with
                          your investment objectives, ensuring a smooth and
                          successful exit process.{" "}
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
                        <p>Investment Opportunity Assessment</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="service-work-process-box">
                      <div className="service-work-process-number">
                        <span>02</span>
                      </div>

                      <div className="service-work-process-desc">
                        <p>Due Diligence and Risk Analysis</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="service-work-process-box">
                      <div className="service-work-process-number">
                        <span>03</span>
                      </div>

                      <div className="service-work-process-desc">
                        <p>Portfolio Management and Exit Strategy</p>
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
                        <Link legacyBehavior href="/StrategyConsulting">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 1,
                              })
                            }
                          >
                            {" "}
                            Strategy Consulting{" "}
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          legacyBehavior
                          href="/MergerandAcquisitionConsulting"
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
                            Merger and Acquisition Consulting
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
                            Private Equity Consulting{" "}
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/ValuationConsulting">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 4,
                              })
                            }
                          >
                            {" "}
                            Valuation Consulting{" "}
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
                          <h1> Valuation Consulting</h1>
                        </div>
                        <div className="serivce-details-desc">
                          <p style={{ textAlign: "justify" }}>
                            Welcome to <b>Valuation Consulting</b>, where we
                            specialize in providing comprehensive valuation
                            services to help businesses assess their worth
                            accurately. Our consulting services cover a range of
                            valuation methods and techniques, financial
                            forecasting and modeling, comparable company
                            analysis, as well as valuations for mergers,
                            acquisitions, and IPOs. With our expertise in
                            valuation methodologies and financial analysis, we
                            assist businesses in making informed decisions
                            regarding their financial position, investment
                            opportunities, and strategic transactions.
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
                        <h4>Business Valuation Methods and Techniques </h4>
                      </div>
                      <div className="services-detials-desc"></div>
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
                        <h4> Financial Forecasting and Modeling</h4>
                      </div>
                      <div className="services-detials-desc"></div>
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
                        <h4>Comparable Company Analysis </h4>
                      </div>
                      <div className="services-detials-desc"></div>
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
                        <h4> Valuation for Mergers, Acquisitions, or IPOs</h4>
                      </div>
                      <div className="services-detials-desc"></div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="service-details-content">
                      <div className="service-page-title2">
                        <h1>Competency</h1>
                      </div>
                      <div className="serivce-details-desc">
                        <p className="pb-35" style={{ textAlign: "justify" }}>
                          Codup's competency in Valuation Consulting is built on
                          our team's expertise in financial analysis, valuation
                          methodologies, and industry knowledge. Our consultants
                          possess a deep understanding of various valuation
                          techniques and apply them appropriately based on
                          industry-specific factors. We combine rigorous
                          analysis with strategic insights, helping you make
                          informed decisions and maximize the value of your
                          business. Trust Codup as your partner in valuation
                          consulting, and together, we can accurately assess the
                          worth of your business and drive strategic outcomes.
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
                          <span> Accurate Business Valuation</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Informed Decision Making </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Benchmarking and Industry Analysis</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Transaction Support </span>
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
                          We begin by understanding your specific needs and the
                          purpose of the valuation. Our consultants assess your
                          industry, financial statements, and business
                          attributes to determine the most appropriate valuation
                          methods and techniques. We select the methodologies
                          that align with your business characteristics and
                          provide the most accurate valuation outcomes.{" "}
                        </p>

                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          Once the valuation methods are determined, we collect
                          relevant data, including financial statements,
                          industry benchmarks, and market data. Our experts
                          perform in-depth financial analysis, analyzing key
                          performance indicators, revenue drivers, and cost
                          structures. We also incorporate historical data and
                          industry trends into our financial forecasting and
                          modeling exercises.{" "}
                        </p>

                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          Based on the analysis and data collected, we develop a
                          comprehensive valuation report. This report presents
                          the findings, methodologies used, assumptions made,
                          and supporting evidence. We provide you with insights
                          into the key value drivers of your business, areas for
                          improvement, and potential strategies for enhancing
                          value. Our consultants are available to discuss and
                          explain the valuation report in detail, ensuring you
                          have a clear understanding of the valuation results.{" "}
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
                        <p>Valuation Method Selection</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="service-work-process-box">
                      <div className="service-work-process-number">
                        <span>02</span>
                      </div>

                      <div className="service-work-process-desc">
                        <p>Data Collection and Analysis</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="service-work-process-box">
                      <div className="service-work-process-number">
                        <span>03</span>
                      </div>

                      <div className="service-work-process-desc">
                        <p>Valuation Report and Insights</p>
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
                        <Link legacyBehavior href="/StrategyConsulting">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 1,
                              })
                            }
                          >
                            {" "}
                            Strategy Consulting{" "}
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          legacyBehavior
                          href="/MergerandAcquisitionConsulting"
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
                            Merger and Acquisition Consulting
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/PrivateEquityConsulting">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 3,
                              })
                            }
                          >
                            {" "}
                            Private Equity Consulting{" "}
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
                            Valuation Consulting{" "}
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
