import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useSearchParams } from "react-router-dom";

const BookService = () => {
    useEffect(() => {
  document.title =
    "Book AC Service | Repair, Cleaning & Installation";

  let metaDescription = document.querySelector(
    'meta[name="description"]'
  );

  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    document.head.appendChild(metaDescription);
  }

  metaDescription.content =
    "Book AC repair, cleaning, installation, gas refill and maintenance service online. Select your preferred date, time and AC details.";
}, []);

  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingData, setBookingData] = useState(null);

  // AI Assistant se aane wala data
  const [searchParams] = useSearchParams();

  const aiBrand = searchParams.get("brand") || "";
  const aiModel = searchParams.get("model") || "";
  const aiAcType = searchParams.get("acType") || "";
  const aiProblem = searchParams.get("problem") || "";
  const aiDescription = searchParams.get("description") || "";
  const aiService = searchParams.get("service") || "";

  // WhatsApp Number
  const whatsappNumber = "917317422100";

  const sendBooking = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(form.current);

    const data = {
      customer_name: formData.get("customer_name"),
      customer_mobile: formData.get("customer_mobile"),
      customer_email: formData.get("customer_email"),

      service: formData.get("service"),

      ac_brand: formData.get("ac_brand"),
      ac_model: formData.get("ac_model"),
      ac_type: formData.get("ac_type"),

      service_date: formData.get("service_date"),
      service_time: formData.get("service_time"),

      address: formData.get("address"),

      message: formData.get("message"),
    };

    try {
      await emailjs.sendForm(
        "service_p0a347f",
        "template_olf3w4s",
        form.current,
        {
          publicKey: "N7er7QBIlmhhfCy9G",
        }
      );

      setBookingData(data);
      setBookingSuccess(true);

      form.current.reset();
    } catch (error) {
      console.log("Email Error:", error);

      alert(
        "Booking submit nahi ho payi. Please dobara try kare."
      );
    } finally {
      setLoading(false);
    }
  };

  const sendWhatsApp = () => {
    if (!bookingData) return;

    const message = `
🔧 NEW AC SERVICE BOOKING

👤 Customer Name:
${bookingData.customer_name}

📞 Mobile:
${bookingData.customer_mobile}

📧 Email:
${bookingData.customer_email || "Not Provided"}

🛠 Service:
${bookingData.service}

🏷 AC Brand:
${bookingData.ac_brand || "Not Provided"}

🔢 AC Model:
${bookingData.ac_model || "Not Provided"}

❄️ AC Type:
${bookingData.ac_type}

📅 Preferred Date:
${bookingData.service_date}

🕐 Preferred Time:
${bookingData.service_time}

📍 Address:
${bookingData.address}

📝 Problem / Message:
${bookingData.message || "Not Provided"}

Booking received from AC Service Website.
    `;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      {/* HEADER */}

      <section className="bg-primary text-white py-5">

        <div className="container text-center">

          <span className="badge bg-warning text-dark mb-3">
            Professional AC Service
          </span>

          <h1 className="fw-bold">
            Book AC Service
          </h1>

          <p className="lead mb-0">
            Fast, reliable and professional AC service at your doorstep.
          </p>

        </div>

      </section>


      {/* FORM SECTION */}

      <section className="py-5 bg-light">

        <div className="container">

          <div className="row justify-content-center">

            <div className="col-lg-9 col-xl-8">

              {!bookingSuccess ? (

                <div className="card border-0 shadow">

                  <div className="card-body p-4 p-md-5">

                    <div className="text-center mb-4">

                      <h2 className="fw-bold">
                        Service Booking Form
                      </h2>

                      <p className="text-muted">
                        Fill your details and our service team
                        will contact you for confirmation.
                      </p>

                    </div>


                    {/* AI INFO */}

                    {(aiBrand || aiProblem) && (

                      <div className="alert alert-info">

                        <strong>
                          AI AC Assistant Details Added
                        </strong>

                        <br />

                        Your AC details have been automatically
                        added from the AI AC Assistant.

                      </div>

                    )}


                    <form
                      ref={form}
                      onSubmit={sendBooking}
                    >


                      {/* NAME & MOBILE */}

                      <div className="row">

                        <div className="col-md-6 mb-3">

                          <label className="form-label fw-semibold">
                            Full Name *
                          </label>

                          <input
                            type="text"
                            name="customer_name"
                            className="form-control form-control-lg"
                            placeholder="Enter your full name"
                            required
                          />

                        </div>


                        <div className="col-md-6 mb-3">

                          <label className="form-label fw-semibold">
                            Mobile Number *
                          </label>

                          <input
                            type="tel"
                            name="customer_mobile"
                            className="form-control form-control-lg"
                            placeholder="10 digit mobile number"
                            pattern="[0-9]{10}"
                            maxLength="10"
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
                          name="customer_email"
                          className="form-control form-control-lg"
                          placeholder="example@gmail.com"
                        />

                      </div>


                      {/* SERVICE */}

                      <div className="mb-3">

                        <label className="form-label fw-semibold">
                          Select Service *
                        </label>

                        <select
                          name="service"
                          className="form-select form-select-lg"
                          defaultValue={aiService}
                          required
                        >

                          <option value="">
                            Choose Service
                          </option>

                          <option value="AC Repair">
                            AC Repair
                          </option>

                          <option value="AC General Service">
                            AC General Service
                          </option>

                          <option value="AC Deep Cleaning">
                            AC Deep Cleaning
                          </option>

                          <option value="AC Installation">
                            AC Installation
                          </option>

                          <option value="AC Uninstallation">
                            AC Uninstallation
                          </option>

                          <option value="AC Gas Refill">
                            AC Gas Refill
                          </option>

                          <option value="AC Maintenance">
                            AC Maintenance
                          </option>

                        </select>

                      </div>


                      {/* BRAND & MODEL */}

                      <div className="row">

                        <div className="col-md-6 mb-3">

                          <label className="form-label fw-semibold">
                            AC Brand
                          </label>

                          <input
                            type="text"
                            name="ac_brand"
                            className="form-control form-control-lg"
                            defaultValue={aiBrand}
                            placeholder="Example: Daikin"
                          />

                        </div>


                        <div className="col-md-6 mb-3">

                          <label className="form-label fw-semibold">
                            AC Model / Version
                          </label>

                          <input
                            type="text"
                            name="ac_model"
                            className="form-control form-control-lg"
                            defaultValue={aiModel}
                            placeholder="Example: FTKM50U"
                          />

                        </div>

                      </div>


                      {/* AC TYPE */}

                      <div className="mb-3">

                        <label className="form-label fw-semibold">
                          AC Type *
                        </label>

                        <select
                          name="ac_type"
                          className="form-select form-select-lg"
                          defaultValue={aiAcType}
                          required
                        >

                          <option value="">
                            Select AC Type
                          </option>

                          <option value="Split AC">
                            Split AC
                          </option>

                          <option value="Window AC">
                            Window AC
                          </option>

                          <option value="Cassette AC">
                            Cassette AC
                          </option>

                          <option value="Central AC">
                            Central AC
                          </option>

                          <option value="Other">
                            Other
                          </option>

                        </select>

                      </div>


                      {/* DATE & TIME */}

                      <div className="row">

                        <div className="col-md-6 mb-3">

                          <label className="form-label fw-semibold">
                            Preferred Service Date *
                          </label>

                          <input
                            type="date"
                            name="service_date"
                            className="form-control form-control-lg"
                            required
                          />

                        </div>


                        <div className="col-md-6 mb-3">

                          <label className="form-label fw-semibold">
                            Preferred Time *
                          </label>

                          <select
                            name="service_time"
                            className="form-select form-select-lg"
                            required
                          >

                            <option value="">
                              Select Time
                            </option>

                            <option value="9 AM - 12 PM">
                              9 AM - 12 PM
                            </option>

                            <option value="12 PM - 3 PM">
                              12 PM - 3 PM
                            </option>

                            <option value="3 PM - 6 PM">
                              3 PM - 6 PM
                            </option>

                            <option value="6 PM - 9 PM">
                              6 PM - 9 PM
                            </option>

                          </select>

                        </div>

                      </div>


                      {/* ADDRESS */}

                      <div className="mb-3">

                        <label className="form-label fw-semibold">
                          Complete Address *
                        </label>

                        <textarea
                          name="address"
                          className="form-control"
                          rows="3"
                          placeholder="Flat / House No., Building, Area, City, Pincode"
                          required
                        ></textarea>

                      </div>


                      {/* PROBLEM */}

                      <div className="mb-4">

                        <label className="form-label fw-semibold">
                          Describe AC Problem
                        </label>

                        <textarea
                          name="message"
                          className="form-control"
                          rows="4"
                          defaultValue={
                            aiProblem
                              ? `${aiProblem}${
                                  aiDescription
                                    ? " - " + aiDescription
                                    : ""
                                }`
                              : ""
                          }
                          placeholder="Example: AC cooling nahi kar raha, water leakage, noise issue..."
                        ></textarea>

                      </div>


                      {/* NOTE */}

                      <div className="alert alert-info">

                        <strong>
                          Note:
                        </strong>{" "}

                        Booking submit karne ke baad hamari
                        team confirmation ke liye aapse contact karegi.

                      </div>


                      {/* BUTTON */}

                      <div className="d-grid">

                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                          disabled={loading}
                        >

                          {loading
                            ? "Booking Submit Ho Rahi Hai..."
                            : "Confirm Service Booking"
                          }

                        </button>

                      </div>

                    </form>

                  </div>

                </div>

              ) : (

                /* SUCCESS */

                <div className="card border-0 shadow">

                  <div className="card-body p-4 p-md-5 text-center">

                    <div
                      className="mb-3"
                      style={{ fontSize: "60px" }}
                    >
                      ✅
                    </div>


                    <h2 className="fw-bold text-success">
                      Booking Submitted Successfully
                    </h2>


                    <p className="text-muted fs-5">
                      Your service booking has been received.
                    </p>


                    <div className="alert alert-light border text-start my-4">

                      <p>
                        <strong>Name:</strong>{" "}
                        {bookingData?.customer_name}
                      </p>


                      <p>
                        <strong>Mobile:</strong>{" "}
                        {bookingData?.customer_mobile}
                      </p>


                      <p>
                        <strong>Service:</strong>{" "}
                        {bookingData?.service}
                      </p>


                      <p>
                        <strong>AC Brand:</strong>{" "}
                        {bookingData?.ac_brand || "Not Provided"}
                      </p>


                      <p>
                        <strong>AC Model:</strong>{" "}
                        {bookingData?.ac_model || "Not Provided"}
                      </p>


                      <p>
                        <strong>AC Type:</strong>{" "}
                        {bookingData?.ac_type}
                      </p>


                      <p>
                        <strong>Date:</strong>{" "}
                        {bookingData?.service_date}
                      </p>


                      <p>
                        <strong>Time:</strong>{" "}
                        {bookingData?.service_time}
                      </p>


                      <p className="mb-0">
                        <strong>Problem:</strong>{" "}
                        {bookingData?.message || "Not Provided"}
                      </p>

                    </div>


                    <div className="d-grid d-md-flex justify-content-center gap-3">

                      <button
                        className="btn btn-success btn-lg"
                        onClick={sendWhatsApp}
                      >
                        Send Booking on WhatsApp
                      </button>


                      <button
                        className="btn btn-outline-primary btn-lg"
                        onClick={() =>
                          setBookingSuccess(false)
                        }
                      >
                        Book Another Service
                      </button>

                    </div>

                  </div>

                </div>

              )}

            </div>

          </div>

        </div>

      </section>

    </>
  );
};

export default BookService;