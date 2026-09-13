import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
      <div className="container">

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

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="mainNavbar"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active fw-semibold"
                    : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active fw-semibold"
                    : "nav-link"
                }
              >
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active fw-semibold"
                    : "nav-link"
                }
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active fw-semibold"
                    : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>
             <li className="nav-item">
  <NavLink
    to="/faq"
    className={({ isActive }) =>
      isActive
        ? "nav-link active fw-semibold"
        : "nav-link"
    }
  >
    FAQ
  </NavLink>
</li>
            <li className="nav-item mt-2 mt-lg-0 ms-lg-3">
              <Link
                to="/book-service"
                className="btn btn-warning fw-semibold px-3"
              >
                Book Service
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;