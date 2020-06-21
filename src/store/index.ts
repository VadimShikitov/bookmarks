import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { bookmarksReducer } from '../ducks/bookmarks/reducer';

export const store = createStore(bookmarksReducer, composeWithDevTools());
