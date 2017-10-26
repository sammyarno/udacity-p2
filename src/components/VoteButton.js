import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'semantic-ui-react';

export default class VoteButton extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
    votePost: PropTypes.func.isRequired
  };

  render() {
    const {data, votePost} = this.props;

    return (
      <span>
        <Button
          basic
          size='tiny'
          color='green'
          floated='left'
          icon='arrow up'
          onClick={() => votePost(data, "upVote")}
        />

        <Button
          basic
          size='tiny'
          color='red'
          floated='left'
          icon='arrow down'
          onClick={() => votePost(data, "downVote")}
        />
      </span>
    )
  }
}
