import React, { Component } from 'react';

import Header from './components/header';
import Routes from './components/routes';
import { Switch } from 'react-router-dom';

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
        {/* router */}
        <Routes />
      </div>
    );
  }
}

export default App;
