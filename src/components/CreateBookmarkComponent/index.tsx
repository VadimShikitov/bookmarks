import React from 'react';
import styles from './style.module.css';

export const CreateBookmarkComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Добавить закладку</h1>
      <div className={styles.text_field}>
        <span className={styles.name}>Название:</span>
        <input type='text' className={styles.filed} />
      </div>
      <div className={styles.text_field}>
        <span className={styles.name}>Адрес (URL):</span>
        <input type='text' className={styles.filed} />
      </div>
      <div className={styles.text_field}>
        <span className={styles.name}>Тэги:</span>
        <input type='text' className={styles.filed} />
      </div>
      <div className={styles.buttons}>
        <button className={styles.buttons_cancel}>Отмена</button>
        <button className={styles.buttons_add}>Добавить закладку</button>
      </div>
    </div>
  );
};
