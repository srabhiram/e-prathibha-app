import React, { Fragment } from "react";
import { Navibar } from "../Navbar";
import { Footer } from "./Footer";

export const FinishExam = () => {
  return (
    <Fragment>
      <Navibar />
      <div className="" style={{ height: "100%" }}>
        <h1 className="fs-3 text-center">Your Exam Submitted Successfully.</h1>
      </div>
      <div className="position-absolute bottom-0 w-100">
        <Footer />
      </div>
    </Fragment>
  );
};
