class PostApi {

  static getAllCats() {
    const url = `${process.env.REACT_APP_BACKEND}/categories`;
    return fetch(url, { headers: { 'Authorization': 'Sam' } })
      .then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
  }

  static getAllPosts() {
    const url = `${process.env.REACT_APP_BACKEND}/posts`;
    return fetch(url, { headers: { 'Authorization': 'Sam' } })
      .then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
  }

  static insertPost(data) {
    const url = `${process.env.REACT_APP_BACKEND}/posts`;
    return fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': 'Sam',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
  }

  static updatePost(id, data) {
    const url = `${process.env.REACT_APP_BACKEND}/posts/${id}`;
    return fetch(url, {
      method: 'PUT',
      headers: {
        'Authorization': 'Sam',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
  }

  static deletePost(id) {
    const url = `${process.env.REACT_APP_BACKEND}/posts/${id}`;
    return fetch(url, { method: 'DELETE', headers: { 'Authorization': 'Sam' } })
      .then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
  }

  static getDetailPost(id) {
    const url = `${process.env.REACT_APP_BACKEND}/posts/${id}`;
    return fetch(url, { headers: { 'Authorization': 'Sam' } })
      .then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
  }

  static getPostComment(id) {
    const url = `${process.env.REACT_APP_BACKEND}/posts/${id}/comments`;
    return fetch(url, { headers: { 'Authorization': 'Sam' } })
      .then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
  }

  static insertPostComment(data) {
    const url = `${process.env.REACT_APP_BACKEND}/comments`;
    return fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': 'Sam',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
  }

  static deletePostComment(id) {
    const url = `${process.env.REACT_APP_BACKEND}/comments/${id}`;
    return fetch(url, { method: 'DELETE', headers: { 'Authorization': 'Sam' } })
      .then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
  }

  static updatePostComment(id, data) {
    const url = `${process.env.REACT_APP_BACKEND}/comments/${id}`;
    return fetch(url, {
      method: 'PUT',
      headers: {
        'Authorization': 'Sam',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
  }

}

export default PostApi;
