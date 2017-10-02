import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

// importing containers / pages
import Home from '../containers/Home';
import Category from '../containers/Category';
import Detail from '../containers/Detail';
import Update from '../containers/Update';
import NotFound from '../containers/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/category' component={Category} />
      <Route exact path='/postdetail/:id' component={Detail} />
      <Route exact path='/postupdate/:id' component={Update} />
      <Route exact path='/404' component={NotFound} />
      <Redirect to="/404" />
    </Switch>
  )
}

export default Routes;
