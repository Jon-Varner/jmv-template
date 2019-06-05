import * as actionTypes from './types';

export const toggleMenu = () => ({
  type: actionTypes.TOGGLE_MENU
});

export const addUser = payload => ({
  type: actionTypes.ADD_USER,
  payload: payload
});

export const fetchPersonBegin = () => {
  return {
    type: actionTypes.FETCH_PERSON_BEGIN
  };
};

export const fetchPersonSuccess = person => ({
  type: actionTypes.FETCH_PERSON_SUCCESS,
  payload: { ...person }
});

export const fetchPersonFailure = message => ({
  type: actionTypes.FETCH_PERSON_FAILURE,
  payload: message
});
