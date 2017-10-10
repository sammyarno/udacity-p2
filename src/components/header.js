import React, { Component } from 'react';
//import { connect } from 'react-redux';

import {Menu} from 'semantic-ui-react';

import {Link} from 'react-router-dom';

// import { loadCategories } from '../actions/CatAction';
// import { loadPosts } from '../actions/PostAction';

class Header extends Component {

  state = {
    activeItem: 'home'
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    // if(name === 'home') {
    //   this.props.loadPosts()
    // }else if(name === 'category') {
    //   this.props.loadCat()
    // }
  }

  render() {
    const {activeItem} = this.state

    return (
      <div className="header">
        <Menu pointing secondary stackable color='red'>
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
            {/* <Menu.Item
               key='detail'
               name='detail'
               active={activeItem === 'detail'}
               onClick={this.handleItemClick}
               as={Link}
               to='/postdetail'
             />
             <Menu.Item
                key='update'
                name='update'
                active={activeItem === 'update'}
                onClick={this.handleItemClick}
                as={Link}
                to='/postupdate'
              /> */}
        </Menu>
      </div>
    )
  }
}

// function mapDispatchToProps (dispatch) {
//   return {
//     loadCat: () => dispatch(loadCategories()),
//     loadPosts: () => dispatch(loadPosts())
//   }
// }
//
// export default connect(mapDispatchToProps)(Header)
export default Header;
