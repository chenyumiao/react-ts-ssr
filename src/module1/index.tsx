import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HashRouter } from 'react-router-dom';
import {routes} from './route';
import { Provider } from 'react-redux';
import configureStore from './store/store';

import './static/base.scss';
console.log(process.env);
const initialState = (window as any).__INITIALSTATE__ || {};
const store = configureStore(initialState);



ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
            {routes}
    </HashRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
