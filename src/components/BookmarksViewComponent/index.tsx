import React from 'react';
import { BookmarksComponent } from '../BookmarksComponent';
import styles from './style.module.css';

export const BookmarksViewComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Закладки</h1>
      <BookmarksComponent />
      <BookmarksComponent />
    </div>
  );
};
