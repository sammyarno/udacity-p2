import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import {Link} from 'react-router-dom';
import uuidv4 from 'uuid/v4';
import sortBy  from 'sort-by';
//import PropTypes from 'prop-types';

import LoadingFull from '../components/LoadingFull';
import VoteButton from '../components/VoteButton';

// react-redux
import { connect } from 'react-redux';
import { getDetailPost, loadPostComments, insertPost, votePost } from '../actions/PostAction';

import { Header, Grid, Container, Item, Divider, Button, Label, Modal, Form } from 'semantic-ui-react';

// import dummy image
import Dummy from '../assets/images/dummy.jpg';

class Home extends Component {

  // static propTypes = {
  //   cats: PropTypes.array.isRequired,
  //   posts: PropTypes.array.isRequired,
  // };

  state = {
    modalOpen: false,
    loading: false,
    sortby: '-voteScore'
  }

  modalOpen = () => {
    this.setState({
      modalOpen: true,
      postid: uuidv4()
    })
  }
  modalClose = () => this.setState({ modalOpen: false })

  submitInsert = (data) => {
    this.setState({ loading: true })
    const post = {
      id: data.postid.value,
      timestamp: data.timestamp.value,
      title: data.title.value,
      body: data.body.value,
      author: data.author.value,
      category: this.state.cat
    }
    this.props.addPost(post)

    setTimeout(() => {
      this.setState({
        loading: false
      })
      this.modalClose()
    }, 3000)
  }

  handleSortChange = (e, {value}) => {
    this.setState({ sortby: value });
  }

  handleCatChange = (e, {value}) => {
    this.setState({ cat: value });
  }

  votePost = (post, action) => {
    this.setState({ loading: true })
    setTimeout(() => {
      this.props.votePost(post, action)
      this.setState({
        loading: false
      })
    }, 500)
  }

  render() {
    const {cats, posts, getPost} = this.props
    const {modalOpen, postid, loading, sortby} = this.state

    const catOptions = [
      { key: '0', text: 'React', value: 'react' },
      { key: '1', text: 'Redux', value: 'redux' },
      { key: '2', text: 'Udacity', value: 'udacity' },
    ]
    const insertModal =
      <Modal open={modalOpen} onClose={this.modalClose}>
        <Modal.Header>Insert new Post</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Form id='insert-post-form' onSubmit={data => this.submitInsert(data.target)}>
                    <Form.Group widths='equal'>
                      <Form.Input name='postid' label='PostID' value={postid} readOnly />
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

    const catList = cats.map(cat =>
      <Grid.Column key={cat.name} width={1}>
        <Link to={`/${cat.name}/`}>
          <Button basic color='orange' content={cat.name} />
        </Link>
      </Grid.Column>
    )

    const DetailsButton = (post) => (
      <Link to={`/${post.category}/${post.id}`}>
        <Button basic color='orange' floated='right' icon='right chevron'
                labelPosition='right' content='See Details' onClick={() => getPost(post.id)} />
      </Link>
    )

    const postList = posts && posts.sort(sortBy(sortby)).map(post =>
      <LazyLoad height={100} unmountIfInvisible={true} key={post.id}>
        <Item>
          <Item.Image src={Dummy}/>
          <Item.Content>
            <Item.Header as='p'><small>{post.author}</small> - {post.title}</Item.Header>
            <Item.Meta>
              {post.voteScore > 0 ?
                <Label icon='pointing up' content={`${post.voteScore}`} />
                :
                <Label icon='pointing down' content={`${post.voteScore}`} />
              }
              | <span className='cinema'> {post.category}</span>
            </Item.Meta>
            <Item.Description>{post.body}</Item.Description>
            <Item.Extra>
              <VoteButton
                data = {post}
                votePost = {(data, action) => this.votePost(data, action)}
              />
              {DetailsButton(post)}
            </Item.Extra>
          </Item.Content>
        </Item>
      </LazyLoad>
    )

    const options = [
      { key: '0', text: 'Top Vote', value: '-voteScore' },
      { key: '1', text: 'Low Vote', value: 'voteScore' },
      { key: '2', text: 'Newest', value: '-timestamp' },
      { key: '3', text: 'Oldest', value: 'timestamp' },
      { key: '4', text: 'Alphabethical', value: 'title' },
    ]
    const dropDownSorting = <Form.Select name='sortby' placeholder='Sort By' fluid selection options={options} onChange={this.handleSortChange} required/>

    return (
      <Container fluid>
        <br/> <br/>
        {insertModal}
        <Grid centered stackable>
          <Grid.Row>
            <Header as='h1' disabled content='Categories' />
          </Grid.Row>
          <Grid.Row>
            {catList}
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={5} textAlign='center' verticalAlign='middle'>
              <Divider />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3} textAlign='center' verticalAlign='middle'>
              {dropDownSorting}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3} textAlign='center' verticalAlign='middle'>
              <Button color='teal' content='Add new Post' onClick={this.modalOpen}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row></Grid.Row>
          <Grid.Row>
            <Grid.Column width={12}>
              <Item.Group divided>
                {postList}
              </Item.Group>
            </Grid.Column>
          </Grid.Row>
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
    cats: state.categories,
    posts: state.data.posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getPost: (id) => dispatch(getDetailPost(id))
                     .then(() => dispatch(loadPostComments(id))),
    addPost: (data) => dispatch(insertPost(data)),
    votePost: (data, action) => dispatch(votePost(data, action))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
