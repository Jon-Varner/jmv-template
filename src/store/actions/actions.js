import axios from 'axios';
import * as actionTypes from './types';

export const toggleMenu = () => ({
  type: actionTypes.TOGGLE_MENU
});

export const addUser = payload => ({
  type: actionTypes.ADD_USER,
  payload: payload
});

export const fetchPerson = () => {
  return dispatch => {
    dispatch(fetchPersonBegin());

    return axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        dispatch(
          fetchPersonSuccess({
            id: response.data.id,
            name: response.data.username
          })
        );
      })
      .catch(error => {
        dispatch(fetchPersonFailure(error.message));
      });
  };
};

const fetchPersonBegin = () => ({
  type: actionTypes.FETCH_PERSON_BEGIN
});

const fetchPersonSuccess = person => ({
  type: actionTypes.FETCH_PERSON_SUCCESS,
  payload: { ...person }
});

const fetchPersonFailure = error => ({
  type: actionTypes.FETCH_PERSON_FAILURE,
  payload: { error }
});
