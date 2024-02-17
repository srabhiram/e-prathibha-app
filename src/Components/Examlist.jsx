import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitAction } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Navibar } from "../Navbar";

export const ExamList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Stroing data from api using useSelector
  const userDataa = useSelector((state) => state.login.userData.data);
  const id = userDataa.Id;
  const tokenu = userDataa.Token;
  // dispatching to examlist action file on page opening using useEffect hook

  // storing examlist data using useSelector
  const Data =
    useSelector((state) => state.Examlist.ExamListData.data?.exam) || [];
  const examListData = Data.slice(0, 20) || [];

  const [selectedOptions, setSelectedOptions] = useState({});
  const handleOptionChange = (quesNo, value) => {
    // Update the selected options state
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [quesNo]: value,
    }));
  };

  // on Submit dispatching exam data to submit api

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if all questions have selected options
    const areAllQuestionsAnswered = examListData.every(
      (ques) => selectedOptions[ques.ExamStat.ques_no] !== undefined
    );

    if (!areAllQuestionsAnswered) {
      // Show alert if not all questions are answered
      alert("Please answer all questions before submitting.");
      return;
    }

    // storinging qno and examid to dispatch them to submit api
    const qno = examListData.map((ques) => ques.ExamStat.ques_no).slice(0, 20);
    const examId = examListData
      .map((examid) => examid.ExamStat.exam_id)
      .slice(0, 20);
    const body = { examId, qno };
    const head = { id, tokenu };

    try {
      await dispatch(submitAction(head, body));
    } catch (error) {
      console.error("login failed", error.message);
    }
    navigate("../FinishExam");
  };

  return (
    <Fragment>
      <Navibar />
      {examListData.length > 0 ? (
        <div className="container">
          <div className="navbarr">
            <ul>
              <li>Student id: {examListData[0].ExamStat.student_id}</li>
            </ul>
          </div>
          <div className="text-center">
            <h1>Practice Exam</h1>
          </div>
          <div className="container">
            <div>
              {examListData.map((data) => (
                <>
                  <div className=" mt-3 justify-content-evenly">
                    <div className="fs-5" key={data.ExamStat.ques_no}>
                      <p>
                        {data.ExamStat.ques_no}. {data.Question.question.above}
                      </p>
                    </div>
                    <div key={data.Question.Subject.subject_id}>
                      <p className="fs-6">
                        Subject: {data.Question.Subject.subject_name}
                      </p>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name={`subject_${data.ExamStat.ques_no}_options`}
                        id={data.Question.option_id}
                        value={data.Question.option1}
                        onChange={() =>
                          handleOptionChange(
                            data.ExamStat.ques_no,
                            data.Question.option1
                          )
                        }
                        checked={
                          selectedOptions[data.ExamStat.ques_no] ===
                          data.Question.option1
                        }
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        {data.Question.option1}
                      </label>
                    </div>
                    <br />
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name={`subject_${data.ExamStat.ques_no}_options`}
                        id={data.Question.option_id}
                        value={data.Question.option2}
                        onChange={() =>
                          handleOptionChange(
                            data.ExamStat.ques_no,
                            data.Question.option2
                          )
                        }
                        checked={
                          selectedOptions[data.ExamStat.ques_no] ===
                          data.Question.option2
                        }
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        {data.Question.option2}
                      </label>
                    </div>
                    <br />
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name={`subject_${data.ExamStat.ques_no}_options`}
                        id={data.Question.option_id}
                        value={data.Question.option3}
                        onChange={() =>
                          handleOptionChange(
                            data.ExamStat.ques_no,
                            data.Question.option3
                          )
                        }
                        checked={
                          selectedOptions[data.ExamStat.ques_no] ===
                          data.Question.option3
                        }
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        {data.Question.option3}
                      </label>
                    </div>
                    <br />
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name={`subject_${data.ExamStat.ques_no}_options`}
                        id={data.Question.option_id}
                        value={data.Question.option4}
                        onChange={() =>
                          handleOptionChange(
                            data.ExamStat.ques_no,
                            data.Question.option4
                          )
                        }
                        checked={
                          selectedOptions[data.ExamStat.ques_no] ===
                          data.Question.option4
                        }
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        {data.Question.option4}
                      </label>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <Button onClick={handleSubmit}>Submit Exam</Button>
        </div>
      ) : (
        <div className="text-center">Data not Found. Please try Again</div>
      )}
    </Fragment>
  );
};
