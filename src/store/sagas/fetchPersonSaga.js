import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as actionTypes from '../actions/types';

import { fetchPersonSuccess, fetchPersonFailure } from '../actions/actions';

async function fetchPerson() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  return {
    id: response.data.id,
    name: response.data.name
  };
}

export function* fetchPersonSaga(apiCall) {
  try {
    const data = yield call(apiCall);
    yield put(fetchPersonSuccess(data));
  } catch (error) {
    yield put(fetchPersonFailure(error.message));
  }
}

export function* watchFetchPersonSaga() {
  yield takeLatest(
    actionTypes.FETCH_PERSON_BEGIN,
    fetchPersonSaga,
    fetchPerson
  );
}
