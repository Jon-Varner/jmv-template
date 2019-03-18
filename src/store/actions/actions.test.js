import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import * as actions from './actions';
import * as types from './types';

const middleware = [thunk];

describe('sample dispatch actions', () => {
  it('should update the sample dispatch state', () => {
    const text = 'I am updated';
    const expectedAction = {
      type: types.SAMPLE_DISPATCH,
      payload: text
    };
    expect(actions.sampleDispatch(text)).toEqual(expectedAction);
  });
});

describe('fetch user actions', () => {
  let store;
  let httpMock;

  const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

  beforeEach(() => {
    httpMock = new MockAdapter(axios);
    const mockStore = configureMockStore(middleware);
    store = mockStore({});
  });

  it('fetches a user', async () => {
    //given
    httpMock.onGet('https://jsonplaceholder.typicode.com/users/1').reply(200, {
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
    });

    //when
    actions.fetchUser()(store.dispatch);
    await flushAllPromises();

    //then
    expect(store.getActions()).toEqual([
      { type: types.FETCH_USER_BEGIN },
      { type: types.FETCH_USER_SUCCESS, payload: { id: 1, name: 'Bret' } }
    ]);
  });
});
