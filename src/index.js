/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import {loadRepositories} from './actions/repositoriesActions';
import './styles/styles.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

const store = configureStore();
store.dispatch(loadRepositories());

injectTapEventPlugin();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
