import React, { useEffect } from 'react';

// hooks
import useEffectOnce from '@hooks/useEffectOnce';
import useChangeTheme from '@hooks/theme/useChangeTheme';

// components
import TasksList from '@components/TasksList/TasksList';
import AppHeader from '@components/AppHeader/AppHeader';
import TaskInput from '@components/TaskInput/TaskInput';

// styles
import styles from './App.scss';

// utils
import getUserTheme from '@utils/getIsDarkTheme';

// constants
import UNIQUE_TEXT_KEYS from '../constants/unique-keys';

const App = () => {
  const changeTheme = useChangeTheme();

  /* set current theme */
  useEffectOnce(() => {
    const currentTheme = getUserTheme();
    changeTheme(currentTheme);
  });

  /* check media query prefers-color-scheme: dark */
  useEffect(() => {
    const handleOnChangePreferColors = ({ matches: isDark }) => {
      changeTheme(isDark ? UNIQUE_TEXT_KEYS.dark : UNIQUE_TEXT_KEYS.light);
    };

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleOnChangePreferColors);

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleOnChangePreferColors);
    };
  });

  return (
    <div className={styles.app}>
      <div className={styles.bannerImage} />

      <main className={styles.content}>
        <AppHeader />
        <TaskInput />
        <TasksList />
      </main>
    </div>
  );
};

export default App;
