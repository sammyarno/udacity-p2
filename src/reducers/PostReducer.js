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
    case types.INSERT_POST_SUCCESS:
      return {
        ...state,
        posts: [
          ...state['posts'],
          action.post
        ]
      }
    case types.UPDATE_POST_SUCCESS:
      console.log(action)
      return {
        ...state,
        post: action.post,
        posts: [
          ...state['posts'].map(data => {
            if(data.id === action.post.id) {
              data = action.post
            }
            return data
          })
        ]
      }
    case types.DELETE_POST_SUCCESS:
      console.log('delete post success', action.post);
      return {
        ...state,
        posts: [
          ...state['posts'].filter(data => data.id !== action.post.id)
        ]
      }
    case types.LOAD_POST_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.comments
      }
    case types.INSERT_POST_COMMENT_SUCCESS:
      return {
        ...state,
        comments : [
          ...state['comments'],
          action.comment
        ]
      }
    case types.DELETE_POST_COMMENT_SUCCESS:
      return {
        ...state,
        comments : [
          ...state['comments'].filter(data => data.id !== action.comment.id)
        ]
      }
    case types.UPDATE_POST_COMMENT_SUCCESS:
      return {
        ...state,
        comments : [
          ...state['comments'].map(data => {
            if(data.id === action.comment.id) {
              data = action.comment
            }

            return data
          })
        ]
      }
    default:
      return state;
  }
}
