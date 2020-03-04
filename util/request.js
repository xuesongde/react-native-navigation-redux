import axios from 'axios';
import _ from 'lodash';
import store from '../redux/store/index';
import router from '../config/router';
import * as Actions from '../redux/actions';

const header = {};
const instance = axios.create({
  baseURL: 'https://www.studyinghome.com/mock/5e538ac52cb0d073b8139f87/',
  timeout: 5000,
  headers: header,
  validateStatus: function(status) {
    return status >= 200 && status <= 500; // default
  },
});
const showSpin = () => {
  console.log('showSpin...');
  store.dispatch({
    type: Actions.GET_GLOBAL_SPIN_STATE,
    payload: {isSpining: true},
  });
};
const hideSpin = () => {
  console.log('hideSpin...');
  store.dispatch({
    type: Actions.GET_GLOBAL_SPIN_STATE,
    payload: {isSpining: false},
  });
};
let timeId;
const debounce = function(f, delay) {
  return function() {
    clearTimeout(timeId);
    timeId = setTimeout(() => {
      f.apply(this, arguments);
    }, delay);
  };
};
const deShow = debounce(showSpin, 1000);
const deHide = debounce(hideSpin, 1000);
export const request = async function({type, url, data, option = {}}) {
  deShow();
  let axiosOption = {
    method: type,
    url: url,
    data: data,
  };
  if (!_.isEmpty(option)) {
    axiosOption = _.merge(axiosOption, option);
  }
  try {
    const response = await instance(axiosOption);
    const {status, statusText, data} = response;
    if (status !== 200) {
      return Promise.reject({status, statusText});
    }
    console.log(response);
    return Promise.resolve(data);
  } catch (error) {
    console.error(error);
  } finally {
    deHide();
  }
};
