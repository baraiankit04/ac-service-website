import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Terms = () => {
    useEffect(() => {
    document.title =
      "Terms & Conditions | AC Service";
  }, []);
  
  return (
    <>
      {/* HEADER */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <span className="badge bg-warning text-dark mb-3">
            Terms
          </span>

          <h1 className="fw-bold display-6">
            Terms & Conditions
          </h1>

          <p className="lead mb-0">
            Please review these terms before submitting a service request.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">

            <div className="col-12 col-lg-9">
              <div className="card border-0 shadow-sm rounded-4">

                <div className="card-body p-4 p-md-5">

                  <h2 className="h4 fw-bold">
                    1. Service Booking
                  </h2>

                  <p className="text-muted">
                    Submitting the booking form creates a service request.
                    A booking may require confirmation before a technician
                    visit is finalized.
                  </p>

                  <hr />

                  <h2 className="h4 fw-bold">
                    2. Service Availability
                  </h2>

                  <p className="text-muted">
                    Service availability may depend on location, technician
                    availability, AC type and the nature of the problem.
                  </p>

                  <hr />

                  <h2 className="h4 fw-bold">
                    3. Pricing
                  </h2>

                  <p className="text-muted">
                    Final service charges may depend on inspection, required
                    parts, repair work, AC type and other service requirements.
                    Any estimated price displayed on the website should not be
                    treated as a final quotation unless confirmed.
                  </p>

                  <hr />

                  <h2 className="h4 fw-bold">
                    4. AC Repair Diagnosis
                  </h2>

                  <p className="text-muted">
                    The exact AC fault may only be confirmed after technician
                    inspection. Online information and AC Assistant results
                    are intended for general guidance.
                  </p>

                  <hr />

                  <h2 className="h4 fw-bold">
                    5. AI / AC Assistant
                  </h2>

                  <p className="text-muted">
                    Recommendations shown by the AC Assistant should not be
                    considered a final technical diagnosis. Electrical,
                    refrigerant and internal AC repairs should be handled by
                    trained technicians.
                  </p>

                  <hr />

                  <h2 className="h4 fw-bold">
                    6. Customer Responsibilities
                  </h2>

                  <p className="text-muted">
                    Customers should provide correct contact information,
                    service address and AC details when submitting a booking.
                  </p>

                  <hr />

                  <h2 className="h4 fw-bold">
                    7. Cancellation
                  </h2>

                  <p className="text-muted">
                    If you need to cancel or reschedule a service request,
                    contact the service team as early as possible.
                  </p>

                  <hr />

                  <h2 className="h4 fw-bold">
                    8. Contact
                  </h2>

                  <p className="text-muted mb-1">
                    For questions related to bookings or services:
                  </p>

                  <a
                    href="tel:+917317422100"
                    className="text-decoration-none fw-semibold d-block mb-1"
                  >
                    +91 73174 22100
                  </a>

                  <a
                    href="mailto:ankitchaurasiya583@gmail.com"
                    className="text-decoration-none"
                  >
                    ankitchaurasiya583@gmail.com
                  </a>

                  <hr />

                  <Link
                    to="/"
                    className="btn btn-primary"
                  >
                    Back to Home
                  </Link>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;