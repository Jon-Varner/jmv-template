import reducer from './userReducer';
import * as types from '../actions/types';

it('returns initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    user: {
      id: 0,
      name: 'Initial User Name'
    },
    loading: false,
    error: null
  });
});

it('should handle FETCH_USER_BEGIN', () => {
  const beforeState = {
    user: {
      id: 0,
      name: 'Initial User Name'
    },
    loading: false,
    error: null
  };

  const action = {
    type: types.FETCH_USER_BEGIN
  };

  const afterState = {
    user: {
      id: 0,
      name: 'Initial User Name'
    },
    loading: true,
    error: null
  };

  expect(reducer(beforeState, action)).toEqual(afterState);
});

it('should handle FETCH_USER_SUCCESS', () => {
  const beforeState = {
    user: {
      id: 0,
      name: 'Initial User Name'
    },
    loading: true,
    error: null
  };

  const action = {
    type: types.FETCH_USER_SUCCESS,
    payload: {
      id: 1,
      name: 'Brett'
    }
  };

  const afterState = {
    user: {
      id: 1,
      name: 'Brett'
    },
    loading: false,
    error: null
  };

  expect(reducer(beforeState, action)).toEqual(afterState);
});

it('should handle FETCH_USER_FAILURE', () => {
  const beforeState = {
    user: {
      id: 0,
      name: 'Initial User Name'
    },
    loading: true,
    error: null
  };

  const action = {
    type: types.FETCH_USER_FAILURE,
    payload: {
      error: 'This is the error message'
    }
  };

  const afterState = {
    user: {
      id: 0,
      name: 'Initial User Name'
    },
    loading: false,
    error: 'This is the error message'
  };

  expect(reducer(beforeState, action)).toEqual(afterState);
});
