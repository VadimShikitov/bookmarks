import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CREATE, ROOT } from '../constants/routes';
import { BookmarksViewContainer } from '../containers/BookmarksViewContainer';
import { CreateBookmarkContainer } from '../containers/CreateBookmarkContainer';
import { MenuContainer } from '../containers/MenuContainer';

export const Routes: React.FC = () => (
  <>
    <MenuContainer />
    <Switch>
      <Route path={ROOT} exact component={BookmarksViewContainer} />
      <Route path={CREATE} exact component={CreateBookmarkContainer} />
    </Switch>
  </>
);
