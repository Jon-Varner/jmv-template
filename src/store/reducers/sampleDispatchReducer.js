import { SAMPLE_DISPATCH } from '../actions/types';

const initialState = {
  sampleData: 'update me!'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAMPLE_DISPATCH:
      return {
        ...state,
        sampleData: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
