import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { verification } from "../redux/actions";
import { useDispatch } from "react-redux";

export const VerifyPage = () => {
  const dispatch = useDispatch();
  const [otp, setOtp] = useState({ reg_code: "" });
  const onChange = (e) => {
    const { name, value } = e.target;
    setOtp((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(verification(otp));
  };
  return (
    <Modal size="md" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Email Verification
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Verify your Account</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingTextarea"
              placeholder="otp"
              name="reg_code"
              onChange={onChange}
              value={otp.reg_code}
              required
            />
            <label for="floatingTextarea">OTP</label>
          </div>
          <button type="submit" className="btn btn-danger">
            Verify
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};
