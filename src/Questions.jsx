import { useEffect, useState } from "react";

export default function Questions() {
  const [usedata, setData] = useState([]);
  useEffect(() => {
    fetch("https://e-prathibha.com/apis/start_exam?examId=24", {
      headers: {
        server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
        id: "4415",
        tokenu: "LaGIljaie57I5ofmzzrU",
      },
    })
      .then((response) => response.json())
      .then((result) => setData(result.data.exam))
      .catch((error) => console.error(error));
  }, []);
  //   fetch("https://e-prathibha.com/apis/start_exam?examId=24", {
  //     headers: {
  //       server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
  //       id: "4415",
  //       tokenu: "LaGIljaie57I5ofmzzrU",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((result) => console.log(result.data.exam.id.Question))
  //     .then((result) => setData(result))

  //     .catch((error) => console.error(error));
  console.log(usedata.Question);
  return (
    <div>
      <ol>
        {usedata.map((Exam, id, heading) => (
          <li key={id}>
            <h4>subject name: {Exam.Question.Subject.subject_name}</h4>
            {" "}
            {Exam.Question.question.above} <br />
            <br />
            {Exam.Question.option1}
            <br />
            {Exam.Question.option2}
            <br />
            {Exam.Question.option3}
            <br />
            {Exam.Question.option4}
          </li>
        ))}
      </ol>
    </div>
  );
}
