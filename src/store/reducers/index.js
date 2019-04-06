import { combineReducers } from 'redux';

import menuToggleReducer from './menuToggleReducer';
import sampleDispatchReducer from './sampleDispatchReducer';
import userReducer from './userReducer';

export default combineReducers({
  menuToggle: menuToggleReducer,
  sampleDispatch: sampleDispatchReducer,
  user: userReducer
});
