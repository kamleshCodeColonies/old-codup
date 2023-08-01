import Link from "next/link";
import { useEffect } from "react";

const Breadcumb = ({ pageName, title }) => {
  //   const currentUrl = window.location.href;
  //   let ishead = false;
  //   useEffect(() => {
  //     return () => {
  //       ishead = currentUrl.includes("Organization" || "StartupConsulting");
  //     };
  //   }, []);
  return (
    <div className="breadcumb-area d-flex align-items-center">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-12">
            <div className="breadcumb-content">
              <h1> {pageName} </h1>
            </div>
          </div>
          <div className="britcam-shape">
            <div className="breadcumb-content upp">
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/service">Services</Link>
                </li>

                <li>
                  <Link href="/Organization">Organization</Link>
                </li>

                <li> {title} </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Breadcumb;
