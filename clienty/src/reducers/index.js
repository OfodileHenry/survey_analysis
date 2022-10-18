import { combineReducers } from "redux";

import authReducer from "./authReducer";

import surveysReducer from "./surveysReducer";

export default combineReducers({
  auth: authReducer,
  surveys: surveysReducer,
});

// import { reducer as Form } from "react-final-form";
//
// import authReducer from "./authReducer";
//
// export default combineReducers({
//   auth: authReducer,
//   form: Form,
// });
