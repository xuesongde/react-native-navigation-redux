import * as ACTIONS from '../actions/index';

const initialState = {
  comments: [],
  personInfo: {},
};

const commentsReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    //GET_COMMENTS
    case ACTIONS.GET_COMMENTS_SUCCESS:
      const { comments, personInfo } = payload;
      return {
        ...state,
        comments: [...comments],
        personInfo: { ...personInfo },
      };
    case ACTIONS.GET_COMMENTS_FAILURE:
      return { ...state, error: payload.error };
    default:
      return state;
  }
};

export default commentsReducer;