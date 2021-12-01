import React from 'react';
import { useSelector } from 'react-redux';

import { selectTodos } from '../../store/todos/selector';

import TaskItem from './TaskItem/TaskItem';
import TasksFilters from './TasksFiltersComponent/TasksFilters';

import styles from './TasksList.scss';

const TasksList = () => {
  const todos = useSelector(selectTodos);

  return (
    <div className={styles.tasks}>
      <ul className={styles.tasksList}>
        {todos.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>

      <TasksFilters todosCount={todos.length} />
    </div>
  );
};

export default TasksList;
