import React from 'react';
import styles from './style.module.css';
import { Link } from 'react-router-dom';
import { ROOT, CREATE } from '../../constants/routes';

export const MenuComponent: React.FC = () => {
  return (
    <div>
      <ul className={styles.menu_list}>
        <li>
          <Link to={ROOT} className={styles.link}>
            Закладки
          </Link>
        </li>
        <li>
          <Link to={CREATE} className={styles.link}>
            Добавить закладку
          </Link>
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
