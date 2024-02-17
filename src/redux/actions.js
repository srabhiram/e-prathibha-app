import {
  registerPostApi,
  emailVerifcation,
  login,
  examlist,
  submit,
  examid,
} from "../services/api";

// Signin action
export const registerData = (formData) => {
  return async (dispatch) => {
    try {
      console.log("Sending API request with data:", formData);

      const response = await registerPostApi(formData);

      console.log("API response:", response);

      if (response.status >= 200 && response.status < 300) {
        dispatch({
          type: "POST_DATA_SUCCESS",
          payload: response.data,
        });
      } else {
        throw new Error(`API request failed with status: ${response.status}`);
      }
    } catch (error) {
      dispatch({
        type: "POST_DATA_FAILURE",
        payload: error.message,
      });
    }
  };
};

// formdata action
export const formdata = (data) => {
  return {
    type: "FORM_DATA",
    payload: data,
  };
};

// otp action
export const verification = (verifyCode) => {
  return async (dispatch) => {
    try {
      console.log("Sending verifyCode:", verifyCode);
      const response = await emailVerifcation(verifyCode);
      console.log("OTP response:", response);
      alert(response.data.data.message);

      if (response.status >= 200 && response.status < 300) {
        dispatch({
          type: "POST_DATA_SUCCESS",
          payload: response.data,
        });
      } else {
        throw new Error(`API request failed with status: ${response.status}`);
      }
    } catch (error) {
      dispatch({
        type: "POST_DATA_FAILURE",
        payload: error.message,
      });
    }
  };
};

// login action
export const loginaction = (loginData) => {
  return async (dispatch) => {
    try {
      console.log("Sending API request with data:", loginData);

      const response = await login(loginData);

      console.log("API response:", response);
      if (response.data.status === 400) {
        alert(response.data.data);
      } else if (response.data.status === 200) {
        alert(response.data.data.Message);
      }
      console.log(response.data.data);
      dispatch({
        type: "POST_LOGIN_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "POST_LOGIN_FAILURE",
        payload: error.message,
      });
    }
  };
};

// examid action
export const examidAction = (signinData, loginData) => {
  return async (dispatch) => {
    try {
      console.log("Sending API request with data:", signinData);
      console.log("Sending API request with data:", loginData);

      const response = await examid(signinData, loginData);

      console.log("exami response:", response);

      dispatch({
        type: "EXAM_ID",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "EXAM_ID_FAILURE",
        payload: error.message,
      });
    }
  };
};

// exam list aaction
export const examListAction = (bodyParams, value, navigate) => {
  return async (dispatch) => {
    try {
      console.log("Sending API request with data:", bodyParams, value);

      const response = await examlist(bodyParams, value);
     
      console.log(response);

      console.log("API response:", response);

      dispatch({
        type: "EXAM_LIST",
        payload: response.data,
      });
     
    } catch (error) {
      dispatch({
        type: "EXAM_LIST_FAILURE",
        payload: error.message,
      });
    }
  };
};

// submit action
export const submitAction = (head, body) => {
  return async (dispatch) => {
    try {
      console.log("Sending API request with data:", head, body);

      const response = await submit(head, body);

      console.log("API submit:", response);
      alert(response.data.data);

      dispatch({
        type: "SUBMIT_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "SUBMIT_FAILURE",
        payload: error.message,
      });
    }
  };
};
