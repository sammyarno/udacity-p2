import * as types from '../ActionTypes';
import initialState from './InitialState';

export default function postReducer(state = initialState.posts, action) {
  switch(action.type) {
    case types.LOAD_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.posts
      }
    case types.LOAD_DETAIL_POST_SUCCESS:
      return {
        ...state,
        post: action.post
      }
    case types.LOAD_POST_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.comments
      }
    default:
      return state;
  }
}
