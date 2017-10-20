import React, { Component } from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class Header extends Component {

  state = {
    activeItem: 'home'
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const {activeItem} = this.state

    return (
      <div className="header">
        <Menu
          pointing
          secondary
          stackable
          color='red'>
          <Menu.Item
             key='home'
             name='home'
             active={activeItem === 'home'}
             onClick={this.handleItemClick}
             as={Link}
             to='/'
           />
           <Menu.Item
              key='category'
              name='category'
              active={activeItem === 'category'}
              onClick={this.handleItemClick}
              as={Link}
              to='/category'
            />
        </Menu>
      </div>
    )
  }
}

export default Header
