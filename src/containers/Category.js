import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import {Link} from 'react-router-dom';
import sortBy  from 'sort-by';

import LoadingFull from '../components/LoadingFull';
import VoteButton from '../components/VoteButton';

import { Grid, Container, Item, Button, Dropdown, Label, Divider } from 'semantic-ui-react';

// react-redux
import { connect } from 'react-redux';
import { getDetailPost, loadPostComments, insertPost, votePost } from '../actions/PostAction';

// import dummy image
import Dummy from '../assets/images/dummy.jpg';

class Category extends Component {

  state = {
    cats: [],
    filtercat: 'default',
    sortby: '-voteScore',
    loading: false
  }

  constructor(props) {
    super(props)
    if(props.match.params.category) {
      this.state = {filtercat: props.match.params.category}
    }
  }

  handleSortChange = (e, {value}) => {
    this.setState({ sortby: value });
  }

  handleCatChange = (e, {value}) => {
    this.setState({ filtercat: value });
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
    const {sortby, filtercat, loading} = this.state

    const temp = [
      {
        text: 'All Categories',
        value: 'default'
      }
    ]
    const data = cats && temp.concat(cats.map(cat => {
        return {
          text: cat.name,
          value: cat.name
        }
      })
    )
    const dropDownCategories = (
      <Dropdown
        placeholder='Select Category'
        defaultValue={filtercat}
        fluid
        selection
        options={data}
        onChange={this.handleCatChange}
      />
    )

    const DetailsButton = (i) => (
      <Link to={`/postdetail/${i}`}>
        <Button basic color='orange' floated='right' icon='right chevron'
                labelPosition='right' content='See Details' onClick={() => getPost(i)} />
      </Link>
    )
    const postList = posts && posts.sort(sortBy(sortby)).filter(post => {
      if(filtercat === 'default') {
        return post
      }else {
        return post.category === filtercat
      }
    }).map(post =>
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
              <VoteButton
                data = {post}
                votePost = {(data, action) => this.votePost(data, action)}
              />
              {DetailsButton(post.id)}
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
    const dropDownSorting = (
      <Dropdown
        placeholder='Sort By'
        fluid
        selection
        options={options}
        onChange={this.handleSortChange}
      />
    )

    return (
      <Container fluid>
        <br/> <br/>
        <Grid centered>
          <Grid.Row>
            <Grid.Column width={3} textAlign='center' verticalAlign='middle'>
              {dropDownCategories}
            </Grid.Column>
            <Grid.Column width={3} textAlign='center' verticalAlign='middle'>
              {dropDownSorting}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={5} textAlign='center' verticalAlign='middle'>
              <Divider />
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

export default connect(mapStateToProps, mapDispatchToProps)(Category)
