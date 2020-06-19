import React from 'react';
import styles from './style.module.css';

export const MenuComponent: React.FC = () => {
  return (
    <div>
      <ul className={styles.menu_list}>
        <li>
          <a href='' className={styles.link}>
            Закладки
          </a>
        </li>
        <li>
          <a href='' className={styles.link}>
            Добавить закладку
          </a>
        </li>
        <li>
          <a href='' className={styles.link}>
            Удалить все
          </a>
        </li>
      </ul>
    </div>
  );
};
