import React from 'react';

import TaskItem from "./TaskItemComponent/TaskItem";
import TasksFilters from "./TasksFiltersComponent/TasksFilters";

import './tasks-list.scss';

function TasksList({ tasks, setTasks, activeFilter, setActiveFilter }) {
  return (
    <div className="tasks">
      <ul className="tasks-list">
        {tasks.map((task) => (
          <TaskItem key={ task.id } currentTask={ task } tasks={ tasks } setTasks={ setTasks }/>
        ))}
      </ul>

      <TasksFilters tasks={ tasks } setTasks={ setTasks } activeFilter={activeFilter} setActiveFilter={ setActiveFilter }/>
    </div>
  )
}

export default TasksList;
