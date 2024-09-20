import React from "react";
import "./ContactUs.css"; // Import the custom CSS

function ContactUs() {
  return (
    <div className="contact-page">
      <div className="background">
        <div className="container mt-5 mb-5">
          {/* Top Heading Section */}
          <div className="top-section ">
            <h1 className="main-heading text-center">Contact Us</h1>
          </div>

          <div className="row  mt-5">
            {/* Left Side: Image */}
            <div className="col-md-6">
              <img
                src="https://www.preciousinfosystem.com/images/assets/ils_16.svg"
                alt="Placeholder"
                className="center-image"
              />
            </div>

            {/* Right Side: Button, Heading, Paragraph, Send Message Button */}
            <div className="col-md-6 text-right">
              <div className="sc-title">Contact Us</div>
              <h2 className="sub-heading">Get in Touch with Us</h2>
              <p className="text-paragraph">
                We are here to help you. Reach out to us via the form or our
                contact details below.
              </p>
              <button className="btn btn-dark">Send Message</button>
            </div>
          </div>

          {/* Cards Section */}
          <div className="row mt-5 justify-content-center">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="card text-center">
                <img
                  src="https://www.preciousinfosystem.com/images/assets/address.png"
                  alt="Icon"
                  className="card-img-top"
                  style={{ marginLeft: "100px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Address</h5>
                  <p className="card-text">123 Example Street, City, Country</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="card text-center">
                <img
                  src="https://www.preciousinfosystem.com/images/assets/phone.png"
                  alt="Icon"
                  className="card-img-top"
                  style={{ marginLeft: "100px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Phone</h5>
                  <p className="card-text">+123 456 7890</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="card text-center">
                <img
                  src="https://www.preciousinfosystem.com/images/assets/email.png"
                  alt="Icon"
                  className="card-img-top"
                  style={{ marginLeft: "100px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Email</h5>
                  <p className="card-text">info@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container2">
      <div className="row mt-5">
        {/* Left Side: Map */}
        <div className="col-md-6">
          <iframe
            className="map-frame"
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18..."
            allowFullScreen=""
          ></iframe>
        </div>

        {/* Right Side: Contact Form */}
        <div className="col-md-6">
          <div className="form-container">
            <h2 className="form-heading">Send Us a Message</h2>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Enter you name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  Phone <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="form-control"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Give Us a Message</label>
                <textarea
                  id="message"
                  className="form-control"
                  placeholder="Your message Heare*"
                ></textarea>
              </div>

              <button type="submit" className=" submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
}

export default ContactUs;
