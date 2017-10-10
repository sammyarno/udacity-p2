import PostApi from '../api/PostApi';
import * as types from '../ActionTypes';

export function loadCategories () {
  return function(dispatch) {
    return PostApi.getAllCats().then(cats => {
      dispatch(loadCatsSuccess(cats.categories));
    }).catch(error => {
      throw(error);
    });
  }
}

export function loadCatsSuccess(cats) {
  return {type: types.LOAD_CATS_SUCCESS, cats};
}
