import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CREATE, ROOT } from '../constants/routes';
import { BookmarksComponent } from './BookmarksComponent';
import { CreateBookmarkComponent } from './CreateBookmarkComponent';
import { MenuComponent } from './MenuComponent';

export const Routes: React.FC = () => (
  <>
    <MenuComponent />
    <Switch>
      <Route path={ROOT} exact component={BookmarksComponent} />
      <Route path={CREATE} exact component={CreateBookmarkComponent} />
    </Switch>
  </>
);
