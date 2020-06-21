import {
  ADD_BOOKMARK,
  EDIT_BOOKMARK,
  DELETE_BOOKMARK,
  REMOVE_ALL_BOOKMARKS,
} from '../types';

import { initAppActionType } from '../../app/actions';

export type bookmarkType = {
  name: string,
  URL: string,
  tags: string,
  id: string,
  date: string,
};

type addBookmarkActionType = {
  type: typeof ADD_BOOKMARK,
  data: bookmarkType,
};

type editBookmarkActionType = {
  type: typeof EDIT_BOOKMARK,
  data: bookmarkType,
};

type deleteBookmarkActionType = {
  type: typeof DELETE_BOOKMARK,
  id: string,
};

type removeAllBookmarksActionType = {
  type: typeof REMOVE_ALL_BOOKMARKS,
};

export const addBookmark = (data: bookmarkType): addBookmarkActionType => ({
  type: ADD_BOOKMARK,
  data,
});

export const editBookmark = (data: bookmarkType): editBookmarkActionType => ({
  type: EDIT_BOOKMARK,
  data,
});

export const deleteBookmark = (id: string): deleteBookmarkActionType => ({
  type: DELETE_BOOKMARK,
  id,
});

export const removeAllBookmarks = (): removeAllBookmarksActionType => ({
  type: REMOVE_ALL_BOOKMARKS,
});

export type bookmarksActionTypes =
  | addBookmarkActionType
  | editBookmarkActionType
  | deleteBookmarkActionType
  | removeAllBookmarksActionType
  | initAppActionType;
