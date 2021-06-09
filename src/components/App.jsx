import React, { useState } from 'react';

import TasksList from './TasksListComponent/TasksList';
import Title from './TitleComponent/Title';
import AddTask from './AddTaskComponent/AddTask';

import filterHandlers from "../utils/filterHandlers";
import THEME from "../content/THEME";

import './app.scss';

const App = () => {
  const [ inputText, setInputText ] = useState('');
  const [ tasks, setTasks ] = useState([]);
  const [ activeFilter, setActiveFilter ] = useState('all');
  const [ isLightTheme, setLightTheme ] = useState(true);

  const setBgClassByTheme = () => isLightTheme ? THEME.background.light : THEME.background.dark;

  const setAppClassByTheme = () => isLightTheme ? THEME.app.light : THEME.app.dark;

  return  (
    <div className={ setAppClassByTheme() }>
      <div className={ setBgClassByTheme() } />

      <main className="content">
        <Title setLightTheme={setLightTheme} isLightTheme={isLightTheme}/>

        <AddTask inputText={inputText} setInputText={setInputText} tasks={tasks} setTasks={setTasks}/>

        <TasksList tasks={ tasks.filter(filterHandlers[activeFilter]) } setTasks={setTasks} activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
      </main>
    </div>
  )
}

export default App;
