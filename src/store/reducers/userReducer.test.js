import reducer from './userReducer';
import * as types from '../actions/types';

const initialState = {
  user: {
    fullName: 'Initial User Name',
    email: 'Initial Email',
    password: 'Initial Password',
    age: '30',
    preference: 'None',
    pronouns: [],
    optin: 'false'
  }
};

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual({
      user: {
        fullName: 'Initial User Name',
        email: 'Initial Email',
        password: 'Initial Password',
        age: '30',
        preference: 'None',
        pronouns: [],
        optin: 'false'
      }
    });
  });

  it('should update state when new user is dispatched', () => {
    const addUser = {
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

    expect(reducer(initialState, addUser)).toEqual({
      user: {
        fullName: 'New User Name',
        email: 'New Email',
        password: 'New Password',
        age: '40',
        preference: 'Red',
        pronouns: ['she/her', 'they/them'],
        optin: 'true'
      }
    });
  });
});
