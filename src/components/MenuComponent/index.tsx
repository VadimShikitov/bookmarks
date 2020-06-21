import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';
import { Link } from 'react-router-dom';
import { ROOT, CREATE } from '../../constants/routes';

type MenuComponentProps = {
  removeAllBookmarksHandler(): void,
};

export const MenuComponent: React.FC<MenuComponentProps> = (
  needDeletedButton,
  removeAllBookmarksHandler,
) => {
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
          <a onClick={removeAllBookmarksHandler} className={styles.link}>
            Удалить все
          </a>
        </li>
      </ul>
    </div>
  );
};

MenuComponent.propTypes = {
  removeAllBookmarksHandler: PropTypes.func.isRequired,
};
