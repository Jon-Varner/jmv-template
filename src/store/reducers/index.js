import { combineReducers } from 'redux';

import sampleDispatchReducer from './sampleDispatchReducer';
import userReducer from './userReducer';

export default combineReducers({
  sampleDispatch: sampleDispatchReducer,
  user: userReducer
});
