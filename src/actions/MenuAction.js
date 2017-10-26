import * as types from '../ActionTypes';

export function changeMenu (menu) {
  return function(dispatch) {
    if(menu === 'category') {
      return dispatch(changeMenuSuccess("category"))
    }else {
      return dispatch(changeMenuSuccess("home"))
    }
  }
}

export function changeMenuSuccess(menu) {
  return {type: types.CHANGE_MENU_SUCCESS, menu};
}
