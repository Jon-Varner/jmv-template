import reducer from './menuToggleReducer';
import * as types from '../actions/types';

const initialState = {
  menuOpen: false
};

describe('toggle menu reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual({ menuOpen: false });
  });

  it('should toggle menu state when called', () => {
    const toggle = {
      type: types.TOGGLE_MENU
    };

    expect(reducer(initialState, toggle)).toEqual({ menuOpen: true });
  });
});
