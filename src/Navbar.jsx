import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./homepage.css";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

export const Navibar = () => {
  return (
    <Fragment>
      <div className="content">
        <Navbar expand="lg" className="navbar">
          <Container>
            <NavLink to={"/"} className="nav-link text-center">
              <h4 className="logo">E-Prathibha</h4>
            </NavLink>
            <Navbar.Toggle
              className="nav-link"
              aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse className="nav-link" id="basic-navbar-nav">
              <Nav className="ms-auto">
                <NavLink to={"/"} className="nav-link">
                  <p>Home</p>
                </NavLink>

                <NavDropdown
                  title="Register/Signin"
                  id="basic-nav-dropdown"
                  style={{ fontWeight: "bolder" }}
                >
                  <NavLink to={"/signup"} className="nav-link">
                    <NavDropdown.Item className="" href="#signup">
                      New user? Signup
                    </NavDropdown.Item>
                  </NavLink>
                  <NavLink to={"/login"} className="nav-link">
                    <NavDropdown.Item className="" href="#login">
                      Login
                    </NavDropdown.Item>
                  </NavLink>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Report an issue
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </Fragment>
  );
};
