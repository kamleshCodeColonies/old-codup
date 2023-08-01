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
          <h2>Strategic Consulting Services</h2>
        </div>
        <div className="catagory-item">
          <ul>
            <li className="hr-3">
              <a href="/StrategyConsulting">Strategy Consulting</a>
            </li>
            <li className="hr-3">
              <a href="/MergerandAcquisitionConsulting">
                Merger and Acquisition Consulting
              </a>
            </li>
            <li className="hr-3">
              <a href="/PrivateEquityConsulting">Private Equity Consulting</a>
            </li>
            <li className="hr-3">
              <a href="/ValuationConsulting">Valuation Consulting</a>
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
              <a href="/strategicmergersacquistions">
                <h4>Strategic Mergers and Acquisitions</h4>
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
              <a href="/strategicacquisition">
                <h4>Strategic Acquisition</h4>
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
              <a href="/strategicalliance">
                <h4>Strategic Alliance</h4>
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
              <a href="/strategyexecution">
                <h4>Strategy & Execution</h4>
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
              <a href="/strategydigitaltransformation">
                <h4>Strategy & Digital Transformation </h4>
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
              <a href="/strategymanagementconsulting">
                <h4>Strategy & Management Consulting</h4>
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
