import React, { Component } from 'react';

import Header from './components/header';
import Routes from './components/routes';
import { Switch } from 'react-router-dom';

import ScrollToTop from 'react-scroll-up';
import { Icon } from 'semantic-ui-react';

const ScrollStyle = {
  color: 'rgba(249, 117, 117, 0.6)'
}

class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     backend: 'backend-data'
  //   }
  // }
  //
  // componentDidMount() {
  //   const url = `${process.env.REACT_APP_BACKEND}/categories`;
  //   //console.log('fetching from url', url);
  //   fetch(url, { headers: { 'Authorization': 'Sam' } } )
  //     .then( (res) => { return(res.text()) })
  //     .then((data) => {
  //       this.setState({backend:data});
  //     });
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
        <ScrollToTop style={ScrollStyle} showUnder={200} duration={1000}>
          <Icon name='arrow circle up' size='huge' />
        </ScrollToTop>
      </div>
    );
  }
}

export default App;
