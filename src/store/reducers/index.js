import { combineReducers } from 'redux';

import testDispatchReducer from './testDispatchReducer';
import userReducer from './userReducer';

export default combineReducers({
  testDispatch: testDispatchReducer,
  user: userReducer
});
