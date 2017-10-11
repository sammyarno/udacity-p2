import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Container, Grid, Header, Item, Label, Divider, Button, Icon } from 'semantic-ui-react';

class Detail extends Component {

  static propTypes = {
    post: PropTypes.array.isRequired
  };


  render() {
    const {post, comments} = this.props

    const postDetail = post && (
      <div>
        <Grid centered stackable>
          <Grid.Row>
            <Header as='h1' disabled content={`${post.title}`} />
          </Grid.Row>
          <Grid.Row width={6} columns={2}>
            <Grid.Column textAlign='right'><b>Author</b></Grid.Column>
            <Grid.Column>{post.author}</Grid.Column>
          </Grid.Row>
          <Grid.Row width={6} columns={2}>
            <Grid.Column textAlign='right'><b>Title</b></Grid.Column>
            <Grid.Column>{post.title}</Grid.Column>
          </Grid.Row>
          <Grid.Row width={6} columns={2}>
            <Grid.Column textAlign='right'><b>Category</b></Grid.Column>
            <Grid.Column>{post.category}</Grid.Column>
          </Grid.Row>
          <Grid.Row width={6} columns={2}>
            <Grid.Column textAlign='right'><b>Vote Score</b></Grid.Column>
            <Grid.Column>{post.voteScore}</Grid.Column>
          </Grid.Row>
          <Grid.Row width={6} columns={1}>
            <Grid.Column textAlign='center'>
              {post.body}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )

    const commentList = comments && (
      <Grid.Row centered>
        <Grid.Column width={10}>
          <Item.Group divided>
            {comments.map(comment => (
              <Item>
                <Item.Content>
                  <Item.Header as='a'>{comment.author}</Item.Header>
                  <Item.Description>{comment.body}</Item.Description>
                  <Item.Extra>
                    <Button color='red' floated='right' icon='delete' content='Delete' />
                    <Button color='violet' floated='right' icon='edit' content='Edit' />
                    {comment.voteScore > 0 ?
                      <Label icon='pointing up' content={`${comment.voteScore}`} />
                      :
                      <Label icon='pointing down' content={`${comment.voteScore}`} />
                    }
                  </Item.Extra>
                </Item.Content>
              </Item>
            ))}
          </Item.Group>
        </Grid.Column>
      </Grid.Row>
    )

    return (
      <Container fluid>
        <br/> <br/>
          {postDetail}
          <br/>
          <Divider horizontal>Comment</Divider>
          <Grid centered>
            <Grid.Row>
              <Grid.Column width={3} textAlign='center' verticalAlign='middle'>
                <Button color='teal' content='Add new Comment'/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <br/>
          <Grid stackable>
            {commentList}
          </Grid>
      </Container>
    )

  }
}

function mapStateToProps (state, ownProps) {
  return {
    post: state.data.post,
    comments: state.data.comments
  }
}

export default connect(mapStateToProps)(Detail)
