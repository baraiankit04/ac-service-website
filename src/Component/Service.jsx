import { Link } from "react-router-dom";
import React, { useEffect } from "react";
const Service = () => {
   
     useEffect(() => {
    document.title =
      "AC Services | Repair, Cleaning, Installation & Maintenance";
  }, []);
  
  const services = [

    
    {
      title: "AC Repair",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80",
      description:
        "Cooling issue, noise, water leakage, AC not starting aur other common problems ke liye professional AC repair service.",
      includes: [
        "Basic AC inspection",
        "Cooling performance check",
        "Indoor unit check",
        "Outdoor unit check",
        "Electrical connection check",
        "Problem identification",
      ],
      serviceName: "AC Repair",
    },

    {
      title: "AC Installation",
      image:
        "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80",
      description:
        "Split AC aur Window AC ke liye proper installation service with basic testing.",
      includes: [
        "Installation location check",
        "Indoor unit fitting",
        "Outdoor unit placement",
        "Pipe connection check",
        "Electrical connection check",
        "Basic AC testing",
      ],
      serviceName: "AC Installation",
    },

    {
      title: "AC Deep Cleaning",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
      description:
        "Dust, dirty filters aur blocked airflow ko reduce karne ke liye detailed AC cleaning service.",
      includes: [
        "Filter cleaning",
        "Indoor unit cleaning",
        "Coil cleaning",
        "Drain pipe check",
        "Airflow check",
        "Basic cooling test",
      ],
      serviceName: "AC Cleaning",
    },

    {
      title: "AC Gas Refill",
      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80",
      description:
        "Gas pressure aur refrigerant related problem ke liye technician inspection aur required service.",
      includes: [
        "Cooling check",
        "Gas pressure inspection",
        "Leakage inspection",
        "Refrigerant requirement check",
        "Gas refill if required",
        "Final cooling test",
      ],
      serviceName: "AC Gas Refill",
    },

    {
      title: "AC Maintenance",
      image:
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80",
      description:
        "Regular AC maintenance se performance ko better maintain karne aur common problems ko reduce karne me help milti hai.",
      includes: [
        "General AC inspection",
        "Filter inspection",
        "Cooling check",
        "Drain check",
        "Electrical check",
        "Performance testing",
      ],
      serviceName: "AC Maintenance",
    },

    {
      title: "AC Uninstallation",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",
      description:
        "Relocation ya replacement ke liye AC indoor aur outdoor unit ko safely remove karne ki service.",
      includes: [
        "Indoor unit removal",
        "Outdoor unit removal",
        "Pipe disconnection",
        "Electrical disconnection",
        "Basic unit handling",
        "Removal inspection",
      ],
      serviceName: "AC Uninstallation",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-primary text-white py-5">
        <div className="container py-lg-4">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <span className="badge bg-warning text-dark px-3 py-2 mb-3">
                Our Services
              </span>

              <h1 className="display-5 fw-bold mb-3">
                Professional AC Services
              </h1>

              <p className="lead mb-0">
                AC repair, installation, cleaning, gas refill aur maintenance
                ke liye apni required service select karein.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <p className="text-primary fw-bold mb-2">
                CHOOSE YOUR SERVICE
              </p>

              <h2 className="fw-bold mb-3">
                Complete AC Service Solutions
              </h2>

              <p className="text-muted mb-0">
                Apne AC ki problem ya requirement ke hisab se service choose
                karein aur directly online booking karein.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {services.map((service, index) => (
              <div
                className="col-12 col-md-6 col-lg-4"
                key={index}
              >
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="card-img-top"
                    style={{
                      height: "220px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body p-4 d-flex flex-column">
                    <h3 className="h4 fw-bold mb-3">
                      {service.title}
                    </h3>

                    <p className="text-muted mb-4">
                      {service.description}
                    </p>

                    <h5 className="h6 fw-bold mb-3">
                      What's Included
                    </h5>

                    <ul className="list-group list-group-flush mb-4">
                      {service.includes.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="list-group-item border-0 px-0 py-1 bg-transparent"
                        >
                          <span className="text-success fw-bold me-2">
                            ✓
                          </span>

                          <span className="text-secondary">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto">
                      <Link
                        to={`/book-service?service=${encodeURIComponent(
                          service.serviceName
                        )}`}
                        className="btn btn-primary w-100 py-2 fw-semibold"
                      >
                        Book This Service
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <p className="text-primary fw-bold mb-2">
                EASY BOOKING
              </p>

              <h2 className="fw-bold">
                How AC Service Booking Works
              </h2>
            </div>
          </div>

          <div className="row g-4 text-center">
            <div className="col-12 col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4">
                <div className="card-body p-4">
                  <div className="display-6 mb-3">
                    1️⃣
                  </div>

                  <h4 className="h5 fw-bold">
                    Choose Service
                  </h4>

                  <p className="text-muted mb-0">
                    Apni AC problem ke hisab se required service select karein.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4">
                <div className="card-body p-4">
                  <div className="display-6 mb-3">
                    2️⃣
                  </div>

                  <h4 className="h5 fw-bold">
                    Fill Booking Details
                  </h4>

                  <p className="text-muted mb-0">
                    Name, mobile, address, AC details, date aur time enter karein.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4">
                <div className="card-body p-4">
                  <div className="display-6 mb-3">
                    3️⃣
                  </div>

                  <h4 className="h5 fw-bold">
                    Get Confirmation
                  </h4>

                  <p className="text-muted mb-0">
                    Booking request receive hone ke baad service team contact
                    karegi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI ASSISTANT SECTION */}
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-12 col-lg-8 text-center text-lg-start">
              <span className="badge bg-warning text-dark mb-3">
                AC Assistant
              </span>

              <h2 className="fw-bold">
                Not Sure Which Service You Need?
              </h2>

              <p className="text-white-50 mb-0">
                AC brand, model aur problem select karke possible issue aur
                suitable service recommendation check karein.
              </p>
            </div>

            <div className="col-12 col-lg-4 text-center text-lg-end">
              <Link
                to="/ai-ac-assistant"
                className="btn btn-warning btn-lg px-4"
              >
                Check My AC
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="fw-bold mb-3">
                Ready to Book Your AC Service?
              </h2>

              <p className="lead mb-4">
                Apni preferred date aur time choose karke service request
                submit karein.
              </p>

              <div className="d-grid d-sm-flex justify-content-sm-center gap-3">
                <Link
                  to="/book-service"
                  className="btn btn-warning btn-lg px-4"
                >
                  Book Service
                </Link>

                <Link
                  to="/contact"
                  className="btn btn-outline-light btn-lg px-4"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;