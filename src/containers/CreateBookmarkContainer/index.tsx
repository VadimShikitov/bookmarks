import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookmark } from '../../ducks/bookmarks/actions';
import { useHistory } from 'react-router-dom';
import { CreateBookmarkComponent } from '../../components/CreateBookmarkComponent';
import { generateID, createNowDate } from '../../helpers/main';

interface bookmarkState {
  name: string;
  URL: string;
  tags: string;
}

export const CreateBookmarkContainer: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
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
    [setBookmark],
  );

  const createBookmark = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      const ID = generateID();
      const date = createNowDate();
      dispatch(addBookmark({ ...bookmark, id: ID, date: date }));
      history.push('/');
    },
    [bookmark, dispatch, history],
  );

  const cancelHandler = useCallback(() => history.push('/'), [history]);

  return (
    <CreateBookmarkComponent
      cancelHandler={cancelHandler}
      onChangeHandler={onChangeHandler}
      createBookmark={createBookmark}
    />
  );
};
