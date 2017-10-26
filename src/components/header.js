import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import { changeMenu } from '../actions/MenuAction';

class Header extends Component {

  state = {
    activeItem: 'home'
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    this.props.menuChanger(name)
  }

  checkMenu = () => {
    const {activeItem} = this.state
    const {menu} = this.props

    if (menu) {
      if (activeItem !== menu) {
        return menu
      }
    }

    return activeItem
  }

  render() {
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
             active={this.checkMenu() === 'home'}
             onClick={this.handleItemClick}
             as={Link}
             to='/'
           />
           <Menu.Item
              key='category'
              name='category'
              active={this.checkMenu() === 'category'}
              onClick={this.handleItemClick}
              as={Link}
              to='/category'
            />
        </Menu>
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    menu: state.menu,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    menuChanger: (menu) => dispatch(changeMenu(menu))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
