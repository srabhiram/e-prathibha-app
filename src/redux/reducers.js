//  Initialize state to store data
const initialState = {
  data: "",
  ExamListData: [],
  SubmitData: "",
  verificationStatus: "",
  userData: "",
  isLoggedIn: false,
  ExamiId: [],
  formData: {},
};

// Signin reducer
export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST_DATA_SUCCESS":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

// fromDAta reducer
export const fromDataReducer = (state = initialState, action)=>{
  switch (action.type) {
    case "FORM_DATA":
      return {
        ...state,
        formData: action.payload,
      };
      default:
        return state;
  }
}

// otp reducer
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "VERIFICATION_SUCCESS":
      return {
        ...state,
        verificationStatus: "success",
      };

    case "VERIFICATION_FAILURE":
      return {
        ...state,
        verificationStatus: "failure",
      };

    default:
      return state;
  }
};

// login reducer
export const loginreducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST_LOGIN_SUCCESS":
      return {
        ...state,
        isLoggedIn: true,
        userData: action.payload,
      };

    default:
      return state;
  }
};

// exam id reducer
export const examidReducer = (state = initialState, action) =>{
  switch (action.type) {
    case "EXAM_ID":
      return{
        ...state,
        ExamiId : action.payload,
      };
      default:
        return state;
    
}}

// examlist reducers
export const examListReducers = (state = initialState, action) => {
  switch (action.type) {
    case "EXAM_LIST":
      return {
        ...state,
        ExamListData: action.payload,
      };
    default:
      return state;
  }
};

// submit reducer
export const submitReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUBMIT_SUCCESS":
      return {
        ...state,
        SubmitData: action.payload,
      };
    default:
      return state;
  }
};
