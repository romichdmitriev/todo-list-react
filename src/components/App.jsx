import React from 'react';
import { useSelector } from 'react-redux';

import { selectTheme } from '../store/theme/selector';

import TasksList from './TasksListComponent/TasksList';
import AppHeader from './AppHeader/AppHeader';
import TaskInput from './TaskInput/TaskInput';

import styles from './App.scss';
import THEME from './THEME';
import classNames from 'classnames';

const App = () => {
  const isLightTheme = useSelector(selectTheme);

  return (
    <div
      className={classNames({
        [THEME.app.light]: isLightTheme,
        [THEME.app.dark]: !isLightTheme,
      })}>
      <div
        className={classNames({
          [THEME.img.light]: isLightTheme,
          [THEME.img.dark]: !isLightTheme,
        })}
      />

      <main className={styles.content}>
        <AppHeader />
        <TaskInput />
        <TasksList />
      </main>
    </div>
  );
};

export default App;
