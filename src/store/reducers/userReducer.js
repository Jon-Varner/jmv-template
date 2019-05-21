import { ADD_USER } from '../actions/types';

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
