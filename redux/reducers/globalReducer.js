import {
  GET_GLOBAL_SPIN_STATE,
  GET_GLOBAL_ERROR_MESSAGE
} from "../actions/index";

const initialState = {
  globalState: { isSpining: false },
  errorMessage: {}
};

const globalReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(payload);
  switch (type) {
    //set spining state
    case GET_GLOBAL_SPIN_STATE:
      return {
        ...state,
        globalState: { ...payload }
      };
    case GET_GLOBAL_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: { ...payload }
      };
    default:
      return state;
  }
};

export default globalReducer;
