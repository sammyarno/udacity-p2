import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

import { Grid, Container, Item, Button, Icon, Dropdown } from 'semantic-ui-react';

// import dummy image
import Dummy from '../assets/images/dummy.jpg';

class Category extends Component {

  state = {
    cats: []
  }

  componentDidMount() {
    this.setState({
      cats: [
        {
          id: 0,
          text: 'All Category',
          value: 'All Category'
        },
        {
          id: 1,
          text: 'Politic',
          value: 'politic'
        },{
          id: 2,
          text: 'Comedy',
          value: 'comedy'
        },{
          id: 3,
          text: 'Movie',
          value: 'movie'
        },{
          id: 4,
          text: 'Education',
          value: 'education'
        },{
          id: 5,
          text: 'Music',
          value: 'music'
        },
      ]
    })
  }

  render() {
    const {cats} = this.state
    const dropDownCategories = <Dropdown placeholder='Select Category' fluid selection options={cats} />

    const postList = []
    for(var i=0; i<10; i++) {
      postList.push(
        <LazyLoad height={100} unmountIfInvisible={true} key={i}>
          <Item>
            <Item.Image src={Dummy}/>
            <Item.Content>
              <Item.Header as='a'>Watchmen</Item.Header>
              <Item.Meta>
                <span className='cinema'>IFC</span>
              </Item.Meta>
              <Item.Description>ahsdasldn</Item.Description>
              <Item.Extra>
                <Button primary floated='right'>
                  Update Post
                  <Icon name='right chevron' />
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
        </LazyLoad>
      )
    }

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
            <Grid.Column width={3} textAlign='center' verticalALign='middle'>
              <Button color='teal' content='Filter'/>
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

export default Category;
