import { TEST_DISPATCH } from '../actions/types';

const initialState = {
  testData: 'update me!'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_DISPATCH:
      return {
        ...state,
        testData: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
