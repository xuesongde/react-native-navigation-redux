/**
 * @module Sagas/getComment
 * @desc getComment
 */
import {request} from '../../util/request';
import {all, delay, put, takeLatest, call} from 'redux-saga/effects';

import * as Actions from '../actions';

/**
 * Login
 */
export function* getComment(payload) {
  try {
    // yield delay(1000);
    console.log('....');
    const {data} = yield call(request, {
      type: 'get',
      url: 'example/query',
      data: {},
      option: {
        timeout: 0,
      },
    });
    yield call(request, {
      type: 'get',
      url: 'example/query',
      data: {},
      option: {
        timeout: 0,
      },
    });
    yield call(request, {
      type: 'get',
      url: 'example/query',
      data: {},
      option: {
        timeout: 0,
      },
    });
    yield call(request, {
      type: 'get',
      url: 'example/query',
      data: {},
      option: {
        timeout: 0,
      },
    });
    yield call(request, {
      type: 'get',
      url: 'example/query',
      data: {},
      option: {
        timeout: 0,
      },
    });
    console.log(data);
    // const comments = ["This is one", "This is two"];
    const personInfo = {
      name: 'xsd',
      gender: 'male',
    };
    yield put({
      type: Actions.GET_COMMENTS_SUCCESS,
      payload: {...{comments: data}, ...personInfo},
    });
  } catch (error) {
    console.log(error);
    /* istanbul ignore next */
    yield put({
      type: Actions.GET_GLOBAL_ERROR_MESSAGE,
      payload: error,
    });
  }
}

export default function* root() {
  yield all([takeLatest(Actions.GET_COMMENTS_REQUEST, getComment)]);
}
