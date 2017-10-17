import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';
import sortBy  from 'sort-by';
// import PropTypes from 'prop-types';

import LoadingFull from '../components/LoadingFull';

import { Container, Grid, Header, Item, Label, Divider, Button, Modal, Form } from 'semantic-ui-react';

import { deletePostComment, insertPostComment, deletePost } from '../actions/PostAction';

class Detail extends Component {

  // static propTypes = {
  //   post: PropTypes.object.isRequired
  // };

  state = {
    modalOpen: false,
    modalPostOpen: false,
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

  modalPostOpen = () => this.setState({ modalPostOpen: true })
  modalPostClose = () => this.setState({ modalPostOpen: false })

  submitInsertComment = (data) => {
    this.setState({ loading: true })
    this.props.insertComment(data)

    setTimeout(() => {
      this.setState({
        loading: false
      })
      this.modalClose()
    }, 3000)
  }
  submitDeleteComment = (id) => {
    this.setState({ loading: true })
    this.props.deleteComment(id)

    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 3000)
  }

  submitDeletePost = (id) => {
    this.setState({ loading: true })
    this.props.deletePost(id)

    setTimeout(() => {
      this.setState({
        loading: false
      })
      this.modalPostClose()
    }, 3000)
  }
  submitUpdatePost = (data) => {
    this.setState({ loading: true })
    this.props.insertComment(data)

    setTimeout(() => {
      this.setState({
        loading: false
      })
      this.modalCommentClose()
    }, 3000)
  }

  render() {

    const {post, comments} = this.props
    const {modalOpen, modalPostOpen, key, commentid, loading} = this.state

    const postDetail = post && (
      <div>
        <Grid centered stackable>
          <Grid.Row>
            <Header as='h1' disabled content={`${post.title}`} />
          </Grid.Row>
          <Grid.Row width={6} columns={1}>
            <Grid.Column textAlign='center'>
              <Button.Group>
                <Button negative content='Delete' onClick={() => deletePost(post.id)} />
                <Button.Or />
                <Button positive content='Edit' />
              </Button.Group>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row width={6} columns={2}>
            <Grid.Column textAlign='right'><b>ID</b></Grid.Column>
            <Grid.Column>{post.id}</Grid.Column>
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
          <Grid.Row width={6} columns={1}>
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
                    <Button color='red' floated='right' icon='delete' content='Delete' onClick={this.submitDeleteComment(comment.id)} />
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

    const insertCommentModal =
      <Modal open={modalOpen} onClose={this.modalClose}>
        <Modal.Header>Insert new Comment</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Form id='insert-form' onSubmit={data => this.submitInsertComment(data.target)}>
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

    const catOptions = [
      { key: '0', text: 'React', value: 'react' },
      { key: '1', text: 'Redux', value: 'redux' },
      { key: '2', text: 'Udacity', value: 'udacity' },
    ]
    const postModal =
      <Modal open={modalPostOpen} onClose={this.modalPostClose}>
        <Modal.Header>Insert new Post</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Form id='insert-post-form' onSubmit={data => this.submitInsert(data.target)}>
                    <Form.Group widths='equal'>
                      <Form.Input name='postid' label='PostID' value={'asdasd'} readOnly />
                      <Form.Input name='timestamp' label='Timestamp' value={Date.now()} readOnly />
                    </Form.Group>
                    <Divider />
                    <Form.Group>
                      <Form.Input name='title' label='Title' placeholder='Title' width={8} required/>
                    </Form.Group>
                    <Form.Group>
                      <Form.Input name='author' label='Author' placeholder='Author' width={10} required/>
                    </Form.Group>
                    <Form.Group widths='equal'>
                      <Form.TextArea name='body' label='Body' placeholder='What is your post about..' rows={2} autoHeight required/>
                    </Form.Group>
                    <Form.Group>
                      <Form.Select name='category' label='Category' placeholder='Post Category' fluid selection options={catOptions} width={6} onChange={this.handleCatChange} required/>
                    </Form.Group>
                    <Button type='submit' floated='right' color='teal' content='Add new Post' form='insert-post-form'/>
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
          {insertCommentModal}
          {postModal}
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
    deletePost: (id) => dispatch(deletePost(id)),
    deleteComment: (id) => dispatch(deletePostComment(id)),
    insertComment: (data) => dispatch(insertPostComment(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
