import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

interface CreateBookmarComponentProps {
  onChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void;
  createBookmark(event: React.MouseEvent<HTMLButtonElement>): void;
  cancelHandler(): void;
}

export const CreateBookmarkComponent: React.FC<CreateBookmarComponentProps> = React.memo(
  ({ onChangeHandler, createBookmark, cancelHandler }) => {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Добавить закладку</h1>
        <div className={styles.text_field}>
          <span className={styles.name}>Название:</span>
          <input
            type='text'
            name='name'
            onChange={onChangeHandler}
            className={styles.filed}
          />
        </div>
        <div className={styles.text_field}>
          <span className={styles.name}>Адрес (URL):</span>
          <input
            type='text'
            name='URL'
            onChange={onChangeHandler}
            className={styles.filed}
          />
        </div>
        <div className={styles.text_field}>
          <span className={styles.name}>Тэги:</span>
          <input
            type='text'
            name='tags'
            onChange={onChangeHandler}
            className={styles.filed}
          />
        </div>
        <div className={styles.buttons}>
          <button className={styles.buttons_cancel} onClick={cancelHandler}>
            Отмена
          </button>
          <button className={styles.buttons_add} onClick={createBookmark}>
            Добавить закладку
          </button>
        </div>
      </div>
    );
  },
);

CreateBookmarkComponent.displayName = 'CreateBookmarkComponent';

CreateBookmarkComponent.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  createBookmark: PropTypes.func.isRequired,
  cancelHandler: PropTypes.func.isRequired,
};
