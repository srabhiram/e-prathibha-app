import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { formdata, registerData, verification } from "../redux/actions";
import { Modal, Button } from "react-bootstrap";
import { Navibar } from "../Navbar";

const SignUp = () => {
  const dispatch = useDispatch();

  // using usestate for modal
  const [showModal, setShowModal] = useState(false);

  // using usestate to store the form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  // using usestate for otp
  const [verifyCode, setOtp] = useState({ reg_code: "" });

  // Updating current state values in the place of prev. state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // on clicking sign up button
  const handleSubmit = (event) => {
    event.preventDefault();

    // Password and confirm password checking
    if (formData.password !== formData.confirmPassword) {
      alert("Password and confirm password must match");
      return;
    }

    // Password length check
    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }
    // dispatching to registerdata action
    dispatch(registerData(formData));

    // dispatching to formdata action
    dispatch(formdata(formData));

    // To show otp modal to enter the otp
    setShowModal(true);

    // After clicking submit enterd details should gone
    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleModalClose = () => {
    // To close the otp modal
    setShowModal(false);
  };
  const handleOtpChange = (e) => {
    // storing the otp in usestate
    setOtp({ reg_code: e.target.value });
  };

  const handleVerifyOtp = () => {
    // dispatching otp to verification action
    dispatch(verification(verifyCode));

    // after cicking verify button modal will be closed
    handleModalClose();
  };

  return (
    <Fragment>
      <Navibar />
      <div className="container mt-5 w-75">
        <div className="row shadow rounded">
          <div className="col-md-6 d-none d-md-block">
            <img
              src="https://i.pinimg.com/564x/d2/1e/77/d21e7730c4af057b65f5952c3b53b3b3.jpg"
              alt="signupLogo"
              className="img-fluid mt-4 rounded p-4"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
            <form className="w-75 p-2" onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control mt-3"
                  id="floatingTextarea"
                  placeholder="Enter Your Name"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  required
                />
                <label htmlFor="floatingTextarea">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Enter Your E-mail ID"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  required
                />
                <label htmlFor="floatingInput">Enter your email id</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="tel"
                  className="form-control"
                  id="floatingInputphone"
                  placeholder="Enter Your Mobile phone"
                  name="phone"
                  onChange={handleChange}
                  value={formData.phone}
                  required
                />
                <label htmlFor="floatingInputphone">Enter Mobile phone</label>
              </div>
              <div className=" form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                  required
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className=" form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingConfirmPassword"
                  placeholder="ConfirmPassword"
                  name="confirmPassword"
                  onChange={handleChange}
                  value={formData.confirmPassword}
                  required
                />
                <label htmlFor="floatingConfirmPassword">
                  Confirm Password
                </label>
              </div>

              <div className="d-flex justify-content-between">
                <button type="submit" className="btn  mb-3 btn-danger">
                  Signup
                </button>

                <NavLink to={"../login"} className="mb-3 p-2 nav-link2">
                  Already Registerd? Login
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* modal */}

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter OTP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Add OTP input field here */}
          <input
            type="text"
            className="form-control"
            placeholder="Enter OTP"
            onChange={handleOtpChange}
            value={verifyCode.reg_code}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleVerifyOtp}>
            Verify OTP
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default SignUp;
