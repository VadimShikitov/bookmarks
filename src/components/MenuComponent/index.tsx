import React from 'react';
import styles from './style.module.css';

type Props = {
  className?: string,
};

export const MenuComponent: React.FC = () => {
  return (
    <div>
      <ul className={styles.menu - list}>
        <li>
          <a href=''>Закладки</a>
        </li>
        <li>
          <a href=''>Создать закладку</a>
        </li>
        <li>
          <a href=''>Удалить все</a>
        </li>
      </ul>
    </div>
  );
};
