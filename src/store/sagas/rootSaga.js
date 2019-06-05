import { all } from 'redux-saga/effects';
import { watchFetchPersonSaga } from './fetchPersonSaga';

export default function* rootSaga() {
  yield all([watchFetchPersonSaga()]);
}
