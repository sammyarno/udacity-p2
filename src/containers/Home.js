import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import {Link} from 'react-router-dom';
//import PropTypes from 'prop-types';

// react-redux
import { connect } from 'react-redux';
import { getDetailPost, loadPostComments } from '../actions/PostAction';

import { Header, Grid, Container, Item, Divider, Button, Icon, Label, Dropdown } from 'semantic-ui-react';

// import dummy image
import Dummy from '../assets/images/dummy.jpg';

class Home extends Component {

  // static propTypes = {
  //   cats: PropTypes.array.isRequired,
  //   posts: PropTypes.array.isRequired,
  // };

  render() {
    const {cats, posts, getPost} = this.props

    const catList = cats.map(cat =>
      <Grid.Column key={cat.name} textAlign='center'>
        <Label as='a' basic color='orange' href={`${process.env.REACT_APP_BACKEND}/${cat.path}`}>{cat.name}</Label>
      </Grid.Column>
    )

    const EditButton = (i) => (
      <Link to={`/postupdate/${i}`}>
        <Button basic color='brown' floated='left'>
          <Icon name='edit' />
          Update Post
        </Button>
      </Link>
    )

    const DetailsButton = (i) => (
      <Link to={`/postdetail/${i}`}>
        <Button basic color='orange' floated='right' icon='right chevron'
                labelPosition='right' content='See Details' onClick={() => getPost(i)} />
      </Link>
    )

    const postList = posts && posts.map(post =>
      <LazyLoad height={100} unmountIfInvisible={true} key={post.id}>
        <Item>
          <Item.Image src={Dummy}/>
          <Item.Content>
            <Item.Header as='p'>{post.title}</Item.Header>
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
              {EditButton(post.id)}
              {DetailsButton(post.id)}
            </Item.Extra>
          </Item.Content>
        </Item>
      </LazyLoad>
    )

    const options = [
      { key: '0', text: 'Default', value: 'default' },
      { key: '1', text: 'Top Vote', value: 'vote' },
      { key: '2', text: 'Newest', value: 'newest' },
      { key: '3', text: 'Oldest', value: 'oldest' },
      { key: '4', text: 'Alphabethical', value: 'alphabeth' },
    ]
    const dropDownSorting = <Dropdown placeholder='Sort By' fluid selection options={options} />

    return (
      <Container fluid>
        <br/> <br/>
        <Grid centered stackable>
          <Grid.Row>
            <Header as='h1' disabled content='Categories' />
          </Grid.Row>
          <Grid.Row>
            {catList}
          </Grid.Row>
          <Divider />
          <Grid.Row>
            <Grid.Column width={3} textAlign='center' verticalAlign='middle'>
              {dropDownSorting}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3} textAlign='center' verticalAlign='middle'>
              <Button color='teal' content='Add new Post'/>
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
                     .then(() => dispatch(loadPostComments(id)))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
