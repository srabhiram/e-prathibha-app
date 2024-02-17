import React, { Fragment } from "react";
import { NavLink } from "react-bootstrap";

export const Footer = () => {
  return (
    <Fragment>
      <div className="row footer d-flex justify-content-evenly flex-row bg-body-tertiary align-items-between">
        <div className="col-lg col-md-6 d-flex justify-content-around pt-3 m-1">
          <NavLink>
            <p className="nav-link fw-normal">About</p>
          </NavLink>
          <NavLink>
            <p className="nav-link fw-normal">Privacy Policy</p>
          </NavLink>
          <NavLink>
            <p className="nav-link fw-normal">Terms & Conditions</p>
          </NavLink>
          <NavLink>
            <p className="nav-link fw-normal">Disclaimer</p>
          </NavLink>
          <NavLink>
            <p className="nav-link fw-normal">Feedback</p>
          </NavLink>
          <NavLink>
            <p className="nav-link fw-normal">Report an error</p>
          </NavLink>
        </div>
        <div className="col-lg col-md-6 icons">
          {/* Include your icon components or social media icons here */}
        </div>
      </div>
    </Fragment>
  );
};
