import * as types from '../ActionTypes';
import initialState from './InitialState';

export default function catReducer(state = initialState.cats, action) {
  switch(action.type) {
    case types.LOAD_CATS_SUCCESS:
      return action.cats
    default:
      return state;
  }
}
