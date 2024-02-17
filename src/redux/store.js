import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import {
  dataReducer,
  examListReducers,
  loginreducer,
  examidReducer,
  rootReducer,
  submitReducer,
  fromDataReducer,
} from "./reducers";
const combinedReducers = combineReducers({
  data: dataReducer,
  formdata: fromDataReducer,
  login: loginreducer,
  root: rootReducer,
  ExamID: examidReducer,
  Examlist: examListReducers,
  Submit: submitReducer,
});

const store = createStore(
  combinedReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
