import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App.jsx';
import Repositories from './components/Repositories.jsx';
import SingleRepo from './components/SingleRepo.jsx';

// eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Repositories}/>
    <Route path="repositories" component={Repositories}/>
    <Route path="repository/:name" component={SingleRepo}/>
  </Route>
);