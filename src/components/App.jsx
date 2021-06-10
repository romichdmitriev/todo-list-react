import React, { useState } from 'react';

import TasksList from './TasksListComponent/TasksList';
import Title from './TitleComponent/Title';
import AddTask from './AddTaskComponent/AddTask';

import filterHandlers from "../utils/filterHandlers";

import styles from './App.scss';
import THEME from "./THEME";

const App = () => {
  const [ inputText, setInputText ] = useState('');
  const [ tasks, setTasks ] = useState([]);
  const [ activeFilter, setActiveFilter ] = useState('all');
  const [ isLightTheme, setLightTheme ] = useState(true);

  const setBgImgClassByTheme = () => isLightTheme ? THEME.img.light : THEME.img.dark;

  const setAppClassByTheme = () => isLightTheme ? THEME.app.light : THEME.app.dark;

  return  (
    <div className={ setAppClassByTheme() }>
      <div className={ setBgImgClassByTheme() } />

      <main className={styles.content}>
        <Title setLightTheme={setLightTheme} isLightTheme={isLightTheme}/>

        <AddTask inputText={inputText} setInputText={setInputText} tasks={tasks} setTasks={setTasks}/>

        <TasksList tasks={ tasks.filter(filterHandlers[activeFilter]) } setTasks={setTasks} activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
      </main>
    </div>
  )
}

export default App;
