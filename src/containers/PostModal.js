import React, { Component } from 'react';

export default class PostModal extends Component {
  render() {
    return (
      <div className="postmodal">
        { this.props.children }
      </div>
    )
  }
}
