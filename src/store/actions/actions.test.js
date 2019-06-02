import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axiosMock from 'axios';
import { toggleMenu, addUser, fetchPerson } from './actions';
import * as types from './types';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

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
  it('creates FETCH_PERSON_BEGIN and FETCH_PERSON_SUCCESS objects when it fetches a person from the API', () => {
    axiosMock.get.mockResolvedValueOnce({
      data: {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496'
          }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets'
        }
      }
    });

    const expectedActions = [
      { type: types.FETCH_PERSON_BEGIN },
      { type: types.FETCH_PERSON_SUCCESS, payload: { id: 1, name: 'Bret' } }
    ];

    const store = mockStore({
      person: {
        id: 0,
        name: 'Initial Person Name'
      },
      loading: false,
      error: null
    });

    return store.dispatch(fetchPerson()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates FETCH_PERSON_BEGIN and FETCH_PERSON_FAILURE objects when the API throws an error', () => {
    axiosMock.get.mockRejectedValue(new Error('API error'));

    const expectedActions = [
      { type: types.FETCH_PERSON_BEGIN },
      { type: types.FETCH_PERSON_FAILURE, payload: { error: 'API error' } }
    ];

    const store = mockStore({
      person: {
        id: 0,
        name: 'Initial Person Name'
      },
      loading: false,
      error: null
    });

    return store.dispatch(fetchPerson()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
