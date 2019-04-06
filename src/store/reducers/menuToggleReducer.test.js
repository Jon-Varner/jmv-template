import reducer from './menuToggleReducer';
import * as types from '../actions/types';

it('returns initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    menuOpen: false
  });
});

it('should handle TOGGLE_MENU', () => {
  const beforeState = { menuOpen: false };
  const action = {
    type: types.TOGGLE_MENU
  };
  const afterState = {
    menuOpen: true
  };

  expect(reducer(beforeState, action)).toEqual(afterState);
});
