import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-vh-100 d-flex align-items-center bg-light py-5">

      <div className="container">

        <div className="row justify-content-center">

          <div className="col-12 col-md-8 col-lg-6 text-center">

            <div className="card border-0 shadow-sm rounded-4">

              <div className="card-body p-4 p-md-5">

                <div className="display-1 fw-bold text-primary">
                  404
                </div>

                <h1 className="fw-bold mb-3">
                  Page Not Found
                </h1>

                <p className="text-muted mb-4">
                  Sorry, the page you are looking for does not exist
                  or may have been moved.
                </p>

                <div className="d-grid d-sm-flex justify-content-sm-center gap-2">

                  <Link
                    to="/"
                    className="btn btn-primary btn-lg px-4"
                  >
                    Go to Home
                  </Link>

                  <Link
                    to="/services"
                    className="btn btn-outline-primary btn-lg px-4"
                  >
                    View Services
                  </Link>

                </div>

                <div className="mt-4">
                  <small className="text-muted">
                    Need AC service?
                  </small>

                  <div className="mt-2">
                    <Link
                      to="/book-service"
                      className="text-decoration-none fw-semibold"
                    >
                      Book AC Service →
                    </Link>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default NotFound;