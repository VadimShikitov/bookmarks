import React, { useCallback } from 'react';
import { MenuComponent } from '../../components/MenuComponent';
import { useDispatch } from 'react-redux';
import { removeAllBookmarks } from '../../ducks/bookmarks/actions';

export const MenuContainer: React.FC = () => {
  const dispatch = useDispatch();
  const removeAllBookmarksHandler = useCallback((): void => {
    dispatch(removeAllBookmarks());
  }, [dispatch]);
  return (
    <MenuComponent removeAllBookmarksHandler={removeAllBookmarksHandler} />
  );
};
