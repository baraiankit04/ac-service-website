import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Faq = () => {
    useEffect(() => {
  document.title =
    "AC Service FAQ | Repair & Maintenance Questions";

  let metaDescription = document.querySelector(
    'meta[name="description"]'
  );

  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    document.head.appendChild(metaDescription);
  }

  metaDescription.content =
    "Find answers to common AC repair, servicing, gas refill, booking and maintenance questions.";
}, []);

  const faqs = [
    {
      id: 1,
      question: "AC service kitne time me karani chahiye?",
      answer:
        "Generally AC ki regular cleaning aur servicing 3 se 6 mahine ke interval me useful hoti hai. Usage, dust aur environment ke hisab se frequency change ho sakti hai.",
    },
    {
      id: 2,
      question: "AC cooling kam kyu karta hai?",
      answer:
        "Dirty filters, blocked airflow, dirty coils, incorrect temperature setting ya refrigerant related problem ke karan cooling kam ho sakti hai. Exact issue technician inspection ke baad confirm hota hai.",
    },
    {
      id: 3,
      question: "AC gas refill kab required hoti hai?",
      answer:
        "Har service me gas refill required nahi hoti. Refrigerant leak ya pressure problem confirm hone par hi trained technician gas related work kare.",
    },
    {
      id: 4,
      question: "Kya aap Split aur Window dono AC service karte hain?",
      answer:
        "Website par Split AC, Window AC, Cassette AC, Central AC aur other AC types ke liye service booking option available hai.",
    },
    {
      id: 5,
      question: "Service booking kaise karein?",
      answer:
        "Book Service page par apna naam, mobile number, AC details, preferred date, time aur address enter karke booking request submit kar sakte hain.",
    },
    {
      id: 6,
      question: "Booking submit karne ke baad kya hoga?",
      answer:
        "Booking request receive hone ke baad service team customer se confirmation aur further details ke liye contact karegi.",
    },
    {
      id: 7,
      question: "Kya main WhatsApp se booking details bhej sakta hoon?",
      answer:
        "Haan. Booking submit hone ke baad WhatsApp button ke through booking details WhatsApp par share ki ja sakti hain.",
    },
    {
      id: 8,
      question: "AI AC Assistant kya karta hai?",
      answer:
        "AI AC Assistant me AC brand, model, purchase date aur problem enter karke possible issue, safe checks aur service recommendation dekhi ja sakti hai.",
    },
    {
      id: 9,
      question: "Kya AI Assistant ka result final diagnosis hai?",
      answer:
        "Nahi. AI Assistant sirf general guidance provide karta hai. Electrical, refrigerant ya technical fault ka final diagnosis trained technician inspection ke baad hi hona chahiye.",
    },
    {
      id: 10,
      question: "AC water leakage ho raha ho to kya karein?",
      answer:
        "Heavy leakage hone par AC ko switch off karna better hai. Drain pipe blockage ya cleaning issue ho sakta hai. Technician inspection book ki ja sakti hai.",
    },
  ];

  return (
    <>
      {/* HEADER */}

      <section className="bg-primary text-white py-5">
        <div className="container text-center">

          <span className="badge bg-warning text-dark mb-3">
            Help Center
          </span>

          <h1 className="fw-bold display-5">
            Frequently Asked Questions
          </h1>

          <p
            className="lead mx-auto mb-0"
            style={{ maxWidth: "700px" }}
          >
            AC repair, service, booking aur maintenance se related
            common questions ke answers.
          </p>

        </div>
      </section>


      {/* FAQ */}

      <section className="py-5 bg-light">
        <div className="container">

          <div className="row justify-content-center">

            <div className="col-lg-9">

              <div className="text-center mb-5">

                <span className="text-primary fw-semibold">
                  NEED HELP?
                </span>

                <h2 className="fw-bold mt-2">
                  Common AC Service Questions
                </h2>

                <p className="text-muted">
                  Neeche kisi question par click karke answer dekhein.
                </p>

              </div>


              <div
                className="accordion shadow-sm"
                id="faqAccordion"
              >

                {faqs.map((faq, index) => (

                  <div
                    className="accordion-item border-0 border-bottom"
                    key={faq.id}
                  >

                    <h2
                      className="accordion-header"
                      id={`heading${faq.id}`}
                    >

                      <button
                        className={`accordion-button fw-semibold ${
                          index !== 0 ? "collapsed" : ""
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${faq.id}`}
                        aria-expanded={index === 0}
                        aria-controls={`collapse${faq.id}`}
                      >
                        {faq.question}
                      </button>

                    </h2>


                    <div
                      id={`collapse${faq.id}`}
                      className={`accordion-collapse collapse ${
                        index === 0 ? "show" : ""
                      }`}
                      aria-labelledby={`heading${faq.id}`}
                      data-bs-parent="#faqAccordion"
                    >

                      <div className="accordion-body text-muted">
                        {faq.answer}
                      </div>

                    </div>

                  </div>

                ))}

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
                Still Not Sure About Your AC Problem?
              </h2>

              <p className="text-white-50 mb-lg-0">
                Apne AC ki details enter karke quick problem
                guidance le sakte hain.
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
            Need Professional AC Service?
          </h2>

          <p className="lead">
            Book your preferred service date and time online.
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

export default Faq;