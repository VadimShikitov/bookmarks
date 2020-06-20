import React, { useCallback, useState } from 'react';
import { CreateBookmarkComponent } from '../../components/CreateBookmarkComponent';

interface bookmarkState {
  name: string;
  URL: string;
  tags: string;
}

export const CreateBookmarkContainer: React.FC = () => {
  const [bookmark, setBookmark] = useState<bookmarkState>({
    name: '',
    URL: '',
    tags: '',
  });

  const onChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setBookmark(prevBookmark => ({ ...prevBookmark, [name]: value }));
    },
    [setBookmark, bookmark],
  );

  const createBookmark = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      const ID = '_' + Math.random().toString(36).substr(2, 9);
      const date = new Date();
      localStorage.setItem('state', JSON.stringify({ ...bookmark, ID, date }));
    },
    [bookmark, setBookmark],
  );

  return (
    <CreateBookmarkComponent
      onChangeHandler={onChangeHandler}
      createBookmark={createBookmark}
    />
  );
};
