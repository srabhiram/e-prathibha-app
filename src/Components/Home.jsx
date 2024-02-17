import React from "react";
import "./home.css";
import { Navibar } from "../Navbar";
import { Footer } from "./Footer";
export const Home = () => {
  return (
    <>
      <Navibar />
      <div className="container">
        <div className="row mt-2">
          <div className="col-md-6">
            <img
              src="https://i.pinimg.com/564x/7c/cf/b4/7ccfb45a2e45b443bbde69c917a8a12e.jpg"
              alt="Notebook"
              className="img-fluid"
            />
          </div>
          <div className="col-lg col-md-6 p-5 m-4">
            <h2>UPSC PREP.</h2>
            <h4>
              Start With Fundamentals. Attempt, Practice, Review and improve
            </h4>
            <h4>Civil Services/CDS/CISF/CAPF/NDA</h4>
          </div>
        </div>

        <div className="keyfeatures mt-2" style={{ textAlign: "center" }}>
          <h1>KEY FEATURES</h1>
          <img
            src="https://www.e-prathibha.com/img/Key%20features_updated1.webp"
            className="img-fluid"
            alt="key-features"
          />
        </div>

        <div className="mt-3 key-fetures_text">
          <p>
            A. Civil Services or for that matter any competitive exam tests the
            fundamentals more than anything else.
          </p>
          <p>
            B. NCERT develops subject understanding in a systematic way. On the
            way many facts and data are presented.
          </p>
          <p>
            C. UPSC in its notification stresses a general understanding of the
            subjects. Fundamentals/Basics are important.
          </p>
          <p>
            D. The shifting emphasis on the depth of basics/subjects can be
            understood from past question papers.
          </p>
          <p>
            E. Learning through questions has been Indian way since vedic times
            as seen in Prashnopanishad. It reflects an interactive style where
            the student has worked out the question for himself before he is
            provided an answer.
          </p>
          <p>
            F. We have compiled an exhaustive question bank of all the subjects
            from 6th – 10th class NCERT. Almost 95% is covered.
          </p>
          <p>
            G. We have also Compiled 26 Years old question papers of Civil
            services Prelims exam and 6 Years old objective question papers of
            Engineering services exam, CDS, NDA, CAPF, CISF, Geo-Scientist (pre)
            and SO ( Departmental).
          </p>
          <p>
            H. Together these 16 thousand odd questions shall provide a solid
            understanding of basics.
          </p>
          <p>
            {" "}
            I. The interactive style is captured in the software, with the scope
            to book mark questions for later review and deeper contemplation.
            The time spent on each question is captured, that will give inputs
            to modify the preparation strategy.
          </p>
          <p>
            {" "}
            J. Focus: With book marking of questions, the time required for
            revision can be compressed to manageable levels. Time saved is time
            earned.
          </p>
        </div>
        <div className="footer"></div>
      </div>
      <Footer />
    </>
  );
};
