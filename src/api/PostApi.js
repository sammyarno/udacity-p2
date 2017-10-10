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

  static getDetailPost(id) {
    const url = `${process.env.REACT_APP_BACKEND}/posts/${id}`;
    console.log('getDetail', url)
    return fetch(url, { headers: { 'Authorization': 'Sam' } })
      .then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
  }

}

export default PostApi;
