import React, { Component } from 'react';
import { connect } from 'react-redux';
//import PropTypes from 'prop-types';

class Detail extends Component {

  // static propTypes = {
  //   post: PropTypes.object.isRequired
  // };

  // state = {
  //   key: ''
  // }

  // constructor(props) {
  //   super(props);
  //   //this.state = {key : props.match.params.id}
  // }

  componentDidMount () {
    //const {key} = this.state
    const {post} = this.props
    console.log('POST', post)
  }

  render() {
    //const {key} = this.state;

    return (
      <div>
        <center>
          <h1>Detail | post id : </h1>
        </center>
      </div>
    )

  }
}

function mapStateToProps (state, ownProps) {
  console.log('mapstate', state.posts)
  return {
    post: state.posts.post
  }
}

export default connect(mapStateToProps)(Detail)
