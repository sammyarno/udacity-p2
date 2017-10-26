import * as types from '../ActionTypes';
import initialState from './InitialState';

export default function menuReducer(state = initialState.menu, action) {
  switch(action.type) {
    case types.CHANGE_MENU_SUCCESS:
      console.log(action.menu)
      return action.menu
    default:
      return 'home';
  }
}
