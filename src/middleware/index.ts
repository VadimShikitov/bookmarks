import {
  ADD_BOOKMARK,
  DELETE_BOOKMARK,
  REMOVE_ALL_BOOKMARKS,
} from '../ducks/bookmarks/types';

export const localstorage = (state: any) => (next: any) => (action: any) => {
  if (action) {
    switch (action.type) {
      case ADD_BOOKMARK: {
        const { bookmarks, ids } = state.getState();
        const bookmarksCollection = Object.values(bookmarks);
        bookmarksCollection.push(action.data);
        window.localStorage.setItem(
          'bookmarks',
          JSON.stringify(bookmarksCollection),
        );
        window.localStorage.setItem(
          'ids',
          JSON.stringify([...ids, action.data.id]),
        );
        break;
      }
      case DELETE_BOOKMARK:
        {
          const { bookmarks, ids } = state.getState();
          const { [action.id]: deletedBookmark, ...newBookmarks } = bookmarks;
          const newIds = ids.filter((id: string) => id !== action.id);
          const bookmarksCollection = Object.values(newBookmarks);
          window.localStorage.setItem(
            'bookmarks',
            JSON.stringify(bookmarksCollection),
          );
          window.localStorage.setItem('ids', JSON.stringify(newIds));
        }
        break;
      case REMOVE_ALL_BOOKMARKS:
        window.localStorage.clear();
        break;
      default:
        break;
    }
  }
  next(action);
};
