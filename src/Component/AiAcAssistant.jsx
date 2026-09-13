import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AiAcAssistant = () => {

    useEffect(() => {
  document.title =
    "AC Problem Assistant | Check Your AC Issue";

  let metaDescription = document.querySelector(
    'meta[name="description"]'
  );

  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    document.head.appendChild(metaDescription);
  }

  metaDescription.content =
    "Check possible AC problems by selecting your AC brand, model and issue. Get quick guidance and service recommendations.";
}, []);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    acType: "",
    capacity: "",
    purchaseDate: "",
    lastServiceDate: "",
    problem: "",
    errorCode: "",
    description: "",
  });

  const [result, setResult] = useState(null);

  const brands = [
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
    "Other",
  ];

  const problems = [
    "AC Not Cooling",
    "Low Cooling",
    "Water Leakage",
    "AC Not Starting",
    "Unusual Noise",
    "Bad Smell",
    "Ice Formation",
    "High Electricity Bill",
    "Remote Not Working",
    "Outdoor Unit Not Working",
    "Error Code Showing",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const calculateAge = () => {
    if (!formData.purchaseDate) return "Not available";

    const purchase = new Date(formData.purchaseDate);
    const today = new Date();

    let years = today.getFullYear() - purchase.getFullYear();
    let months = today.getMonth() - purchase.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    return `${years} Years ${months} Months`;
  };

  const getAnalysis = () => {
    let possibleCauses = [];
    let safeChecks = [];
    let priority = "Medium";
    let recommendation = "";

    switch (formData.problem) {
      case "AC Not Cooling":
      case "Low Cooling":
        possibleCauses = [
          "Air filter may be dirty",
          "Indoor or outdoor coil may need cleaning",
          "Outdoor unit airflow may be blocked",
          "Refrigerant level may need professional inspection",
        ];

        safeChecks = [
          "Check and clean the air filter",
          "Set AC temperature between 18°C and 24°C",
          "Check whether outdoor unit has proper airflow",
          "Close doors and windows while AC is running",
        ];

        priority = "Medium";

        recommendation =
          "If cooling does not improve after basic checks, book a technician inspection.";

        break;

      case "Water Leakage":
        possibleCauses = [
          "Drain pipe may be blocked",
          "Indoor unit may need cleaning",
          "Drain tray may have an issue",
        ];

        safeChecks = [
          "Switch off the AC if water is leaking heavily",
          "Check if the drain pipe is visibly blocked",
        ];

        priority = "High";

        recommendation =
          "Professional cleaning and drain inspection is recommended.";

        break;

      case "AC Not Starting":
        possibleCauses = [
          "Power supply problem",
          "Remote or battery issue",
          "Electrical component fault",
        ];

        safeChecks = [
          "Check main power supply",
          "Replace remote batteries",
          "Check whether MCB has tripped",
        ];

        priority = "High";

        recommendation =
          "Do not open electrical components yourself. Technician inspection is recommended.";

        break;

      case "Unusual Noise":
        possibleCauses = [
          "Loose part",
          "Fan issue",
          "Indoor or outdoor unit vibration",
        ];

        safeChecks = [
          "Check if any object is touching the outdoor unit",
          "Turn off the AC if noise becomes very loud",
        ];

        priority = "Medium";

        recommendation =
          "Technician inspection is recommended if the noise continues.";

        break;

      case "Error Code Showing":
        possibleCauses = [
          "Sensor issue",
          "Communication fault",
          "Electrical or system error",
        ];

        safeChecks = [
          "Note the exact error code",
          "Switch AC off for a few minutes and restart once",
        ];

        priority = "High";

        recommendation =
          "Error codes vary by brand and model. Professional diagnosis is recommended.";

        break;

      default:
        possibleCauses = [
          "The issue needs further inspection",
          "Maintenance or component inspection may be required",
        ];

        safeChecks = [
          "Turn the AC off if there is burning smell or electrical noise",
          "Check filter and power supply",
        ];

        priority = "Medium";

        recommendation =
          "A technician can inspect the AC and identify the exact issue.";
    }

    setResult({
      age: calculateAge(),
      possibleCauses,
      safeChecks,
      priority,
      recommendation,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getAnalysis();
  };

  const bookTechnician = () => {
    const params = new URLSearchParams({
      service: "AC Repair",
      brand: formData.brand,
      model: formData.model,
      acType: formData.acType,
      problem: formData.problem,
      description: formData.description,
    });

    navigate(`/book-service?${params.toString()}`);
  };

  return (
    <>
      <section className="bg-dark text-white py-5">
        <div className="container text-center">
          <span className="badge bg-warning text-dark mb-3">
            AI AC Assistant
          </span>

          <h1 className="fw-bold">
            Check Your AC
          </h1>

          <p className="lead">
            Enter your AC details and get quick maintenance and problem
            guidance.
          </p>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">

            <div className="col-lg-7">

              <div className="card border-0 shadow-sm">
                <div className="card-body p-4 p-md-5">

                  <h3 className="fw-bold mb-4">
                    AC Details
                  </h3>

                  <form onSubmit={handleSubmit}>

                    <div className="row">

                      <div className="col-md-6 mb-3">
                        <label className="form-label">
                          AC Brand *
                        </label>

                        <select
                          name="brand"
                          className="form-select"
                          value={formData.brand}
                          onChange={handleChange}
                          required
                        >
                          <option value="">
                            Select Brand
                          </option>

                          {brands.map((brand) => (
                            <option key={brand} value={brand}>
                              {brand}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-md-6 mb-3">
                        <label className="form-label">
                          Model / Version
                        </label>

                        <input
                          type="text"
                          name="model"
                          className="form-control"
                          placeholder="Example: FTKM50U"
                          value={formData.model}
                          onChange={handleChange}
                        />
                      </div>

                    </div>

                    <div className="row">

                      <div className="col-md-6 mb-3">
                        <label className="form-label">
                          AC Type *
                        </label>

                        <select
                          name="acType"
                          className="form-select"
                          value={formData.acType}
                          onChange={handleChange}
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
                        </select>
                      </div>

                      <div className="col-md-6 mb-3">
                        <label className="form-label">
                          Capacity
                        </label>

                        <select
                          name="capacity"
                          className="form-select"
                          value={formData.capacity}
                          onChange={handleChange}
                        >
                          <option value="">
                            Select Capacity
                          </option>

                          <option value="1 Ton">
                            1 Ton
                          </option>

                          <option value="1.5 Ton">
                            1.5 Ton
                          </option>

                          <option value="2 Ton">
                            2 Ton
                          </option>

                          <option value="2.5 Ton">
                            2.5 Ton
                          </option>

                          <option value="Other">
                            Other
                          </option>
                        </select>
                      </div>

                    </div>

                    <div className="row">

                      <div className="col-md-6 mb-3">
                        <label className="form-label">
                          Purchase Date *
                        </label>

                        <input
                          type="date"
                          name="purchaseDate"
                          className="form-control"
                          value={formData.purchaseDate}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label className="form-label">
                          Last Service Date
                        </label>

                        <input
                          type="date"
                          name="lastServiceDate"
                          className="form-control"
                          value={formData.lastServiceDate}
                          onChange={handleChange}
                        />
                      </div>

                    </div>

                    <div className="mb-3">

                      <label className="form-label">
                        Current Problem *
                      </label>

                      <select
                        name="problem"
                        className="form-select"
                        value={formData.problem}
                        onChange={handleChange}
                        required
                      >
                        <option value="">
                          Select Problem
                        </option>

                        {problems.map((problem) => (
                          <option
                            key={problem}
                            value={problem}
                          >
                            {problem}
                          </option>
                        ))}
                      </select>

                    </div>

                    <div className="mb-3">

                      <label className="form-label">
                        Error Code
                      </label>

                      <input
                        type="text"
                        name="errorCode"
                        className="form-control"
                        placeholder="Example: E6, CH38"
                        value={formData.errorCode}
                        onChange={handleChange}
                      />

                    </div>

                    <div className="mb-4">

                      <label className="form-label">
                        Describe Problem
                      </label>

                      <textarea
                        name="description"
                        className="form-control"
                        rows="4"
                        placeholder="Tell us what is happening with your AC..."
                        value={formData.description}
                        onChange={handleChange}
                      ></textarea>

                    </div>

                    <div className="d-grid">

                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                      >
                        Analyze My AC
                      </button>

                    </div>

                  </form>

                </div>
              </div>

            </div>

            <div className="col-lg-5">

              {!result ? (

                <div className="card border-0 shadow-sm h-100">

                  <div className="card-body p-4">

                    <h4 className="fw-bold">
                      What You Will Get
                    </h4>

                    <hr />

                    <p>
                      ✓ AC age calculation
                    </p>

                    <p>
                      ✓ Possible problem causes
                    </p>

                    <p>
                      ✓ Basic safe checks
                    </p>

                    <p>
                      ✓ Service priority
                    </p>

                    <p>
                      ✓ Technician recommendation
                    </p>

                    <div className="alert alert-warning mt-4">

                      This tool provides general guidance only.
                      Electrical and refrigerant repairs should be
                      handled by a trained technician.

                    </div>

                  </div>
                </div>

              ) : (

                <div className="card border-0 shadow">

                  <div className="card-body p-4">

                    <span className="badge bg-success mb-3">
                      AC Health Report
                    </span>

                    <h3 className="fw-bold">
                      {formData.brand} {formData.model}
                    </h3>

                    <p className="text-muted">
                      {formData.acType} {formData.capacity}
                    </p>

                    <hr />

                    <p>
                      <strong>AC Age:</strong>
                      <br />
                      {result.age}
                    </p>

                    <p>
                      <strong>Problem:</strong>
                      <br />
                      {formData.problem}
                    </p>

                    {formData.errorCode && (
                      <p>
                        <strong>Error Code:</strong>
                        <br />
                        {formData.errorCode}
                      </p>
                    )}

                    <hr />

                    <h5>
                      Possible Causes
                    </h5>

                    <ul>
                      {result.possibleCauses.map(
                        (cause, index) => (
                          <li key={index}>
                            {cause}
                          </li>
                        )
                      )}
                    </ul>

                    <h5 className="mt-4">
                      Safe Checks
                    </h5>

                    <ul>
                      {result.safeChecks.map(
                        (check, index) => (
                          <li key={index}>
                            {check}
                          </li>
                        )
                      )}
                    </ul>

                    <div
                      className={
                        result.priority === "High"
                          ? "alert alert-danger"
                          : "alert alert-warning"
                      }
                    >
                      <strong>
                        Service Priority:
                      </strong>{" "}
                      {result.priority}
                    </div>

                    <p>
                      <strong>Recommendation:</strong>
                      <br />
                      {result.recommendation}
                    </p>

                    <div className="d-grid mt-4">

                      <button
                        className="btn btn-success btn-lg"
                        onClick={bookTechnician}
                      >
                        Book Technician
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

export default AiAcAssistant;