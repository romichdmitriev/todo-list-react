import React from 'react';

import TaskItem from './TaskItemComponent/TaskItem';
import TasksFilters from './TasksFiltersComponent/TasksFilters';

import styles from './TasksList.scss';

const TasksList = ({ tasks, setTasks, activeFilter, setActiveFilter }) => {
  return (
    <div className={styles.tasks}>
      <ul className={styles.tasksList}>
        {tasks.map((task) => (
          <TaskItem key={task.id} currentTask={task} tasks={tasks} setTasks={setTasks} />
        ))}
      </ul>

      <TasksFilters tasks={tasks} setTasks={setTasks} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
    </div>
  );
};

export default TasksList;
