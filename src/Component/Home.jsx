import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {

    useEffect(() => {
    document.title =
      "AC Repair & Service | Fast AC Service Booking";
  }, []);

  const words = [
    "AC Repair",
    "AC Installation",
    "AC Gas Refill",
    "AC Deep Cleaning",
    "AC Maintenance",
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
    

  
  useEffect(() => {
    const currentWord = words[wordIndex];

    const timer = setTimeout(
      () => {
        if (!deleting) {
          setText(currentWord.substring(0, text.length + 1));

          if (text === currentWord) {
            setTimeout(() => setDeleting(true), 900);
          }
        } else {
          setText(currentWord.substring(0, text.length - 1));

          if (text === "") {
            setDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      deleting ? 50 : 90
    );

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex]);

  const services = [
    {
  title: "AC Repair",
  text: "Cooling issue, noise, leakage aur other AC problems ki professional repair.",
  image:
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80",
},
    {
      title: "AC Installation",
      text: "Split aur window AC ki safe aur professional installation service.",
      image:
        "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "AC Cleaning",
      text: "Filter, indoor unit aur AC parts ki deep cleaning.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "AC Maintenance",
      text: "Regular service se cooling better aur electricity consumption controlled rahe.",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80",
    },
    

    
  ];
const acBrands = [
  "Daikin",
  "LG",
  "Samsung",
  "Voltas",
  "Blue Star",
  "Hitachi",
  "Carrier",
  "Panasonic",
  "Lloyd",
  "Godrej",
  "Haier",
  "O General",
];
  return (
    <>
      {/* HERO */}

      <section className="homeHero">
        <div className="container">
          <div className="row align-items-center min-vh-75">

            <div className="col-lg-6 text-center text-lg-start">

              <span className="badge bg-warning text-dark px-3 py-2 mb-3">
                Professional AC Service
              </span>

              <h1 className="display-4 fw-bold text-white">
                Fast & Reliable
                <br />

                <span className="text-warning typewriterText">
                  {text}
                </span>

                <span className="typingCursor">|</span>
              </h1>

              <p className="lead text-white-50 mt-3">
                AC repair, installation, cleaning and maintenance service
                at your doorstep.
              </p>

              <div className="heroButtons mt-4">

                <Link
                  to="/book-service"
                  className="btn btn-warning btn-lg px-4"
                >
                  Book Service
                </Link>

                <Link
                  to="/ai-ac-assistant"
                  className="btn btn-outline-light btn-lg px-4"
                >
                  Check AC with AI
                </Link>

              </div>

              <div className="row mt-5 text-white heroStats">

                <div className="col-4">
                  <h4 className="fw-bold">Fast</h4>
                  <small>Service</small>
                </div>

                <div className="col-4">
                  <h4 className="fw-bold">Trusted</h4>
                  <small>Technicians</small>
                </div>

                <div className="col-4">
                  <h4 className="fw-bold">Easy</h4>
                  <small>Booking</small>
                </div>

              </div>

            </div>


            <div className="col-lg-6 mt-5 mt-lg-0">

              <div className="heroImageWrapper">

                <img
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1100&q=80"
                  alt="AC Service Technician"
                  className="img-fluid heroMainImage"
                />

                <div className="heroFloatingCard">

                  <div className="fw-bold fs-5">
                    Need AC Service?
                  </div>

                  <small>
                    Book a technician in a few steps.
                  </small>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* SERVICES */}

      <section className="py-5">

        <div className="container">

          <div className="text-center mb-5">

            <span className="text-primary fw-semibold">
              OUR SERVICES
            </span>

            <h2 className="fw-bold display-6 mt-2">
              Complete AC Care
            </h2>

            <p className="text-muted">
              Home aur office ke liye complete AC service solution.
            </p>

          </div>


          <div className="row g-4">

            {services.map((service, index) => (

              <div
                className="col-sm-6 col-lg-3"
                key={index}
              >

                <div className="card serviceCard h-100 shadow-sm">

                  <img
                    src={service.image}
                    className="card-img-top serviceImage"
                    alt={service.title}
                  />

                  <div className="card-body">

                    <h4 className="card-title fw-bold">
                      {service.title}
                    </h4>

                    <p className="card-text text-muted">
                      {service.text}
                    </p>

                    <Link
                      to="/book-service"
                      className="btn btn-outline-primary"
                    >
                      Book Now
                    </Link>

                  </div>

                </div>

              </div>

            ))}

          </div>


          <div className="text-center mt-4">

            <Link
              to="/services"
              className="btn btn-primary px-4"
            >
              View All Services
            </Link>

          </div>

        </div>

      </section>

      {/* AC BRANDS SECTION */}

<section className="py-5 bg-white">
  <div className="container">

    <div className="text-center mb-5">
      <span className="text-primary fw-semibold">
        AC BRANDS WE SERVICE
      </span>

      <h2 className="fw-bold mt-2">
        We Service All Major AC Brands
      </h2>

      <p
        className="text-muted mx-auto"
        style={{ maxWidth: "700px" }}
      >
        Split AC, Window AC aur other AC models ke liye
        professional service support.
      </p>
    </div>

    <div className="row g-3 justify-content-center">

      {acBrands.map((brand, index) => (
        <div
          className="col-6 col-sm-4 col-md-3 col-lg-2"
          key={index}
        >
          <div className="brand-card text-center h-100">
            <div className="brand-icon mb-2">
              ❄️
            </div>

            <h6 className="mb-0 fw-bold">
              {brand}
            </h6>
          </div>
        </div>
      ))}

    </div>

    <div className="text-center mt-4">
      <p className="text-muted mb-0">
        Can't find your AC brand? No problem.
        You can still book a service request.
      </p>
    </div>

  </div>
</section>


      {/* AI SECTION */}

      <section className="aiHomeSection py-5">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <span className="badge bg-warning text-dark mb-3">
                AI Powered
              </span>

              <h2 className="display-6 fw-bold text-white">
                Understand Your AC Problem Before Booking
              </h2>

              <p className="text-white-50 fs-5">
                Brand, model, purchase date aur problem enter karo.
                AC Assistant tumhe possible issue aur service guidance dega.
              </p>


              <div className="row text-white mt-4">

                <div className="col-sm-6 mb-3">
                  ✓ Check AC Age
                </div>

                <div className="col-sm-6 mb-3">
                  ✓ Possible Problems
                </div>

                <div className="col-sm-6 mb-3">
                  ✓ Safe Checks
                </div>

                <div className="col-sm-6 mb-3">
                  ✓ Service Priority
                </div>

                <div className="col-sm-6 mb-3">
                  ✓ Maintenance Guidance
                </div>

                <div className="col-sm-6 mb-3">
                  ✓ Book Technician
                </div>

              </div>


              <Link
                to="/ai-ac-assistant"
                className="btn btn-warning btn-lg mt-3"
              >
                Check My AC
              </Link>

            </div>


            <div className="col-lg-6 mt-5 mt-lg-0">

              <div className="aiDemoCard">

                <div className="d-flex justify-content-between align-items-center">

                  <div>
                    <small className="text-muted">
                      AI AC HEALTH REPORT
                    </small>

                    <h4 className="fw-bold mb-0">
                      Split AC
                    </h4>
                  </div>

                  <span className="badge bg-success">
                    Analysis Ready
                  </span>

                </div>

                <hr />

                <div className="mb-3">
                  <small className="text-muted">
                    AC Brand
                  </small>

                  <div className="fw-semibold">
                    Daikin
                  </div>
                </div>

                <div className="mb-3">
                  <small className="text-muted">
                    Current Problem
                  </small>

                  <div className="fw-semibold">
                    Low Cooling
                  </div>
                </div>

                <div className="alert alert-warning">
                  Possible causes may include dirty filters,
                  airflow problems or maintenance requirement.
                </div>

                <Link
                  to="/ai-ac-assistant"
                  className="btn btn-primary w-100"
                >
                  Start AC Check
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* WHY CHOOSE US */}

      <section className="py-5 bg-light">

        <div className="container">

          <div className="text-center mb-5">

            <h2 className="fw-bold">
              Why Choose Us?
            </h2>

            <p className="text-muted">
              Simple booking, professional service and easy support.
            </p>

          </div>


          <div className="row g-4 text-center">

            <div className="col-md-4">

              <div className="featureBox">

                <div className="featureIcon">
                  ⚡
                </div>

                <h4>
                  Fast Service
                </h4>

                <p className="text-muted">
                  Quick response and easy technician booking.
                </p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="featureBox">

                <div className="featureIcon">
                  👨‍🔧
                </div>

                <h4>
                  Professional Work
                </h4>

                <p className="text-muted">
                  AC problems ke liye proper service process.
                </p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="featureBox">

                <div className="featureIcon">
                  💬
                </div>

                <h4>
                  Easy Support
                </h4>

                <p className="text-muted">
                  Email aur WhatsApp booking support.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>
{/* SERVICE AREAS PREVIEW */}

<section className="py-5 bg-light">
  <div className="container">

    <div className="row justify-content-center mb-4">
      <div className="col-lg-8 text-center">

        <p className="text-primary fw-bold mb-2">
          SERVICE AREAS
        </p>

        <h2 className="fw-bold">
          AC Service Near You
        </h2>

        <p className="text-muted">
          We provide AC repair and service support in multiple locations.
        </p>

      </div>
    </div>


    <div className="row g-3">

      {[
        "Vashi",
        "Sanpada",
        "Nerul",
        "Seawoods",
        "CBD Belapur",
        "Kharghar",
        "Airoli",
        "Ghansoli",
      ].map((area, index) => (

        <div
          key={index}
          className="col-12 col-sm-6 col-lg-3"
        >

          <div className="card h-100 border-0 shadow-sm rounded-4">

            <div className="card-body d-flex align-items-center gap-3">

              <div
                className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: "45px",
                  height: "45px",
                  minWidth: "45px",
                }}
              >
                📍
              </div>

              <div>

                <h3 className="h6 fw-bold mb-1">
                  {area}
                </h3>

                <small className="text-muted">
                  AC Service Available
                </small>

              </div>

            </div>

          </div>

        </div>

      ))}

    </div>


    <div className="text-center mt-4">

      <Link
        to="/areas"
        className="btn btn-outline-primary px-4"
      >
        View All Service Areas
      </Link>

    </div>

  </div>
</section>

{/* FAQ PREVIEW */}

<section className="py-5 bg-white">
  <div className="container">

    <div className="row justify-content-center">

      <div className="col-12 col-lg-9">

        <div className="text-center mb-4">

          <p className="text-primary fw-bold mb-2">
            NEED HELP?
          </p>

          <h2 className="fw-bold">
            Frequently Asked Questions
          </h2>

          <p className="text-muted">
            Common AC service and booking questions.
          </p>

        </div>


        <div
          className="accordion shadow-sm rounded-4 overflow-hidden"
          id="homeFaq"
        >

          {/* FAQ 1 */}

          <div className="accordion-item border-0 border-bottom">

            <h3 className="accordion-header">

              <button
                className="accordion-button fw-semibold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#homeFaqOne"
              >
                AC service kitne time me karani chahiye?
              </button>

            </h3>

            <div
              id="homeFaqOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#homeFaq"
            >

              <div className="accordion-body text-muted">
                AC usage aur dust conditions ke hisab se regular
                cleaning aur servicing useful hoti hai.
              </div>

            </div>

          </div>


          {/* FAQ 2 */}

          <div className="accordion-item border-0 border-bottom">

            <h3 className="accordion-header">

              <button
                className="accordion-button collapsed fw-semibold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#homeFaqTwo"
              >
                AC cooling kam kyu karta hai?
              </button>

            </h3>

            <div
              id="homeFaqTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#homeFaq"
            >

              <div className="accordion-body text-muted">
                Dirty filters, blocked airflow, coil issue ya
                refrigerant related problem cooling ko affect kar sakti hai.
              </div>

            </div>

          </div>


          {/* FAQ 3 */}

          <div className="accordion-item border-0 border-bottom">

            <h3 className="accordion-header">

              <button
                className="accordion-button collapsed fw-semibold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#homeFaqThree"
              >
                Kya har AC service me gas refill required hoti hai?
              </button>

            </h3>

            <div
              id="homeFaqThree"
              className="accordion-collapse collapse"
              data-bs-parent="#homeFaq"
            >

              <div className="accordion-body text-muted">
                Nahi. Gas refill tabhi required hoti hai jab technician
                inspection me refrigerant level ya leakage related problem
                confirm ho.
              </div>

            </div>

          </div>


          {/* FAQ 4 */}

          <div className="accordion-item border-0">

            <h3 className="accordion-header">

              <button
                className="accordion-button collapsed fw-semibold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#homeFaqFour"
              >
                Service booking kaise karein?
              </button>

            </h3>

            <div
              id="homeFaqFour"
              className="accordion-collapse collapse"
              data-bs-parent="#homeFaq"
            >

              <div className="accordion-body text-muted">
                Book Service page par apni contact details, AC details,
                preferred date, time aur address enter karke request
                submit kar sakte hain.
              </div>

            </div>

          </div>

        </div>


        <div className="text-center mt-4">

          <Link
            to="/faq"
            className="btn btn-outline-primary px-4"
          >
            View All FAQs
          </Link>

        </div>

      </div>

    </div>

  </div>
</section>
      {/* FINAL CTA */}

      <section className="py-5 bg-primary text-white">

        <div className="container text-center">

          <h2 className="fw-bold">
            AC Problem? Book Your Service Today
          </h2>

          <p className="lead">
            Fill the booking form and our team will contact you.
          </p>

          <Link
            to="/book-service"
            className="btn btn-warning btn-lg px-5"
          >
            Book Service
          </Link>

        </div>

      </section>

    </>
  );
};

export default Home;