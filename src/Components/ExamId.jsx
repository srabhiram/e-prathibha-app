import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { examListAction, examidAction } from "../redux/actions";
import { Navibar } from "../Navbar";
import { Accordion } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const ExamId = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formdata = useSelector((state) => state.formdata.formData);
  const userDataa = useSelector((state) => state.login.userData.data);
  const id = userDataa.Id;
  const tokenu = userDataa.Token;
  const list = useSelector((state) => state.ExamID.ExamiId.data?.exams);

  useEffect(() => {
    const signinData = formdata;
    const loginData = { id, tokenu };

    dispatch(examidAction(signinData, loginData));
  }, [dispatch, formdata, id, tokenu]);

  const list1 =
    list && list.length > 0
      ? list[0]["Old question papers UPSC Civils (Pre)"]
      : [];
  const list2 =
    list && list.length > 1 ? list[1]["Limited UPSC other than Civils"] : [];
  const list3 = list && list.length > 2 ? list[2]["Limited NCERT"] : [];

  // State to store the selected value
  const [selectedValue, setSelectedValue] = useState("");

  //  to handle button click and dispatch the button value to action file
  const handleButtonClick = async (value) => {
    // Set the selected value in the state
    setSelectedValue(value);
    const bodyParams = { id, tokenu };
    try {
      // Dispatch the action to store the selected value in Redux
      await dispatch(examListAction(bodyParams, value));
      navigate("../Examlist");
    } catch (error) {
      
      console.error("Error:", error);
    }
  };
  return (
    <Fragment>
      <Navibar />
      <div className="container">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Old question papers UPSC Civils (Pre)
            </Accordion.Header>
            <Accordion.Body>
              <div class="container mt-3">
                <ul class="list-group">
                  {list1.map((list) => (
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      {list.Exam.name}
                      <button
                        class="btn btn-primary btn-sm"
                        onClick={() => {
                          handleButtonClick(list.Exam.id);
                        }}
                      >
                        CLick here
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Limited UPSC other than Civils</Accordion.Header>
            <Accordion.Body>
              <div class="container mt-3">
                <ul class="list-group">
                  {list2.map((list) => (
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      {list.Exam.name}
                      <button
                        class="btn btn-primary btn-sm"
                        onClick={() => handleButtonClick(list.Exam.id)}
                      >
                        CLick here
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Limited NCERT</Accordion.Header>
            <Accordion.Body>
              <div class="container mt-3">
                <ul class="list-group">
                  {list3.map((list) => (
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      {list.Exam.name}
                      <button
                        class="btn btn-primary btn-sm"
                        onClick={() => handleButtonClick(list.Exam.id)}
                      >
                        CLick here
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>{" "}
      </div>
    </Fragment>
  );
};
