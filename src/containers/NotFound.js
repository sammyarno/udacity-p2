import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {

    return (
      <div>
        <center>
          <h1>Page not found</h1>
          <Link as='h4' color='grey' to='/'>redirect to home</Link>
        </center>
      </div>
    )

  }
}

export default NotFound;
