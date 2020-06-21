import React from 'react';
import PropTypes from 'prop-types';
import { BookmarksComponent } from '../BookmarksComponent';
import styles from './style.module.css';
import { bookmarkType } from '../../ducks/bookmarks/actions';

interface BookmarksViewComponentProps {
  bookmarksCollection: Array<bookmarkType>;
  deleteBookmarkHandler(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ): void;
}

export const BookmarksViewComponent: React.FC<BookmarksViewComponentProps> = React.memo(
  ({ bookmarksCollection, deleteBookmarkHandler }) => {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Закладки</h1>
        {bookmarksCollection.length ? (
          bookmarksCollection.map((bookmark: bookmarkType) => (
            <BookmarksComponent
              deleteBookmarkHandler={deleteBookmarkHandler}
              key={bookmark.id}
              name={bookmark.name}
              date={bookmark.date}
              URL={bookmark.URL}
              tags={bookmark.tags}
              id={bookmark.id}
            />
          ))
        ) : (
          <h1>У вас пока нет закладок</h1>
        )}
      </div>
    );
  },
);

BookmarksViewComponent.displayName = 'BookmarksViewComponent';

BookmarksViewComponent.propTypes = {
  bookmarksCollection: PropTypes.array.isRequired,
  deleteBookmarkHandler: PropTypes.func.isRequired,
};
