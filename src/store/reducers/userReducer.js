import { ADD_USER } from '../actions/types';

const initialState = {
  user: {
    id: 0,
    name: 'Initial User Name',
    email: 'Initial Email',
    password: 'Initial Password',
    age: 'Initial Age',
    prefs: 'None',
    he: false,
    she: false,
    they: false,
    optin: 'false'
  },
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
