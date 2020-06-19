import React from 'react';
import styles from './style.module.css';

export const BookmarksComponent: React.FC = () => {
  return (
    <div className={styles.main_bookmark}>
      <div className={styles.bookmark}>
        <a href='' className={styles.link}>
          В контакте
        </a>
        <span className={styles.text}>vk.com</span>
        <a href='' className={styles.link}>
          Изменить
        </a>
        <a href='' className={styles.link}>
          Удалить
        </a>
        <span className={styles.time}>19:20</span>
      </div>
      <div className={styles.bookmark}>
        <div className={styles.tag}>Новости</div>
        <div className={styles.tag}>Учеба</div>
      </div>
    </div>
  );
};
