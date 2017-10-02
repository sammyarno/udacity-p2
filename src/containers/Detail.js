import React, { Component } from 'react';

class Detail extends Component {

  state = {
    key: ''
  }

  constructor(props) {
    super(props);
    this.state = {key : props.match.params.id}
  }

  render() {
    const {key} = this.state;

    return (
      <div>
        <center>
          <h1>Detail | post id : {key}</h1>
        </center>
      </div>
    )

  }
}

export default Detail;
