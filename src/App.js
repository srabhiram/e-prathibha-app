import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { AboutUs } from "./Components/Aboutus";
import Login from "./Components/Login";
import SignUp from "./Components/Signup";
import { ExamList } from "./Components/Examlist";
import { FinishExam } from "./Components/FinishExam";
import { ExamId } from "./Components/ExamId";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/aboutus" Component={AboutUs} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/examid" Component={ExamId} />
        <Route path="/Examlist" Component={ExamList} />
        <Route path="/FinishExam" Component={FinishExam} />
      </Routes>
    </>
  );
}

export default App;
