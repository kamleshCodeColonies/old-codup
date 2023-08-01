import BlogSidebar from "@/src/components/BlogSidebar";
import Breadcumb1 from "@/src/components/Breadcumb1";
import Layout from "@/src/layout/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const BlogDetails = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const Cname = e.target.commentname.value;
    const Email = e.target.commentemail.value;
    const Fon = e.target.commentphone.value;
    const Web = e.target.commentwebsite.value;
    const YourMessage = e.target.commentmsgbox.value;

    if (Cname.trim() == "") {
      toast.error("Please Enter Your Name");
      return false;
    }

    var reg = /^\S+@\S+\.\S+$/;
    if (Email.trim() == "") {
      toast.error("Email must be filled out", "error");
      return false;
    } else if (reg.test(Email)) {
    } else {
      toast.error("Please enter valid email", "error");
      return false;
    }

    var regex = /^[1-9]\d{9}$/;
    if (Fon.trim() == "") {
      toast.error("Phone Number must be filled out", "error");
      return false;
    } else if (regex.test(Fon)) {
    } else {
      toast.error("Please enter a valid 10 digit contact number", "error");
      return false;
    }

    if (Web.trim() == "") {
      toast.error("Please Enter Your Company Name");
      return false;
    }

    if (YourMessage == "") {
      toast.error("Message must be filled out", "error");
      return false;
    }
    toast.success("Message send sucessfully");

    const commentname = e.target.commentname.value;
    const commentemail = e.target.commentemail.value;
    const commentphone = e.target.commentphone.value;
    const commentwebsite = e.target.commentwebsite.value;
    const commentmsgbox = e.target.commentmsgbox.value;

    let formData = {
      commentname: commentname,
      commentemail: commentemail,
      commentphone: commentphone,
      commentwebsite: commentwebsite,
      commentmsgbox: commentmsgbox,
    };
  };
  return (
    <Layout>
      <Breadcumb1 pageName={"Organization Consulting"} />

      <div className="blog-section style-two details">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="blog-single-items">
                <div className="blog-thumb">
                  <img src="assets/images/resource/blog-4.jpg" alt="Blog img" />
                </div>
                <div className="blog-content">
                  <div className="blog-content-text text-left">
                    {/* <h4 className="mt-40 mb-0">Introduction:</h4> */}
                    <div class="consen-section-title">
                      <h5>Introduction</h5>
                    </div>
                    <p style={{ textAlign: "justify" }}>
                      We specialize in empowering businesses to optimize their
                      operations, enhance performance, and drive transformative
                      change. With our comprehensive range of consulting
                      services, we assist organizations in various areas,
                      including start-up consulting, business consulting,
                      management consulting, and IT and software consulting. Our
                      team of experienced consultants brings deep industry
                      knowledge and expertise, providing tailored solutions to
                      meet the unique needs and challenges of each client.
                      Through our collaborative approach, innovative strategies,
                      and proven methodologies, we enable businesses to achieve
                      operational excellence, drive growth, and thrive in
                      today's competitive landscape.{" "}
                    </p>
                    {/* <h4 className="mt-40 mb-0">Overview:</h4> */}
                    <div class="consen-section-title">
                      <h5>Overview</h5>
                    </div>
                    <p className="pt-2 pb-1" style={{ textAlign: "justify" }}>
                      Our Organization Consulting services encompass a wide
                      range of areas to cater to your unique business needs. We
                      offer expertise in the following areas:
                    </p>
                    <div className="blog-thumb">
                      <img
                        src="assets/images/resource/blog-5.jpg"
                        alt="Blog img"
                      />
                    </div>

                    <h4 className="mt-40 mb-0">
                      <i class="bii fas fa-check"></i>Startup Consulting
                    </h4>
                    <p className="pt-2 pb-1" style={{ textAlign: "justify" }}>
                      Our Startup Consulting service is designed to support
                      entrepreneurs and new ventures in navigating the
                      challenges of starting a business. We provide guidance on
                      business ideation, market analysis, and developing a
                      viable business model. Our consultants assist with
                      strategic planning, financial forecasting, and securing
                      funding. We help startups establish a strong foundation
                      for growth and success.
                    </p>
                    <div className="block-quote">
                      <p>
                        To be yourself in a world that is constantly trying to
                        make you something else is the greatest accomplishment.
                      </p>
                      <div className="block-quoto-footer">
                        – Amanda Pollock, Google Inc.
                      </div>
                    </div>
                    <h4 className="mt-40 mb-0">
                      <i class="bii fas fa-check"></i>Business Consulting
                    </h4>
                    <p className="pt-2 pb-1" style={{ textAlign: "justify" }}>
                      Our Business Consulting service is aimed at established
                      businesses seeking to enhance their overall performance
                      and achieve strategic objectives. We offer a range of
                      services, including market research and analysis,
                      competitive intelligence, and strategic planning. Our
                      consultants work closely with you to identify
                      opportunities for growth, optimize operational efficiency,
                      and develop effective marketing and sales strategies.
                    </p>
                    <h4 className="mt-40 mb-0">
                      <i class="bii fas fa-check"></i>Management Consulting
                    </h4>
                    <p className="pt-2 pb-1" style={{ textAlign: "justify" }}>
                      Our Management Consulting service focuses on improving
                      organizational effectiveness and efficiency. We assist
                      with organizational design and development, change
                      management, and process optimization. Our consultants
                      provide expertise in areas such as leadership development,
                      performance management, and talent acquisition. We help
                      businesses streamline operations, enhance productivity,
                      and drive sustainable growth.
                    </p>
                    <h4 className="mt-40 mb-0">
                      <i class="bii fas fa-check"></i>IT-Software Consulting
                    </h4>
                    <p className="pt-2 pb-1" style={{ textAlign: "justify" }}>
                      Our IT-Software Consulting service is tailored to
                      businesses in need of technology solutions and digital
                      transformation. We offer expertise in software
                      development, system integration, and IT infrastructure
                      optimization. Our consultants assess your IT needs,
                      recommend suitable technologies, and assist with
                      implementation and project management. We help businesses
                      leverage technology to improve efficiency, enhance
                      customer experiences, and drive innovation.
                    </p>
                    <div class="consen-section-title">
                      <h5>Benefits</h5>
                    </div>

                    {/* <h4>Benefits:</h4> */}
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>Expertise and Industry
                        Knowledge:
                      </b>{" "}
                      Our team of seasoned consultants brings deep expertise and
                      industry knowledge, providing valuable insights and
                      recommendations based on best practices and industry
                      trends.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>Tailored Solutions:
                      </b>{" "}
                      We understand that every organization is unique, and we
                      provide customized solutions that address your specific
                      needs, challenges, and goals.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>Proven Methodologies:{" "}
                      </b>{" "}
                      We leverage proven methodologies and frameworks to drive
                      results, ensuring that our clients achieve tangible and
                      measurable outcomes.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>Enhanced Performance and
                        Efficiency:
                      </b>{" "}
                      Our consulting services are designed to optimize
                      processes, enhance organizational structure, and implement
                      performance management systems, enabling businesses to
                      achieve operational excellence and drive growth.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>Strategic Guidance:
                      </b>{" "}
                      We provide strategic guidance and support, helping
                      organizations develop clear visions, set goals, and
                      implement effective strategies for sustainable success.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>Continuous Improvement:
                      </b>{" "}
                      We believe in the power of continuous improvement, and our
                      consulting services focus on driving ongoing enhancements
                      and fostering a culture of innovation within
                      organizations.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>Collaborative Approach:
                      </b>{" "}
                      We work closely with our clients, fostering collaborative
                      partnerships, and ensuring that our solutions are aligned
                      with their objectives and values.
                    </p>

                    {/* <h4 className="mt-40 mb-0"> Call to Action:</h4> */}
                    <div class="consen-section-title">
                      <h5>Call to Action</h5>
                    </div>
                    <p style={{ textAlign: "justify" }}>
                      We are committed to empowering businesses for success. Our
                      comprehensive range of consulting services, including
                      start-up consulting, business consulting, management
                      consulting, and IT and software consulting, are designed
                      to address the unique needs and challenges of
                      organizations across various industries. With our
                      expertise, proven methodologies, and tailored solutions,
                      we enable businesses to optimize their operations, enhance
                      performance, and drive transformative change. Trust [Your
                      Company Name] as your partner in achieving operational
                      excellence, driving growth, and thriving in today's
                      competitive business landscape. Contact us today to embark
                      on a transformative journey towards organizational
                      success.
                    </p>
                  </div>
                </div>
                <div className="comment-form pt-50">
                  <div className="comment-title mb-40">
                    <h3>Leave Comment</h3>
                    <span />
                  </div>
                  <form onSubmit={handleSubmit} id="dreamit-form">
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="comment-box"
                          name="commentname"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="email"
                          className="comment-box"
                          name="commentemail"
                          placeholder="Email"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="comment-box"
                          name="commentphone"
                          placeholder="Phone"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="comment-box"
                          name="commentwebsite"
                          placeholder="Your Website"
                        />
                      </div>
                      <div className="col-md-12">
                        <textarea
                          name="comment-message"
                          className="mb-20"
                          id="commentmsgbox"
                          cols={30}
                          rows={4}
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-12">
                        <div className="form-group form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                          >
                            Save my name, email, and website in this browser for
                            the next time I comment.
                          </label>
                        </div>
                      </div>
                      <input
                        type="submit"
                        defaultValue="Post Comment"
                        className="submit-comment"
                      />
                    </div>
                  </form>
                  <div id="status" />
                </div>
              </div>
            </div>
            <ToastContainer />

            <BlogSidebar />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default BlogDetails;
