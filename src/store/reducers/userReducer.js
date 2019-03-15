import {
  FETCH_USER_BEGIN,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from '../actions/types';

const initialState = {
  user: {
    id: 0,
    name: 'Initial User Name'
  },
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        error: null
      };

    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    default:
      return state;
  }
};

export default reducer;
