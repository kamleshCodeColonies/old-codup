import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const CaseStudies2 = () => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState(1);
  useEffect(() => {}, []);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current_menu_item" : "");

  return (
    <Fragment>
      <div className="row prtb-bg align-items-center">
        <div className="col-lg-7">
          <div className="consen-section-title pb-50">
            <h5> Our Jobs </h5>
            <h2>
              {" "}
              Current available positions at <span> Codup </span>
            </h2>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="portfolio_nav">
            <div className="portfolio_menu">
              <ul className="menu-filtering">
                <li
                  className={`c-pointer ${activeBtn("1")}`}
                  onClick={handleFilterKeyChange("1")}
                >
                  {" "}
                  Consulting Division{" "}
                </li>
                <li
                  className={`c-pointer ${activeBtn("2")}`}
                  onClick={handleFilterKeyChange("2")}
                >
                  {" "}
                  IT Division{" "}
                </li>
                <li
                  className={`c-pointer ${activeBtn("3")}`}
                  onClick={handleFilterKeyChange("3")}
                >
                  {" "}
                  Finance Division{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {filterKey == 1 && (
        <div className="row image_load">
          <div className="col-lg-3 col-md-6 grid-item physics math">
            <div className="single-portfolio">
              <div className="portfolio-thumb">
                <img src="assets/images/project/prt1.jpg" alt />
                <div className="portfolio-content">
                  <div className="portfolio-content-inner">
                    <div className="portfolio-title">
                      <h3>
                        {" "}
                        <Link legacyBehavior href="/jobmanagement">
                          <a> Management Consultant</a>
                        </Link>{" "}
                      </h3>
                      <h6 className="car">
                        {" "}
                        <Link legacyBehavior href="/jobmanagement">
                          <a>Apply Now</a>
                        </Link>{" "}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 grid-item chemistry math">
            <div className="single-portfolio">
              <div className="portfolio-thumb">
                <img src="assets/images/project/prt2.jpg" alt />
                <div className="portfolio-content">
                  <div className="portfolio-content-inner">
                    <div className="portfolio-title">
                      <h3>
                        {" "}
                        <Link legacyBehavior href="/jobstrategy">
                          <a> Strategy Consultant </a>
                        </Link>{" "}
                      </h3>
                      <h6 className="car">
                        {" "}
                        <Link legacyBehavior href="/jobstrategy">
                          <a>Apply Now</a>
                        </Link>{" "}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 grid-item chemistry physics">
            <div className="single-portfolio">
              <div className="portfolio-thumb">
                <img src="assets/images/project/prt3.jpg" alt />
                <div className="portfolio-content">
                  <div className="portfolio-content-inner">
                    <div className="portfolio-title">
                      <h3>
                        {" "}
                        <Link legacyBehavior href="/jobsales">
                          <a> Sales Consultant</a>
                        </Link>{" "}
                      </h3>
                      <h6 className="car">
                        {" "}
                        <Link legacyBehavior href="/jobsales">
                          <a>Apply Now</a>
                        </Link>{" "}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 grid-item physics math">
            <div className="single-portfolio">
              <div className="portfolio-thumb">
                <img src="assets/images/project/prt4.jpg" alt />
                <div className="portfolio-content">
                  <div className="portfolio-content-inner">
                    <div className="portfolio-title">
                      <h3>
                        {" "}
                        <Link legacyBehavior href="/jobmarketing">
                          <a> Marketing Consultant</a>
                        </Link>{" "}
                      </h3>
                      <h6 className="car">
                        {" "}
                        <Link legacyBehavior href="/jobmarketing">
                          <a>Apply Now</a>
                        </Link>{" "}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {filterKey == 2 && (
        <div className="row image_load">
          <div className="col-lg-3 col-md-6 grid-item physics math">
            <div className="single-portfolio">
              <div className="portfolio-thumb">
                <img src="assets/images/project/prt1.jpg" alt />
                <div className="portfolio-content">
                  <div className="portfolio-content-inner">
                    <div className="portfolio-title">
                      <h3>
                        {" "}
                        <Link legacyBehavior href="/jobprojectmanager">
                          <a> Project Manager </a>
                        </Link>{" "}
                      </h3>
                      <h6 className="car">
                        {" "}
                        <Link legacyBehavior href="/jobprojectmanager">
                          <a>Apply Now</a>
                        </Link>{" "}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 grid-item chemistry math">
            <div className="single-portfolio">
              <div className="portfolio-thumb">
                <img src="assets/images/project/prt2.jpg" alt />
                <div className="portfolio-content">
                  <div className="portfolio-content-inner">
                    <div className="portfolio-title">
                      <h3>
                        {" "}
                        <Link legacyBehavior href="/jobprojectlead">
                          <a> Project Lead </a>
                        </Link>{" "}
                      </h3>
                      <h6 className="car">
                        {" "}
                        <Link legacyBehavior href="/jobprojectlead">
                          <a>Apply Now</a>
                        </Link>{" "}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 grid-item chemistry physics">
            <div className="single-portfolio">
              <div className="portfolio-thumb">
                <img src="assets/images/project/prt3.jpg" alt />
                <div className="portfolio-content">
                  <div className="portfolio-content-inner">
                    <div className="portfolio-title">
                      <h3>
                        {" "}
                        <Link legacyBehavior href="/jobsrsoftdev">
                          <a> Sr. Software Developer</a>
                        </Link>{" "}
                      </h3>
                      <h6 className="car">
                        {" "}
                        <Link legacyBehavior href="/jobsrsoftdev">
                          <a>Apply Now</a>
                        </Link>{" "}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 grid-item physics math">
            <div className="single-portfolio">
              <div className="portfolio-thumb">
                <img src="assets/images/project/prt4.jpg" alt />
                <div className="portfolio-content">
                  <div className="portfolio-content-inner">
                    <div className="portfolio-title">
                      <h3>
                        {" "}
                        <Link legacyBehavior href="/jobsoftdev">
                          <a> Software Developer</a>
                        </Link>{" "}
                      </h3>
                      <h6 className="car">
                        {" "}
                        <Link legacyBehavior href="/jobsoftdev">
                          <a>Apply Now</a>
                        </Link>{" "}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {filterKey == 3 && (
        <div className="row image_load">
          <div className="col-lg-3 col-md-6 grid-item physics math">
            <div className="single-portfolio">
              <div className="portfolio-thumb">
                <img src="assets/images/project/prt1.jpg" alt />
                <div className="portfolio-content">
                  <div className="portfolio-content-inner">
                    <div className="portfolio-title">
                      <h3>
                        {" "}
                        <Link legacyBehavior href="/jobsracc">
                          <a> Sr. Accountant</a>
                        </Link>{" "}
                      </h3>
                      <h6 className="car">
                        {" "}
                        <Link legacyBehavior href="/jobsracc">
                          <a>Apply Now</a>
                        </Link>{" "}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 grid-item chemistry math">
            <div className="single-portfolio">
              <div className="portfolio-thumb">
                <img src="assets/images/project/prt2.jpg" alt />
                <div className="portfolio-content">
                  <div className="portfolio-content-inner">
                    <div className="portfolio-title">
                      <h3>
                        {" "}
                        <Link legacyBehavior href="/jobfinancemanager">
                          <a> Finance Manager </a>
                        </Link>{" "}
                      </h3>
                      <h6 className="car">
                        {" "}
                        <Link legacyBehavior href="/jobfinancemanager">
                          <a>Apply Now</a>
                        </Link>{" "}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 grid-item chemistry physics">
            <div className="single-portfolio">
              <div className="portfolio-thumb">
                <img src="assets/images/project/prt3.jpg" alt />
                <div className="portfolio-content">
                  <div className="portfolio-content-inner">
                    <div className="portfolio-title">
                      <h3>
                        {" "}
                        <Link legacyBehavior href="/jobfinancexecutive">
                          <a> Finance Executive</a>
                        </Link>{" "}
                      </h3>
                      <h6 className="car">
                        {" "}
                        <Link legacyBehavior href="/jobfinancexecutive">
                          <a>Apply Now</a>
                        </Link>{" "}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 grid-item physics math">
            <div className="single-portfolio">
              <div className="portfolio-thumb">
                <img src="assets/images/project/prt4.jpg" alt />
                <div className="portfolio-content">
                  <div className="portfolio-content-inner">
                    <div className="portfolio-title">
                      <h3>
                        {" "}
                        <Link legacyBehavior href="/jobprivateequitymanager">
                          <a> Private Equity Manager</a>
                        </Link>{" "}
                      </h3>
                      <h6 className="car">
                        {" "}
                        <Link legacyBehavior href="/jobprivateequitymanager">
                          <a>Apply Now</a>
                        </Link>{" "}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default CaseStudies2;
