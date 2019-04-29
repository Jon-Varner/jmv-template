import {
  FETCH_PERSON_BEGIN,
  FETCH_PERSON_SUCCESS,
  FETCH_PERSON_FAILURE
} from '../actions/types';

const initialState = {
  person: {
    id: 0,
    name: 'Initial Person Name'
  },
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PERSON_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_PERSON_SUCCESS:
      return {
        ...state,
        loading: false,
        person: action.payload,
        error: null
      };

    case FETCH_PERSON_FAILURE:
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
