import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
    useEffect(() => {
  document.title =
    "Privacy Policy | AC Service";

  let metaDescription = document.querySelector(
    'meta[name="description"]'
  );

  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    document.head.appendChild(metaDescription);
  }

  metaDescription.content =
    "Read our privacy policy to understand how booking and contact information submitted through the AC service website is used.";
}, []);

  return (
    <>
      {/* HEADER */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <span className="badge bg-warning text-dark mb-3">
            Privacy
          </span>

          <h1 className="fw-bold display-6">
            Privacy Policy
          </h1>

          <p className="lead mb-0">
            Learn how information submitted through our website is used.
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
                    1. Information We Collect
                  </h2>

                  <p className="text-muted">
                    When you submit a service booking or contact request,
                    information such as your name, mobile number, email
                    address, service details, AC information and address
                    may be collected.
                  </p>

                  <hr />

                  <h2 className="h4 fw-bold">
                    2. How We Use Your Information
                  </h2>

                  <p className="text-muted">
                    Information submitted through the website may be used
                    to contact you regarding your service request, confirm
                    booking details and provide customer support.
                  </p>

                  <hr />

                  <h2 className="h4 fw-bold">
                    3. Booking Information
                  </h2>

                  <p className="text-muted">
                    Information entered in the booking form may be sent
                    through email or WhatsApp for processing your service
                    request.
                  </p>

                  <hr />

                  <h2 className="h4 fw-bold">
                    4. Third-Party Services
                  </h2>

                  <p className="text-muted">
                    This website may use third-party services such as
                    EmailJS, WhatsApp or other communication services to
                    process booking and contact requests.
                  </p>

                  <hr />

                  <h2 className="h4 fw-bold">
                    5. Information Security
                  </h2>

                  <p className="text-muted">
                    Reasonable steps are taken to keep customer information
                    secure. However, no online transmission method can be
                    guaranteed to be completely secure.
                  </p>

                  <hr />

                  <h2 className="h4 fw-bold">
                    6. Cookies
                  </h2>

                  <p className="text-muted">
                    The website may use basic browser technologies or
                    third-party services that use cookies for functionality,
                    analytics or performance.
                  </p>

                  <hr />

                  <h2 className="h4 fw-bold">
                    7. Contact
                  </h2>

                  <p className="text-muted mb-1">
                    For privacy related questions, contact us at:
                  </p>

                  <a
                    href="mailto:ankitchaurasiya583@gmail.com"
                    className="text-decoration-none fw-semibold"
                  >
                    ankitchaurasiya583@gmail.com
                  </a>

                  <hr />

                  <p className="text-muted small mb-4">
                    This policy may be updated when website features or
                    services change.
                  </p>

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

export default PrivacyPolicy;