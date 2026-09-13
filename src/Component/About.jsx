
import { Link } from "react-router-dom";
import React, { useEffect } from "react";

const About = () => {

     useEffect(() => {
    document.title =
      "About Us | Professional AC Service";
  }, []);


  return (
    <>
      {/* HERO */}

      <section className="bg-primary text-white py-5">
        <div className="container text-center">

          <span className="badge bg-warning text-dark mb-3">
            About Us
          </span>

          <h1 className="fw-bold display-5">
            Reliable AC Service You Can Trust
          </h1>

          <p className="lead mx-auto" style={{ maxWidth: "750px" }}>
            We provide professional AC repair, installation,
            cleaning and maintenance services for homes and offices.
          </p>

        </div>
      </section>


      {/* ABOUT CONTENT */}

      <section className="py-5">
        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <img
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1000&q=80"
                alt="AC Technician"
                className="img-fluid rounded-4 shadow"
                style={{
                  width: "100%",
                  minHeight: "350px",
                  objectFit: "cover",
                }}
              />

            </div>


            <div className="col-lg-6">

              <span className="text-primary fw-semibold">
                WHO WE ARE
              </span>

              <h2 className="fw-bold mt-2 mb-3">
                Complete AC Care at Your Doorstep
              </h2>

              <p className="text-muted">
                Our goal is to make AC service simple, fast and
                convenient. Customers can easily book a service,
                share their AC problem and connect with our team.
              </p>

              <p className="text-muted">
                We provide support for different types of AC systems
                including Split AC, Window AC, Cassette AC and
                Central AC.
              </p>


              <div className="row mt-4">

                <div className="col-sm-6 mb-3">
                  <div className="d-flex">
                    <span className="text-success me-2">✓</span>
                    AC Repair
                  </div>
                </div>

                <div className="col-sm-6 mb-3">
                  <div className="d-flex">
                    <span className="text-success me-2">✓</span>
                    AC Installation
                  </div>
                </div>

                <div className="col-sm-6 mb-3">
                  <div className="d-flex">
                    <span className="text-success me-2">✓</span>
                    AC Deep Cleaning
                  </div>
                </div>

                <div className="col-sm-6 mb-3">
                  <div className="d-flex">
                    <span className="text-success me-2">✓</span>
                    AC Maintenance
                  </div>
                </div>

              </div>


              <Link
                to="/book-service"
                className="btn btn-primary btn-lg mt-2"
              >
                Book AC Service
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* WHY CHOOSE US */}

      <section className="py-5 bg-light">
        <div className="container">

          <div className="text-center mb-5">

            <span className="text-primary fw-semibold">
              WHY CHOOSE US
            </span>

            <h2 className="fw-bold mt-2">
              Professional AC Service Experience
            </h2>

          </div>


          <div className="row g-4">

            <div className="col-md-4">

              <div className="card border-0 shadow-sm h-100">

                <div className="card-body p-4 text-center">

                  <div
                    className="mb-3"
                    style={{ fontSize: "45px" }}
                  >
                    👨‍🔧
                  </div>

                  <h4 className="fw-bold">
                    Professional Service
                  </h4>

                  <p className="text-muted mb-0">
                    Proper inspection and service process for
                    different AC problems.
                  </p>

                </div>

              </div>

            </div>


            <div className="col-md-4">

              <div className="card border-0 shadow-sm h-100">

                <div className="card-body p-4 text-center">

                  <div
                    className="mb-3"
                    style={{ fontSize: "45px" }}
                  >
                    ⚡
                  </div>

                  <h4 className="fw-bold">
                    Fast Booking
                  </h4>

                  <p className="text-muted mb-0">
                    Customers can easily submit their AC service
                    request through our online booking form.
                  </p>

                </div>

              </div>

            </div>


            <div className="col-md-4">

              <div className="card border-0 shadow-sm h-100">

                <div className="card-body p-4 text-center">

                  <div
                    className="mb-3"
                    style={{ fontSize: "45px" }}
                  >
                    💬
                  </div>

                  <h4 className="fw-bold">
                    Easy Support
                  </h4>

                  <p className="text-muted mb-0">
                    Booking details can be shared through email
                    and WhatsApp for easy communication.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* AI SECTION */}

      <section className="py-5 bg-dark text-white">
        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-8">

              <span className="badge bg-warning text-dark mb-3">
                AI AC Assistant
              </span>

              <h2 className="fw-bold">
                Not Sure What's Wrong With Your AC?
              </h2>

              <p className="text-white-50 mb-lg-0">
                Enter your AC brand, model, purchase date and
                current problem to get quick guidance before
                booking a technician.
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


      {/* CTA */}

      <section className="py-5 bg-primary text-white">
        <div className="container text-center">

          <h2 className="fw-bold">
            Need AC Repair or Service?
          </h2>

          <p className="lead">
            Book your service and our team will contact you.
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

export default About;