import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container">
        <Link to="/home" className="navbar-brand">
          <img src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
            <li>
              <NavLink
                style={({ isActive }) => ({ color: isActive && "red" })}
                to="/about"
                className="nav-link"
                aria-current="page"
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                style={({ isActive }) => ({ color: isActive && "red" })}
                to="/detail"
                className="nav-link"
                aria-current="page"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({ color: isActive && "red" })}
                to="/"
                className="nav-link"
                aria-current="page"
                onClick={() => {
                  localStorage.clear();
                  window.reload();
                }}
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
