import reducer from './sampleDispatchReducer';
import * as types from '../actions/types';

it('returns initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    sampleData: 'update me!'
  });
});

it('should handle SAMPLE_DISPATCH', () => {
  const beforeState = { sampleData: 'update me!' };
  const action = {
    type: types.SAMPLE_DISPATCH,
    payload: 'data updated'
  };
  const afterState = {
    sampleData: 'data updated'
  };

  expect(reducer(beforeState, action)).toEqual(afterState);
});
