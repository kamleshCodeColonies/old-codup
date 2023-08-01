import Breadcumb from "@/src/components/Breadcumb";
import Layout from "@/src/layout/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const Fname = e.target.Name.value;
    const Email = e.target.EmailAddress.value;
    const Fon = e.target.PhoneNumber.value;
    const Web = e.target.CompanyName.value;
    const YourMessage = e.target.OurMessage.value;

    if (Fname.trim() == "") {
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

    const Name = e.target.Name.value;
    const EmailAddress = e.target.EmailAddress.value;
    const PhoneNumber = e.target.PhoneNumber.value;
    const CompanyName = e.target.CompanyName.value;
    const OurMessage = e.target.OurMessage.value;

    let formData = {
      Name: Name,
      EmailAddress: EmailAddress,
      PhoneNumber: PhoneNumber,
      CompanyName: CompanyName,
      OurMessage: OurMessage,
    };

    axios
      .post(
        "https://localhost:7247/api/CodupMail/CodupSendMail",
        formData

        // "http://localhost:3000/contact/api/CodupMail/CodupSendMail",
        // formData
        // "https://api.codecolonies.com/api/CodupMail/CodupSendMail",
        // formData
      )

      .then((response) => {
        if (response != null && response.data != null) {
          if (response.data.Success) {
            console.log(response.data.message);
          } else {
            console.log(response.data.message);
          }
        }
      })

      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Layout>
      <Breadcumb pageName={"Contact Us"} />
      {/*==================================================*/}
      {/* Start Appoinment Section */}
      {/*===================================================*/}
      <div className="contact-us pt-90 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 pl-0 pr-0">
              <div className="contact_from_box">
                <div className="contact_title pb-4">
                  <h3>Get In Touch</h3>
                </div>
                <form onSubmit={handleSubmit} action="#" id="dreamit-form">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input type="text" name="Name" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input
                          type="email"
                          name="EmailAddress"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input
                          type="text"
                          name="PhoneNumber"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input
                          type="text"
                          name="CompanyName"
                          placeholder="Company Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_box mb-30">
                        <textarea
                          name="OurMessage"
                          id="OurMessage"
                          cols={30}
                          rows={10}
                          placeholder="Your Message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="quote_button">
                        <button className="btn" type="submit">
                          {" "}
                          <i className="bi bi-gear" /> Schedule Consultant
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div id="status" />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 pl-0 pr-0">
              <div className="cda-content-area">
                <div className="cda-single-content d-flex">
                  <div className="cda-icon">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div className="cda-content-inner">
                    <h4>Corporate Office Address</h4>
                    <p>
                      1214 - 1217, i-Square Corporate Park, Science City
                      Road,Ahmedabad - 380060 Gujarat - INDIA
                      <br />
                    </p>
                  </div>
                </div>

                <div className="cda-single-content hr d-flex">
                  <div className="cda-icon">
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="cda-content-inner">
                    <h4>Our Email Address</h4>
                    <p>
                      Requirement Submission: &nbsp;
                      <a href="mailto:consulting@codup.tech">
                        consulting@codup.tech
                      </a>
                      <br />
                      Inquiry / Further Information: &nbsp;
                      <a href="mailto:connect@codup.tech">connect@codup.tech</a>
                      <br />
                    </p>
                  </div>
                </div>

                <div className="cda-single-content hr d-flex">
                  <div className="cda-icon">
                    <a
                      className="social-icon-color"
                      href="https://www.linkedin.com/company/codup-technologies-pvt-ltd/mycompany/?viewAsMember=true"
                      target="_blank"
                    >
                      {" "}
                      <i class="fab fa-linkedin"></i>{" "}
                    </a>
                  </div>
                  <div className="cda-content-inner">
                    <h4>Company Official Linkedin Id </h4>
                  </div>
                </div>
                <div className="cda-single-content hr d-flex"></div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
      {/*==================================================*/}
      {/* Start Contact Location Section */}
      {/*===================================================*/}
      <div className="map-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d14682.867984363622!2d72.5177023!3d23.0708348!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x405e432f450ae705%3A0xb81cc59f6bcf1cd9!2sCodup%20Technologies%20Private%20Limited%2C%20i%20Square%20Corporate%20Park%2C%201214%20-%2017%2C%20Science%20City%20Rd%2C%20Science%20City%2C%20Panchamrut%20Bunglows%20II%2C%20Sola%2C%20Ahmedabad%2C%20Gujarat%20380060!3m2!1d23.0708348!2d72.5177023!5e0!3m2!1sen!2sin!4v1688985707442!5m2!1sen!2sin"
                width={1920}
                height={350}
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
