import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Area = () => {

    useEffect(() => {
  document.title =
    "AC Service Areas | AC Repair Near You";

  let metaDescription = document.querySelector(
    'meta[name="description"]'
  );

  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    document.head.appendChild(metaDescription);
  }

  metaDescription.content =
    "Check AC repair and service availability in your area. Find nearby AC service locations and book your service online.";
}, []);

  const [search, setSearch] = useState("");

  const areas = [
    "Vashi",
    "Sanpada",
    "Nerul",
    "Seawoods",
    "CBD Belapur",
    "Kharghar",
    "Kopar Khairane",
    "Ghansoli",
    "Airoli",
    "Turbhe",
    "Juinagar",
    "Ulwe",
  ];

  const filteredAreas = areas.filter((area) =>
    area.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* HERO */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <span className="badge bg-warning text-dark mb-3">
            Service Areas
          </span>

          <h1 className="fw-bold display-6">
            AC Service Near You
          </h1>

          <p
            className="lead mx-auto mb-0"
            style={{ maxWidth: "700px" }}
          >
            Check whether AC repair and service is available in your area.
          </p>
        </div>
      </section>

      {/* SEARCH + AREAS */}
      <section className="py-5 bg-light">
        <div className="container">

          <div className="row justify-content-center mb-4">
            <div className="col-12 col-md-8 col-lg-6">

              <div className="card border-0 shadow-sm p-3 p-md-4">
                <label className="form-label fw-semibold">
                  Search Your Area
                </label>

                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Example: Vashi"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                <small className="text-muted mt-2">
                  Type your location name to check service availability.
                </small>
              </div>

            </div>
          </div>

          <div className="text-center mb-4">
            <h2 className="fw-bold">
              Areas We Currently Serve
            </h2>

            <p className="text-muted">
              Select your area and book your AC service.
            </p>
          </div>

          <div className="row g-3">

            {filteredAreas.length > 0 ? (
              filteredAreas.map((area, index) => (
                <div
                  className="col-12 col-sm-6 col-lg-4 col-xl-3"
                  key={index}
                >
                  <div className="area-card h-100">

                    <div className="area-icon">
                      📍
                    </div>

                    <div className="flex-grow-1">
                      <h5 className="fw-bold mb-1">
                        {area}
                      </h5>

                      <p className="text-muted small mb-0">
                        AC Repair & Service Available
                      </p>
                    </div>

                    <span className="badge bg-success">
                      Available
                    </span>

                  </div>
                </div>
              ))
            ) : (
              <div className="col-12">
                <div className="text-center bg-white shadow-sm rounded-4 p-4">

                  <div className="fs-1 mb-2">
                    🔍
                  </div>

                  <h5 className="fw-bold">
                    Area Not Found
                  </h5>

                  <p className="text-muted mb-3">
                    Your location is not listed yet.
                    Contact us to check availability.
                  </p>

                  <Link
                    to="/contact"
                    className="btn btn-primary"
                  >
                    Contact Us
                  </Link>

                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 bg-dark text-white">
        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-8 text-center text-lg-start">
              <h2 className="fw-bold">
                Service Available in Your Area?
              </h2>

              <p className="text-white-50 mb-lg-0">
                Book your preferred AC service date and time online.
              </p>
            </div>

            <div className="col-lg-4 text-center text-lg-end mt-4 mt-lg-0">
              <Link
                to="/book-service"
                className="btn btn-warning btn-lg px-4"
              >
                Book Service
              </Link>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Area;