import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';
import sortBy  from 'sort-by';
// import PropTypes from 'prop-types';

import LoadingFull from '../components/LoadingFull';

import { Container, Grid, Header, Item, Label, Divider, Button, Modal, Form } from 'semantic-ui-react';

import { deletePostComment, insertPostComment } from '../actions/PostAction';

class Detail extends Component {

  // static propTypes = {
  //   post: PropTypes.object.isRequired
  // };

  state = {
    modalOpen: false,
    key: '',
    loading: false
  }

  constructor(props) {
    super(props)
    this.state = {key: props.match.params.id}
  }

  modalOpen = () => {
    this.setState({
      modalOpen: true,
      commentid: uuidv4()
    })

  }
  modalClose = () => this.setState({ modalOpen: false })

  submitInsert = (data) => {
    this.setState({ loading: true })
    this.props.insertComment(data)

    setTimeout(() => {
      this.setState({
        loading: false
      })
      this.modalClose()
    }, 3000)

  }

  render() {
    const {post, comments, deleteComment} = this.props
    const {modalOpen, key, commentid, loading, sortby} = this.state

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
            <Grid.Column textAlign='right'><b>Timestamp</b></Grid.Column>
            <Grid.Column>{post.timestamp}</Grid.Column>
          </Grid.Row>
          <Grid.Row width={6} columns={2}>
            <Grid.Column textAlign='right'><b>Category</b></Grid.Column>
            <Grid.Column>{post.category}</Grid.Column>
          </Grid.Row>
          <Grid.Row width={6} columns={2}>
            <Grid.Column textAlign='right'><b>Vote Score</b></Grid.Column>
            <Grid.Column>{post.voteScore}</Grid.Column>
          </Grid.Row>
          <Grid.Row width={6} column={1}>
            <Grid.Column textAlign='center'>
              <b>Body</b>
            </Grid.Column>
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
            {comments.sort(sortBy('-voteScore')).map(comment => (
              <Item key={comment.id}>
                <Item.Content>
                  <Item.Header as='a'>{comment.author}</Item.Header>
                  <Item.Description>{comment.body}</Item.Description>
                  <Item.Extra>
                    <Button color='red' floated='right' icon='delete' content='Delete' onClick={() => deleteComment(comment.id)} />
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

    const insertModal =
      <Modal open={modalOpen} onClose={this.modalClose}>
        <Modal.Header>Insert new Comment</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Form id='insert-form' onSubmit={data => this.submitInsert(data.target)}>
                    <Form.Group widths='equal'>
                      <Form.Input name='postid' label='PostID' value={key} readOnly />
                      <Form.Input name='timestamp' label='Timestamp' value={Date.now()} readOnly />
                    </Form.Group>
                    <Divider />
                    <Form.Group>
                      <Form.Input name='commentid' label='CommentID' value={commentid} width={8} readOnly />
                    </Form.Group>
                    <Form.Group>
                      <Form.Input name='author' label='Author' placeholder='Author' width={10} required/>
                    </Form.Group>
                    <Form.Group widths='equal'>
                      <Form.TextArea name='body' label='Comment' placeholder='What is your comment..' rows={2} autoHeight required/>
                    </Form.Group>
                    <Button type='submit' floated='right' color='teal' content='Add new Comment' form='insert-form'/>
                  </Form>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Description>
        </Modal.Content>
      </Modal>

    return (
      <Container fluid>
        <br/> <br/>
          {postDetail}
          {insertModal}
          <br/>
          <Divider horizontal>Comment</Divider>
          <Grid centered>
            <Grid.Row>
              <Grid.Column width={3} verticalAlign='middle'>
                <Button color='teal' content='Add new Comment' onClick={this.modalOpen}/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <br/>
          <Grid stackable>
            {commentList}
          </Grid>
          <LoadingFull
            loading = {loading}
          />
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

function mapDispatchToProps (dispatch) {
  return {
    deleteComment: (id) => dispatch(deletePostComment(id)),
    insertComment: (data) => dispatch(insertPostComment(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
