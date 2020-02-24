export default {
  getSpinStatus: state => {
    return state.globalReducer.globalState.isSpining;
  },
  getErrorMessage: state => {
    return state.globalReducer.errorMessage;
  }
};
