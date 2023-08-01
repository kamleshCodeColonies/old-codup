import Breadcumb from "@/src/components/Breadcumb";
import Layout from "@/src/layout/Layout";
const PortfolioDetails = () => {
  return (
    <Layout>
      <Breadcumb pageName={"Sr. Accountant"} title={"Finance Division"} />
      <div className="case-study-details">
        <div className="container">
          <div className="case-study-intro">
            <div className="row align-items-center">
              <div className=" col-sm-12 col-md-6 col-lg-6">
                <div className="csd-thumb">
                  <img
                    src="assets/images/resource/portfolio-details.jpg"
                    alt="thumb"
                  />
                </div>
              </div>
              <div className=" col-sm-12 col-md-6 col-lg-6">
                <div className="csd-info">
                  <div className="csd-title pt-30 mb-4">
                    <h3>Job Overviews</h3>
                  </div>
                  <ul>
                    <li>
                      <strong>Location</strong> <span>Ahmedabad </span>{" "}
                    </li>
                    <li>
                      <strong>Job Title</strong> <span>Sr. Accountant</span>{" "}
                    </li>
                    <li className="hr-4">
                      <strong>Hours </strong>{" "}
                      <span>8h / day (5 days working)</span>{" "}
                    </li>
                    <li className="hr-4">
                      <strong>Mail Your Resume </strong>{" "}
                      <span style={{ textTransform: "lowercase" }}>
                        hr@codup.tech
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="case-study-intro upp">
            <div className="csd-content">
              <div className="service-details-icon-box">
                <div className="service-page-title2">
                  <h1>Job Summary :</h1>
                  <p style={{ textAlign: "justify" }}>
                    Our company is looking for an experienced Senior Accountant
                    to join our team. As a Senior Accountant, you will be
                    responsible for managing all financial activities for the
                    company to ensure compliance with accounting principles and
                    regulations. The ideal candidate will have a strong
                    background in accounting and financial reporting, with
                    exceptional problem-solving skills and attention to detail.
                  </p>

                  <img
                    className="my-4"
                    src="assets/images/case/1.jpg"
                    alt="Case image"
                  />
                </div>
              </div>
              <div className="service-details-icon-box">
                <div className="service-page-title2">
                  <h1>Key Responsibilities:</h1>
                </div>
                <div className="widget-service-details-icon">
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Manage accounting operations, including accounts
                      receivable, accounts payable, payroll, and general ledger
                      accounting.
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Prepare and analyze financial statements and reports,
                      including balance sheets, income statements, and cash flow
                      statements.{" "}
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Develop and implement accounting policies and procedures
                      to ensure compliance with accounting principles and
                      regulations.{" "}
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Ensure accuracy and completeness of all financial records
                      and reports.
                    </span>
                  </p>

                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Provide support for audits and prepare audit schedules.
                    </span>
                  </p>

                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Collaborate with various departments to provide financial
                      guidance and support.
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Monitor and analyze accounting data and produce financial
                      reports or statements as needed.
                    </span>
                  </p>
                </div>
              </div>

              <div className="service-details-icon-box">
                <div className="service-page-title2">
                  <h1>Qualifications:</h1>
                </div>
                <div className="widget-service-details-icon">
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span> Bachelor's degree in Accounting or Finance.</span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span> CPA certification preferred. </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      3-5 years of experience in accounting or finance (with at
                      least 2 years in a senior accountant role).{" "}
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Strong knowledge of accounting principles, practices, and
                      regulations.
                    </span>
                  </p>

                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Excellent analytical and problem-solving skills.
                    </span>
                  </p>

                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span> Exceptional attention to detail and accuracy.</span>
                  </p>

                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Proficiency in accounting software and Microsoft Excel.
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span> Strong communication and interpersonal skills.</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="service-details-icon-box pt-3">
              <div className="service-page-title2">
                <p
                  style={{
                    textAlign: "justify",
                    fontSize: "15px",
                  }}
                >
                  <b>
                    If you meet these qualifications and are interested in this
                    exciting opportunity, please submit your application
                    including your resume.
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default PortfolioDetails;
