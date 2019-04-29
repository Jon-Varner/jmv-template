import { combineReducers } from 'redux';

import menuToggleReducer from './menuToggleReducer';
import sampleApiCallReducer from './sampleApiCallReducer';
import userReducer from './userReducer';

export default combineReducers({
  menuToggle: menuToggleReducer,
  sampleApiCall: sampleApiCallReducer,
  user: userReducer
});
