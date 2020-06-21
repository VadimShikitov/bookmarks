import { createSelector } from 'reselect';
import { initialStateType } from '../reducer';

const bookmarks = (state: initialStateType) => state.bookmarks;

export const selectAllBoomarks = createSelector(bookmarks, bookmarks =>
  Object.values(bookmarks),
);
