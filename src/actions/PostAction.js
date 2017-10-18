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

export function insertPost (data) {
  return function(dispatch) {
    return PostApi.insertPost(data).then(post => {
      dispatch(insertPostSuccess(post));
    }).catch(error => {
      throw(error);
    });
  }
}

export function insertPostSuccess (post) {
  return {type: types.INSERT_POST_SUCCESS, post};
}

export function updatePost (data) {
  return function(dispatch) {
    const newData = {
      title: data.title.value,
      body: data.body.value,
    }
    return PostApi.updatePost(data.postid.value, newData).then(post => {
      dispatch(updatePostSuccess(post));
    }).catch(error => {
      throw(error);
    });
  }
}

export function updatePostSuccess (post) {
  return {type: types.UPDATE_POST_SUCCESS, post};
}

export function deletePost (id) {
  return function(dispatch) {
    return PostApi.deletePost(id).then(post => {
      dispatch(deletePostSuccess(post));
    }).catch(error => {
      throw(error);
    });
  }
}

export function deletePostSuccess (post) {
  return {type: types.DELETE_POST_SUCCESS, post};
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

export function loadPostComments (id) {
  return function(dispatch) {
    return PostApi.getPostComment(id).then(comments => {
      dispatch(loadPostCommentsSuccess(comments));
    }).catch(error => {
      throw(error);
    });
  }
}

export function loadPostCommentsSuccess (comments) {
  return {type: types.LOAD_POST_COMMENTS_SUCCESS, comments};
}

export function insertPostComment (data) {
  return function(dispatch) {
    const newCom = {
      id: data.commentid.value,
      parentId: data.postid.value,
      timestamp: data.timestamp.value,
      author: data.author.value,
      body: data.body.value,
    }
    return PostApi.insertPostComment(newCom).then(comment => {
      dispatch(insertPostCommentSuccess(comment));
    }).catch(error => {
      throw(error);
    });
  }
}

export function insertPostCommentSuccess (comment) {
  return {type: types.INSERT_POST_COMMENT_SUCCESS, comment};
}

export function deletePostComment (id) {
  return function(dispatch) {
    return PostApi.deletePostComment(id).then(comment => {
      dispatch(deletePostCommentSuccess(comment));
    }).catch(error => {
      throw(error);
    });
  }
}

export function deletePostCommentSuccess (comment) {
  return {type: types.DELETE_POST_COMMENT_SUCCESS, comment};
}

export function updatePostComment (data) {
  return function(dispatch) {
    const newData = {
      timestamp: data.timestamp.value,
      body: data.body.value,
    }
    return PostApi.updatePostComment(data.commentid.value, newData).then(comment => {
      dispatch(updatePostCommentSuccess(comment));
    }).catch(error => {
      throw(error);
    });
  }
}

export function updatePostCommentSuccess (comment) {
  return {type: types.UPDATE_POST_COMMENT_SUCCESS, comment};
}
