import Breadcumb from "@/src/components/Breadcumb";
import Layout from "@/src/layout/Layout";
const PortfolioDetails = () => {
  return (
    <Layout>
      <Breadcumb pageName={"Project Manager  "} title={"IT Division "} />
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
                      <strong>Job Title</strong> <span>Project Manager</span>{" "}
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
                    We looking for an experienced and motivated Project Manager.
                    The ideal candidate understands technologies and processes
                    and has an adaptive approach to problem solving. The Project
                    Manager will work on tight deadlines while setting and
                    managing expectations, providing guidance, problem solving,
                    and making certain projects are completed efficiently,
                    safely and on time.
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
                      Lead the research, design, development, and quality
                      assurance phases of projects.
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Manage timelines, budgets, and stakeholders with frequent
                      reviews for each project.{" "}
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Identify and manage risks associated with project tasks
                      and objectives.{" "}
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Ensure accountability from project team members and other
                      stakeholders as necessary.
                    </span>
                  </p>

                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Implement best practices in project management tools and
                      techniques.
                    </span>
                  </p>

                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Prepare weekly and monthly reports involving status,
                      timeline of tasks, resource and cost tracking.
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Work closely with other stakeholders and manage resource
                      requests.
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Develop project plans and provide regular updates.
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Utilize corporate completion objectives while balancing
                      risk assessment of projects.
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
                    <span>
                      {" "}
                      Bachelor’s degree in Computer Science, Business
                      Administration, or related field.
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      3 -5 years of experience in project management in software
                      development projects.{" "}
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Excellent understanding of project management
                      methodologies.{" "}
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Attention to detail and strong organizational skills.
                    </span>
                  </p>

                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Knowledge of software development, debugging, and version
                      control.
                    </span>
                  </p>

                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Ability to effectively communicate with technical and
                      non-technical stakeholders.
                    </span>
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
