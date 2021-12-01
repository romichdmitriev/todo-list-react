import React from 'react';
import { useDispatchActions } from '../../hooks/useDispatchActions';

import { themeActions } from '../../store/rootActions';

import styles from './AppHeader.scss';

const AppHeader = () => {
  const { toggleTheme } = useDispatchActions(themeActions);

  return (
    <div className={`${styles.titlePos} ${styles.title}`}>
      <h1>TODO</h1>

      <input id='theme-checkbox' className={styles.themeCheckbox} type='checkbox' />
      <label className={styles.themeToggler} htmlFor='theme-checkbox' onClick={toggleTheme} />
    </div>
  );
};

export default AppHeader;
