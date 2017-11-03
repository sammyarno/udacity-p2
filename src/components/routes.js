import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

// importing containers / pages
import Home from '../containers/Home';
import Category from '../containers/Category';
import Detail from '../containers/Detail';
import NotFound from '../containers/NotFound';

class Routes extends Component {

  render() {
      return (
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/category' component={Category} />
          <Route exact path='/:category' component={Category} />
          <Route exact path='/:category/:id' component={Detail} />
          <Route exact path='/404' component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      )
  }
}

export default Routes
