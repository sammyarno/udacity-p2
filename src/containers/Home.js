import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

import { Header, Grid, Container, Item, Divider, Paragraph, Button, Icon, Label, Dropdown } from 'semantic-ui-react';

// import dummy image
import Dummy from '../assets/images/dummy.jpg';

class Home extends Component {

  state = {
    cats: []
  }

  componentDidMount() {
    this.setState({
      cats: [
        {
          id: 1,
          name: 'Politic'
        },{
          id: 2,
          name: 'Comedy'
        },{
          id: 3,
          name: 'Movie'
        },{
          id: 4,
          name: 'Education'
        },{
          id: 5,
          name: 'Music'
        },
      ]
    })
  }

  render() {
    const {cats} = this.state
    const catList = cats.map(cat =>
      <Grid.Column key={cat.id} textAlign='center'>
        <Label as='a' basic color='orange'>{cat.name}</Label>
      </Grid.Column>
    )

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

export default Home;
