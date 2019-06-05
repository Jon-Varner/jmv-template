import configureMockStore from 'redux-mock-store';
import axiosMock from 'axios';

import {
  toggleMenu,
  addUser,
  fetchPersonBegin,
  fetchPersonSuccess,
  fetchPersonFailure
} from './actions';
import * as types from './types';

const mockStore = configureMockStore();

describe('toggle menu actions', () => {
  it('should dispatch action', () => {
    const initialState = {
      menuOpen: false
    };

    const store = mockStore(initialState);

    store.dispatch(toggleMenu());

    const actions = store.getActions();
    const expectedPayload = { type: types.TOGGLE_MENU };
    expect(actions).toEqual([expectedPayload]);
  });
});

describe('add user actions', () => {
  it('should dispatch action', () => {
    const initialState = {
      user: {
        fullName: 'Initial User Name',
        email: 'Initial Email',
        password: 'Initial Password',
        age: '30',
        preference: 'None',
        pronouns: [],
        optin: 'false'
      },
      error: null
    };

    const store = mockStore(initialState);

    store.dispatch(
      addUser({
        fullName: 'New User Name',
        email: 'New Email',
        password: 'New Password',
        age: '40',
        preference: 'Red',
        pronouns: ['she/her', 'they/them'],
        optin: 'true'
      })
    );

    const actions = store.getActions();
    const expectedPayload = {
      type: types.ADD_USER,
      payload: {
        fullName: 'New User Name',
        email: 'New Email',
        password: 'New Password',
        age: '40',
        preference: 'Red',
        pronouns: ['she/her', 'they/them'],
        optin: 'true'
      }
    };
    expect(actions).toEqual([expectedPayload]);
  });
});

describe('fetch person actions', () => {
  it('should dispatch fetch begin action', () => {
    const initialState = {
      person: {
        id: 0,
        name: 'Initial Person Name'
      },
      loading: false,
      error: null
    };

    const store = mockStore(initialState);

    store.dispatch(fetchPersonBegin());

    const actions = store.getActions();
    const expectedPayload = { type: types.FETCH_PERSON_BEGIN };
    expect(actions).toEqual([expectedPayload]);
  });

  it('should dispatch fetch person success action', () => {
    const initialState = {
      person: {
        id: 0,
        name: 'Initial Person Name'
      },
      loading: false,
      error: null
    };

    const store = mockStore(initialState);

    store.dispatch(
      fetchPersonSuccess({
        person: {
          id: 666,
          name: 'New Name'
        }
      })
    );

    const actions = store.getActions();
    const expectedPayload = {
      type: types.FETCH_PERSON_SUCCESS,
      payload: {
        person: {
          id: 666,
          name: 'New Name'
        }
      }
    };

    expect(actions).toEqual([expectedPayload]);
  });

  it('should dispatch fetch person failure action on error', () => {
    const initialState = {
      person: {
        id: 0,
        name: 'Initial Person Name'
      },
      loading: false,
      error: null
    };

    const store = mockStore(initialState);

    store.dispatch(
      fetchPersonFailure({
        message: 'Request failed with status code 404'
      })
    );

    const actions = store.getActions();
    const expectedPayload = {
      type: types.FETCH_PERSON_FAILURE,
      payload: {
        message: 'Request failed with status code 404'
      }
    };
    expect(actions).toEqual([expectedPayload]);
  });
});
