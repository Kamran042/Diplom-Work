import React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const ContactFormArea = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1zt01o9",
        "template_fg3019m",
        e.target,
        "3Tfs3UowSe6cTZWF8"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          Swal.fire({
            icon: "success",
            title: "Email Sent",
            text: "Your message has been sent successfully!",
          });
          e.target.reset();
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          Swal.fire({
            icon: "error",
            title: "Problem",
            text: "Sorry, there was an error. Please try again later.",
          });
        }
      );
  };

  return (
    <div className="contact-form-area section-space-y-axis-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="contact-wrap">
              <div
                className="contact-info text-white"
                style={{
                  backgroundImage:
                    'url("https://htmldemo.net/pronia/pronia/assets/images/contact/1-1-370x500.jpg")',
                }}
              >
                <h2 className="contact-title">Contact Info:</h2>
                <p className="contact-desc">
                  Fill the form and our team will get back to you within 24
                  hours.
                </p>
                <ul className="contact-list">
                  <li>
                    <i className="pe-7s-call"></i>
                    <a href="tel://123-456-789">123 456 789</a>
                  </li>
                  <li>
                    <i className="pe-7s-mail"></i>
                    <a href="mailto:info@example.com">info@example.com</a>
                  </li>
                  <li>
                    <i className="pe-7s-map-marker"></i>
                    <span>13, Your Address, Here</span>
                  </li>
                </ul>
              </div>
              <form
                id="contact-form"
                className="contact-form"
                onSubmit={sendEmail}
              >
                <div className="group-input">
                  <div className="form-field me-lg-30 mb-35 mb-lg-0">
                    <input
                      type="text"
                      name="con_firstName"
                      placeholder="First Name*"
                      className="input-field"
                      required
                    />
                  </div>
                  <div className="form-field mb-35">
                    <input
                      type="text"
                      name="con_lastName"
                      placeholder="Last Name*"
                      className="input-field"
                      required
                    />
                  </div>
                </div>
                <div className="group-input mb-35">
                  <div className="form-field me-lg-30 mb-35 mb-lg-0">
                    <input
                      type="text"
                      name="con_phone"
                      placeholder="Phone*"
                      className="input-field"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <input
                      type="email"
                      name="con_email"
                      placeholder="Email*"
                      className="input-field"
                      required
                    />
                  </div>
                </div>
                <div className="form-field mb-5">
                  <textarea
                    name="con_message"
                    placeholder="Message"
                    className="textarea-field"
                    required
                  ></textarea>
                </div>
                <div className="contact-button-wrap">
                  <button
                    type="submit"
                    className="btn btn-custom-size xl-size btn-pronia-primary"
                  >
                    Post Comment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormArea;
