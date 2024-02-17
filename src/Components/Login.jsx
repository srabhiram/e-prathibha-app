import React, { Fragment, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginaction } from "../redux/actions";
import { Navibar } from "../Navbar";

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // using useState hook to store the login formdata
  const [loginData, setFormData] = useState({
    email: "",
    password: "",
  });
  // updating the values uisng spread operator
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // on clicking login button this page api call to fetch the questions
  const handleSubmit = async (event) => {
    event.preventDefault();

    // dispatching the logindata to login action to generate token and student id
    try {
      await dispatch(loginaction(loginData));
    } catch (error) {
      console.error("login failed", error.message);
    }

    // navigating to exam list component
    navigate("../examid");

    // updating the formdata after clicking login
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <Fragment>
      <Navibar />
      <div className="container w-75">
        <div className="row shadow rounded mt-3">
          <div className="col-lg-6 col-md-6 d-none d-md-block">
            <img
              src="https://i.pinimg.com/564x/20/21/35/20213585795b1d232af28c9106038247.jpg"
              alt=""
              className="img-fluid p-5"
            />
          </div>
          <div className=" col-lg-6 col-md-6 col-sm-12 d-flex  justify-content-start align-items-center">
            {/* Forms */}

            <form className="w-75 p-2" onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your E-mail id"
                  id="floatingInput"
                  name="email"
                  value={loginData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="floatingInput">Enter your e-mail id</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter your Password"
                  value={loginData.password}
                  onChange={handleChange}
                  required
                />
                <label className="form-label">Password</label>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label">Remember me</label>
              </div>
              <div className="d-flex justify-content-between">
                <button type="submit" className="btn mb-3 btn-danger">
                  Login
                </button>
                <NavLink to={"../signup"} className="mb-3 p-2 nav-link2">
                  New User? Signup Here
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
