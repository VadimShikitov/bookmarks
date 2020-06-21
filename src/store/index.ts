import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { bookmarksReducer } from '../ducks/bookmarks/reducer';
import { applyMiddleware } from 'redux';
import { localstorage } from '../middleware';

export const store = createStore(
  bookmarksReducer,
  composeWithDevTools(applyMiddleware(localstorage)),
);
