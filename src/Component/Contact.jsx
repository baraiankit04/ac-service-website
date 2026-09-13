import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
    useEffect(() => {
  document.title =
    "Contact Us | AC Repair & Service";

  let metaDescription = document.querySelector(
    'meta[name="description"]'
  );

  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    document.head.appendChild(metaDescription);
  }

  metaDescription.content =
    "Contact us for AC repair, cleaning, installation and maintenance service booking. Call, WhatsApp or send your service enquiry online.";
}, []);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendWhatsApp = (e) => {
    e.preventDefault();

    const whatsappNumber = "917317422100";

    const message = `
NEW CUSTOMER ENQUIRY

Name: ${formData.name}
Mobile: ${formData.mobile}
Email: ${formData.email || "Not Provided"}
Subject: ${formData.subject}

Message:
${formData.message}
    `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      {/* PAGE HEADER */}

      <section className="bg-primary text-white py-5">
        <div className="container text-center">

          <span className="badge bg-warning text-dark mb-3">
            Contact Us
          </span>

          <h1 className="fw-bold display-5">
            How Can We Help You?
          </h1>

          <p
            className="lead mx-auto mb-0"
            style={{ maxWidth: "700px" }}
          >
            AC repair, service, installation or maintenance ke
            liye humse contact karein.
          </p>

        </div>
      </section>


      {/* CONTACT CARDS */}

      <section className="py-5 bg-light">
        <div className="container">

          <div className="row g-4">

            {/* CALL */}

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">

                  <div
                    className="mb-3"
                    style={{ fontSize: "45px" }}
                  >
                    📞
                  </div>

                  <h4 className="fw-bold">
                    Call Us
                  </h4>

                  <p className="text-muted">
                    AC service ke liye directly call karein.
                  </p>

                  <a
                    href="tel:+917317422100"
                    className="btn btn-outline-primary"
                  >
                    +91 73174 22100
                  </a>

                </div>
              </div>
            </div>


            {/* WHATSAPP */}

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">

                  <div
                    className="mb-3"
                    style={{ fontSize: "45px" }}
                  >
                    💬
                  </div>

                  <h4 className="fw-bold">
                    WhatsApp
                  </h4>

                  <p className="text-muted">
                    Apni AC problem WhatsApp par bhejein.
                  </p>

                  <a
                    href="https://wa.me/917317422100"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-success"
                  >
                    Chat on WhatsApp
                  </a>

                </div>
              </div>
            </div>


            {/* EMAIL */}

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">

                  <div
                    className="mb-3"
                    style={{ fontSize: "45px" }}
                  >
                    ✉️
                  </div>

                  <h4 className="fw-bold">
                    Email Us
                  </h4>

                  <p className="text-muted">
                    Detailed enquiry ke liye email karein.
                  </p>

                  <a
                    href="mailto:ankitchaurasiya583@gmail.com"
                    className="btn btn-outline-primary"
                  >
                    Send Email
                  </a>

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* CONTACT FORM */}

      <section className="py-5">
        <div className="container">

          <div className="row g-5 align-items-center">

            {/* LEFT */}

            <div className="col-lg-5">

              <span className="text-primary fw-semibold">
                GET IN TOUCH
              </span>

              <h2 className="fw-bold mt-2">
                Tell Us About Your AC Problem
              </h2>

              <p className="text-muted">
                Form fill karke apni enquiry WhatsApp par directly
                bhej sakte hain.
              </p>


              <div className="mt-4">

                <div className="d-flex mb-4">

                  <div
                    className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "50px",
                      height: "50px",
                      minWidth: "50px",
                    }}
                  >
                    1
                  </div>

                  <div>
                    <h5 className="fw-bold mb-1">
                      Tell Us Your Problem
                    </h5>

                    <p className="text-muted mb-0">
                      AC issue ke baare me details dein.
                    </p>
                  </div>

                </div>


                <div className="d-flex mb-4">

                  <div
                    className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "50px",
                      height: "50px",
                      minWidth: "50px",
                    }}
                  >
                    2
                  </div>

                  <div>
                    <h5 className="fw-bold mb-1">
                      Send Enquiry
                    </h5>

                    <p className="text-muted mb-0">
                      Details WhatsApp par send karein.
                    </p>
                  </div>

                </div>


                <div className="d-flex">

                  <div
                    className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "50px",
                      height: "50px",
                      minWidth: "50px",
                    }}
                  >
                    3
                  </div>

                  <div>
                    <h5 className="fw-bold mb-1">
                      Get Support
                    </h5>

                    <p className="text-muted mb-0">
                      Hamari team aapse contact karegi.
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* RIGHT FORM */}

            <div className="col-lg-7">

              <div className="card border-0 shadow">

                <div className="card-body p-4 p-md-5">

                  <h3 className="fw-bold mb-4">
                    Send Us a Message
                  </h3>

                  <form onSubmit={sendWhatsApp}>

                    {/* NAME + MOBILE */}

                    <div className="row">

                      <div className="col-md-6 mb-3">

                        <label className="form-label fw-semibold">
                          Full Name *
                        </label>

                        <input
                          type="text"
                          name="name"
                          className="form-control form-control-lg"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />

                      </div>


                      <div className="col-md-6 mb-3">

                        <label className="form-label fw-semibold">
                          Mobile Number *
                        </label>

                        <input
                          type="tel"
                          name="mobile"
                          className="form-control form-control-lg"
                          placeholder="10 digit mobile number"
                          pattern="[0-9]{10}"
                          maxLength="10"
                          value={formData.mobile}
                          onChange={handleChange}
                          required
                        />

                      </div>

                    </div>


                    {/* EMAIL */}

                    <div className="mb-3">

                      <label className="form-label fw-semibold">
                        Email Address
                      </label>

                      <input
                        type="email"
                        name="email"
                        className="form-control form-control-lg"
                        placeholder="example@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                      />

                    </div>


                    {/* SUBJECT */}

                    <div className="mb-3">

                      <label className="form-label fw-semibold">
                        Subject *
                      </label>

                      <select
                        name="subject"
                        className="form-select form-select-lg"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >

                        <option value="">
                          Select Subject
                        </option>

                        <option value="AC Repair Enquiry">
                          AC Repair
                        </option>

                        <option value="AC Service Enquiry">
                          AC Service
                        </option>

                        <option value="AC Installation Enquiry">
                          AC Installation
                        </option>

                        <option value="AC Gas Refill Enquiry">
                          AC Gas Refill
                        </option>

                        <option value="AC Maintenance Enquiry">
                          AC Maintenance
                        </option>

                        <option value="Other Enquiry">
                          Other
                        </option>

                      </select>

                    </div>


                    {/* MESSAGE */}

                    <div className="mb-4">

                      <label className="form-label fw-semibold">
                        Message *
                      </label>

                      <textarea
                        name="message"
                        className="form-control"
                        rows="5"
                        placeholder="Tell us about your AC problem..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>

                    </div>


                    <div className="d-grid">

                      <button
                        type="submit"
                        className="btn btn-success btn-lg"
                      >
                        Send Message on WhatsApp
                      </button>

                    </div>

                  </form>

                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* AI ASSISTANT */}

      <section className="py-5 bg-dark text-white">
        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-8">

              <span className="badge bg-warning text-dark mb-3">
                AI AC Assistant
              </span>

              <h2 className="fw-bold">
                Don't Know What's Wrong With Your AC?
              </h2>

              <p className="text-white-50 mb-lg-0">
                AC brand, model, purchase date aur problem enter
                karke quick AC guidance lein.
              </p>

            </div>


            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">

              <Link
                to="/ai-ac-assistant"
                className="btn btn-warning btn-lg"
              >
                Check My AC
              </Link>

            </div>

          </div>
        </div>
      </section>


      {/* BOOK SERVICE CTA */}

      <section className="py-5 bg-primary text-white">
        <div className="container text-center">

          <h2 className="fw-bold">
            Ready to Book Your AC Service?
          </h2>

          <p className="lead">
            Choose your service, preferred date and time online.
          </p>

          <Link
            to="/book-service"
            className="btn btn-warning btn-lg px-5"
          >
            Book Service Now
          </Link>

        </div>
      </section>
    </>
  );
};

export default Contact;