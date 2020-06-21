import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';
import { Link } from 'react-router-dom';
import { ROOT, CREATE } from '../../constants/routes';

interface MenuComponentProps {
  removeAllBookmarksHandler(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ): void;
}

export const MenuComponent: React.FC<MenuComponentProps> = React.memo(
  ({ removeAllBookmarksHandler }) => {
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
            <a
              href='_blank'
              onClick={removeAllBookmarksHandler}
              className={styles.link}
            >
              Удалить все
            </a>
          </li>
        </ul>
      </div>
    );
  },
);

MenuComponent.displayName = 'MenuComponent';

MenuComponent.propTypes = {
  removeAllBookmarksHandler: PropTypes.func.isRequired,
};
