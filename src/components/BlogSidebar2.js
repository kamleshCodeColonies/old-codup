import { useEffect } from "react";
import { calender } from "../utils";

const BlogSidebar = () => {
  useEffect(() => {
    return () => {
      calender();
    };
  }, []);
  return (
    <div className="col-lg-4 col-md-8">
      <div className="widget-items mb-40">
        <div className="widget-title">
          <h2>Optimization Consulting Services</h2>
        </div>
        <div className="catagory-item">
          <ul>
            <li className="hr-3">
              <a href="/OperationsManagement">Operations Management</a>
            </li>
            <li className="hr-3">
              <a href="/LegalandComplianceConsulting">
                Legal and Compliance Consulting
              </a>
            </li>
            <li className="hr-3">
              <a href="/DigitalTransformationConsulting">
                Digital Transformation Consulting
              </a>
            </li>
            <li className="hr-3">
              <a href="/CommunicationConsulting">Communication Consulting</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="widget-items upp mb-40">
        <div className="widget-recent-post d-flex">
          <div className="rpost-thumb">
            <a href="#">
              <img src="assets/images/resource/footer1.png" alt="post thumb" />
            </a>
          </div>
          <div className="rpost-content">
            <div className="rpost-title">
              <a href="/cloudmigration">
                <h4>Cloud Migration</h4>
              </a>
              <span>January 01, 2023</span>
            </div>
          </div>
        </div>
        <div className="widget-recent-post d-flex hr-3">
          <div className="rpost-thumb">
            <a href="#">
              <img src="assets/images/resource/footer2.png" alt="post thumb" />
            </a>
          </div>
          <div className="rpost-content">
            <div className="rpost-title">
              <a href="/iTinfrastructureoptimization">
                <h4>IT Infrastructure Optimization</h4>
              </a>
              <span>february 12, 2023</span>
            </div>
          </div>
        </div>
        <div className="widget-recent-post d-flex hr-3">
          <div className="rpost-thumb">
            <a href="#">
              <img src="assets/images/resource/footer2.png" alt="post thumb" />
            </a>
          </div>
          <div className="rpost-content">
            <div className="rpost-title">
              <a href="/legalandregulatorycompliance">
                <h4>Legal and Regulatory Compliance</h4>
              </a>
              <span>february 12, 2023</span>
            </div>
          </div>
        </div>
        <div className="widget-recent-post d-flex hr-3">
          <div className="rpost-thumb">
            <a href="#">
              <img src="assets/images/resource/footer1.png" alt="post thumb" />
            </a>
          </div>
          <div className="rpost-content">
            <div className="rpost-title">
              <a href="/complianceassessments">
                <h4>Compliance Assessments and Remediation</h4>
              </a>
              <span>January 10, 2023</span>
            </div>
          </div>
        </div>
        <div className="widget-recent-post d-flex hr-3">
          <div className="rpost-thumb">
            <a href="#">
              <img src="assets/images/resource/footer1.png" alt="post thumb" />
            </a>
          </div>
          <div className="rpost-content">
            <div className="rpost-title">
              <a href="/frameworkdevelopment">
                <h4>Compliance Framework Development and Risk Assessment </h4>
              </a>
              <span>January 10, 2023</span>
            </div>
          </div>
        </div>
        <div className="widget-recent-post d-flex hr-3">
          <div className="rpost-thumb">
            <a href="/startup2">
              <img src="assets/images/resource/footer1.png" alt="post thumb" />
            </a>
          </div>
          <div className="rpost-content">
            <div className="rpost-title">
              <a href="/financialplanningandanalysis">
                <h4>Financial Planning and Analysis</h4>
              </a>
              <span>January 10, 2023</span>
            </div>
          </div>
        </div>
      </div>
      <div className="widget-items mb-40">
        <div className="widget-title">
          <h2>Tag Cloud</h2>
        </div>
        <div className="tag-item">
          <a href="#">Bootstrap</a>
          <a href="#">Business</a>
          <a href="#">Corporate</a>
          <a href="#">Portfolio</a>
          <a href="#">Responsive</a>
          <a href="#">Technology</a>
        </div>
      </div>

      <div className="widget-items widget-archieve mb-40">
        <div className="widget-title">
          <h2>Archives</h2>
        </div>
        <p className="hr-3">
          <a className="widget-archieve-item" href="#">
            January 2023
          </a>{" "}
        </p>
        <p className="hr-3">
          <a className="widget-archieve-item" href="#">
            Febraury 2023
          </a>{" "}
        </p>
        <p className="hr-3">
          <a className="widget-archieve-item" href="#">
            March 2023
          </a>{" "}
        </p>
        <p className="hr-3">
          <a className="widget-archieve-item" href="#">
            April 2023
          </a>{" "}
        </p>
        <p className="hr-3">
          <a className="widget-archieve-item" href="#">
            May 2023
          </a>{" "}
        </p>
      </div>
    </div>
  );
};
export default BlogSidebar;
