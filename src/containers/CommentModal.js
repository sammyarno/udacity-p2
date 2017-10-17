import React, { Component } from 'react';

export default class CommentModal extends Component {
  render() {
    return (
      <div className="commentmodal">
        { this.props.children }
      </div>
    )
  }
}
