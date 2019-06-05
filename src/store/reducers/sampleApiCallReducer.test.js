import reducer from './sampleApiCallReducer';
import * as types from '../actions/types';

const initialState = {
  person: {
    id: 0,
    name: 'Initial Person Name'
  },
  loading: false,
  error: null
};

describe('sample API call reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual({
      person: {
        id: 0,
        name: 'Initial Person Name'
      },
      loading: false,
      error: null
    });
  });

  it('updates loading state when fetch person begins', () => {
    const fetchPersonBegin = {
      type: types.FETCH_PERSON_BEGIN
    };

    expect(reducer(initialState, fetchPersonBegin)).toEqual({
      person: {
        id: 0,
        name: 'Initial Person Name'
      },
      loading: true,
      error: null
    });
  });

  it('updates loading state and person state when fetch person succeeds', () => {
    const fetchPerson = {
      type: types.FETCH_PERSON_SUCCESS,
      payload: { id: 666, name: 'Jon' }
    };

    expect(reducer(initialState, fetchPerson)).toEqual({
      person: { id: 666, name: 'Jon' },
      loading: false,
      error: null
    });
  });

  it('updates loading state and error state when fetch person fails', () => {
    const fetchPerson = {
      type: types.FETCH_PERSON_FAILURE,
      payload: {
        message: 'Request failed with status code 404'
      }
    };

    expect(reducer(initialState, fetchPerson)).toEqual({
      person: {
        id: 0,
        name: 'Initial Person Name'
      },
      loading: false,
      error: 'Request failed with status code 404'
    });
  });
});
