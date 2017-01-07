/**
 * Created by Yaroslav on 13.12.2016.
 */
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './app';
import { HomePage, HomeRuters } from './pages/home/index';
import { ContactRoutes } from './pages/contact/index';
import { ListRouts } from './pages/list/index';
import ErrorPage  from './pages/error/error';

export default (
  <Route components = { App } path = { App.path }>
      <IndexRoute components={HomePage} />
      { HomeRuters }
      { ContactRoutes }
      {ListRouts}
      <Route path='*' components={ ErrorPage }/>
  </Route>
);
