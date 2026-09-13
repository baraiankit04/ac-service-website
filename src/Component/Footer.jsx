import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5">

      <div className="container">

        <div className="row g-4">

          {/* BRAND */}
          <div className="col-12 col-md-6 col-lg-3">
            <Link
              className="navbar-brand d-flex align-items-center gap-2 fw-bold"
              to="/"
            >
              <img
                src="/logo.png"
                alt="AC Service Logo"
                width="40"
                height="40"
                className="rounded"
              />
            
              <span>AC Service </span>
              <span className="text-warning">4U</span>
            </Link>

            <p className="text-white-50">
              Reliable AC repair, installation, cleaning and maintenance
              services with easy online booking.
            </p>

            <Link
              to="/book-service"
              className="btn btn-warning fw-semibold"
            >
              Book Service
            </Link>
          </div>


          {/* QUICK LINKS */}
          <div className="col-6 col-md-3 col-lg-2">

            <h5 className="fw-bold mb-3">
              Quick Links
            </h5>

            <ul className="list-unstyled">

              <li className="mb-2">
                <Link
                  to="/"
                  className="text-white-50 text-decoration-none"
                >
                  Home
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/about"
                  className="text-white-50 text-decoration-none"
                >
                  About
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/services"
                  className="text-white-50 text-decoration-none"
                >
                  Services
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/areas"
                  className="text-white-50 text-decoration-none"
                >
                  Service Areas
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/faq"
                  className="text-white-50 text-decoration-none"
                >
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-white-50 text-decoration-none"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>


          {/* SERVICES */}
          <div className="col-6 col-md-3 col-lg-3">

            <h5 className="fw-bold mb-3">
              Our Services
            </h5>

            <ul className="list-unstyled">

              <li className="mb-2">
                <Link
                  to="/book-service?service=AC%20Repair"
                  className="text-white-50 text-decoration-none"
                >
                  AC Repair
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/book-service?service=AC%20Installation"
                  className="text-white-50 text-decoration-none"
                >
                  AC Installation
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/book-service?service=AC%20Cleaning"
                  className="text-white-50 text-decoration-none"
                >
                  AC Cleaning
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/book-service?service=AC%20Gas%20Refill"
                  className="text-white-50 text-decoration-none"
                >
                  AC Gas Refill
                </Link>
              </li>

              <li>
                <Link
                  to="/book-service?service=AC%20Maintenance"
                  className="text-white-50 text-decoration-none"
                >
                  AC Maintenance
                </Link>
              </li>

            </ul>

          </div>


          {/* CONTACT */}
          <div className="col-12 col-md-6 col-lg-4">

            <h5 className="fw-bold mb-3">
              Contact Us
            </h5>

            <div className="mb-3">
              <p className="mb-1 text-white-50">
                Phone
              </p>

              <a
                href="tel:+917317422100"
                className="text-white text-decoration-none fw-semibold"
              >
                +91 73174 22100
              </a>
            </div>


            <div className="mb-3">
              <p className="mb-1 text-white-50">
                Email
              </p>

              <a
                href="mailto:ankitchaurasiya583@gmail.com"
                className="text-white text-decoration-none"
              >
                ankitchaurasiya583@gmail.com
              </a>
            </div>


            <div className="mb-3">
              <p className="mb-1 text-white-50">
                WhatsApp
              </p>

              <a
                href="https://wa.me/917317422100"
                target="_blank"
                rel="noopener noreferrer"
                className="text-success text-decoration-none fw-semibold"
              >
                Chat on WhatsApp
              </a>
            </div>


            <div>
              <p className="mb-1 text-white-50">
                Working Hours
              </p>

              <p className="mb-0">
                Monday - Sunday
              </p>

              <p className="mb-0 text-white-50">
                8:00 AM - 9:00 PM
              </p>
            </div>

          </div>

        </div>


        {/* DIVIDER */}
        <hr className="border-secondary my-4" />


        {/* SERVICE AREAS */}
        <div className="row pb-4">

          <div className="col-12">

            <h6 className="fw-bold mb-3">
              Popular Service Areas
            </h6>

            <div className="d-flex flex-wrap gap-2">

              {[
                "Vashi",
                "Sanpada",
                "Nerul",
                "Seawoods",
                "Belapur",
                "Kharghar",
                "Airoli",
                "Ghansoli",
              ].map((area, index) => (
                <span
                  key={index}
                  className="badge border border-secondary text-white-50 px-3 py-2"
                >
                  {area}
                </span>
              ))}

            </div>

          </div>

        </div>

      </div>


      {/* COPYRIGHT */}
      <div className="bg-black py-3">

        <div className="container">

          <div className="row align-items-center gy-2">

            <div className="col-12 col-md-6 text-center text-md-start">

              <small className="text-white-50">
                © {new Date().getFullYear()} Ankit barai AC Service. All Rights Reserved.
              </small>

            </div>


            <div className="col-12 col-md-6 text-center text-md-end">

              <Link
                to="/privacy-policy"
                className="text-white-50 text-decoration-none me-3"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="text-white-50 text-decoration-none"
              >
                Terms
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;