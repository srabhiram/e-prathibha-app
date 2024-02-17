import axios from "axios";

const REGISTRATION = "https://e-prathibha.com/apis";
const server_key = process.env.REACT_APP_API_KEY; //server key stored as env variable

// Signin Api/ Registration api
export const registerPostApi = (formData) => {
  const url = `${REGISTRATION}/register`;
  return axios.post(url, formData, {
    headers: {
      Authorization: `Bearer ${server_key}`,
    },
  });
};

// VerifyEmail Api
export const emailVerifcation = (verifyCode) => {
  const url = `${REGISTRATION}/verifyEmail`;
  const { reg_code } = verifyCode;
  console.log("Verification Payload:", verifyCode);
  return axios.post(
    url,
    { reg_code },
    {
      headers: {
        Authorization: `Bearer ${server_key}`,
      },
    }
  );
};

// Login api
export const login = (loginData) => {
  const url = `${REGISTRATION}/login`;
  return axios.post(url, loginData, {
    headers: {
      Authorization: `Bearer ${server_key}`,
    },
  });
};

// examid api
export const examid = (signinData, loginData) => {
  const url = "https://e-prathibha.com/apis/test_free_exam";
  return axios.post(url, signinData, {
    headers: {
      server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
      id: loginData.id,
      tokenu: loginData.tokenu,
    },
  });
};

// exam list api
export const examlist = (bodyParams,value) => {
  const examid = value;
  const url = `${REGISTRATION}/start_exam?examId=${examid}`;
  return axios({
    method: "get",
    url: url,
    headers: {
      server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
      id: bodyParams.id,
      tokenu: bodyParams.tokenu,
    },
  });
};

// submit api
export const submit = (head, body) => {
  const url = `${REGISTRATION}/finishExam`;
  return axios.post(url, body, {
    headers: {
      server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
      id: head.id,
      tokenu: head.tokenu,
    },
  });
};
