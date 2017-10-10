import PostApi from '../api/PostApi';
import * as types from '../ActionTypes';

export function loadPosts () {
  return function(dispatch) {
    return PostApi.getAllPosts().then(posts => {
      dispatch(loadPostsSuccess(posts));
    }).catch(error => {
      throw(error);
    });
  }
}

export function loadPostsSuccess (posts) {
  return {type: types.LOAD_POSTS_SUCCESS, posts};
}

export function getDetailPost (id) {
  return function(dispatch) {
    return PostApi.getDetailPost(id).then(post => {
      dispatch(loadDetailPostSuccess(post));
    }).catch(error => {
      throw(error);
    });
  }
}

export function loadDetailPostSuccess (post) {
  return {type: types.LOAD_DETAIL_POST_SUCCESS, post};
}
