import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

interface BookmarksComponentProps {
  name: string;
  URL: string;
  tags: string;
  date: string;
  id: string;
  deleteBookmarkHandler(id: string): void;
}

export const BookmarksComponent: React.FC<BookmarksComponentProps> = ({
  name,
  URL,
  tags,
  date,
  id,
  deleteBookmarkHandler,
}) => {
  const tagsCollection = tags.split(/[\s,]+/);
  return (
    <div data-id={id} className={styles.main_bookmark}>
      <div className={styles.bookmark}>
        <a href={URL} className={styles.link}>
          {name}
        </a>
        <span className={styles.text}>{URL}</span>
        <a href='#' className={styles.link}>
          Изменить
        </a>
        <a
          onClick={() => deleteBookmarkHandler(id)}
          data-id={id}
          className={styles.link}
        >
          Удалить
        </a>
        <span className={styles.time}>{date}</span>
      </div>
      <div className={styles.bookmark}>
        {tagsCollection.length &&
          tagsCollection.map((tag, i) => (
            <div key={i} className={styles.tag}>
              {tag}
            </div>
          ))}
      </div>
    </div>
  );
};

BookmarksComponent.propTypes = {
  name: PropTypes.string.isRequired,
  URL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteBookmarkHandler: PropTypes.func.isRequired,
};
