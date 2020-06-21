import React from 'react';
import { BookmarksViewComponent } from '../../components/BookmarksViewComponent';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllBoomarks } from '../../ducks/bookmarks/selectors';
import { deleteBookmark } from '../../ducks/bookmarks/actions';

export const BookmarksViewContainer: React.FC = () => {
  const dispatch = useDispatch();
  const bookmarksCollection = useSelector(selectAllBoomarks);
  const deleteBookmarkHandler = (id: string) => {
    dispatch(deleteBookmark(id));
  };
  return (
    <BookmarksViewComponent
      bookmarksCollection={bookmarksCollection}
      deleteBookmarkHandler={deleteBookmarkHandler}
    />
  );
};
