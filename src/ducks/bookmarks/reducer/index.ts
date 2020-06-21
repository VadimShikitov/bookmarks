import {
  ADD_BOOKMARK,
  EDIT_BOOKMARK,
  DELETE_BOOKMARK,
  REMOVE_ALL_BOOKMARKS,
} from '../types';
import { bookmarksActionTypes, bookmarkType } from '../actions';

export type initialStateType = {
  bookmarks: {
    [key: string]: bookmarkType,
  },
  ids: string[],
};

const initialState: initialStateType = {
  bookmarks: {},
  ids: [],
};

export const bookmarksReducer = (
  state = initialState,
  action: bookmarksActionTypes,
): initialStateType => {
  switch (action.type) {
    case ADD_BOOKMARK: {
      return {
        bookmarks: {
          ...state.bookmarks,
          [action.data.id]: action.data,
        },
        ids: [...state.ids, action.data.id],
      };
    }
    case EDIT_BOOKMARK:
      return {
        ...state,
        [action.data.id]: action.data,
      };
    case DELETE_BOOKMARK: {
      const { bookmarks } = state;
      const newIds = state.ids.filter(id => id !== action.id);
      const { [action.id]: deletedBookmark, ...newBookmarks } = bookmarks;
      return {
        bookmarks: newBookmarks,
        ids: newIds,
      };
    }
    case REMOVE_ALL_BOOKMARKS:
      return initialState;
    default:
      return state;
  }
};
