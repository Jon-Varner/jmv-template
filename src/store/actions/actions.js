import axios from 'axios';
import * as actionTypes from './types';

export const sampleDispatch = payload => ({
  type: actionTypes.SAMPLE_DISPATCH,
  payload: payload
});

export const fetchUser = () => {
  return dispatch => {
    dispatch(fetchUserBegin());

    axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        dispatch(
          fetchUserSuccess({
            id: response.data.id,
            name: response.data.username
          })
        );
      })
      .catch(error => {
        dispatch(fetchUserFailure(error.message));
      });
  };
};

const fetchUserBegin = () => ({
  type: actionTypes.FETCH_USER_BEGIN
});

const fetchUserSuccess = user => ({
  type: actionTypes.FETCH_USER_SUCCESS,
  payload: { ...user }
});

const fetchUserFailure = error => ({
  type: actionTypes.FETCH_USER_FAILURE,
  payload: { error }
});
