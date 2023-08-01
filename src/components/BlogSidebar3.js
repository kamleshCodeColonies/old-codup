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
          <h2>Functional Consulting Services</h2>
        </div>
        <div className="catagory-item">
          <ul>
            <li className="hr-3">
              <a href="/HRConsulting">HR Consulting</a>
            </li>
            <li className="hr-3">
              <a href="/SalesConsulting">Sales Consulting</a>
            </li>
            <li className="hr-3">
              <a href="/MarketingConsulting">Marketing Consulting</a>
            </li>
            <li className="hr-3">
              <a href="/ProjectManagementConsulting">
                Project Management Consulting
              </a>
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
              <a href="/talentacquisitionandmanagement">
                <h4>Talent Acquisition and Management</h4>
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
              <a href="/hrtransformation">
                <h4>HR Transformation and Talent Management</h4>
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
              <a href="/marketingstrategyandimplementation">
                <h4>Marketing Strategy and Implementation</h4>
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
              <a href="/leadgenerationoptimization">
                <h4>Lead Generation Optimization</h4>
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
              <a href="/costoptimization">
                <h4>Cost Optimization</h4>
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
              <a href="/cashflowmanagement">
                <h4>Cash Flow Management</h4>
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
