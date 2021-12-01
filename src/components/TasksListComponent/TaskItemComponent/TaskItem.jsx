import React from 'react';

import styles from './TaskItem.scss';

import {INPUT_ERROR_CLASSES, TASK_CLASSES} from './TASK';

const TaskItem = ({ currentTask, tasks, setTasks }) => {
  const activateCompletedStatus = () => {
    return currentTask.completed ? TASK_CLASSES.completed : TASK_CLASSES.uncompleted;
  };

  const activateInputError = () => (!currentTask.text.length ? INPUT_ERROR_CLASSES.invalid : INPUT_ERROR_CLASSES.valid);

  function updateCompletedStatusOfCurrentTask() {
    const updatedTask = {
      ...currentTask,
      completed: !currentTask.completed,
    };

    const updatedTasks = tasks.map((task) => (task.id === currentTask.id ? updatedTask : task));

    setTasks(updatedTasks);
  }

  const updateTextOfCurrentTask = ({ target }) => {
    const updatedTask = {
      ...currentTask,
      text: target.value,
    };

    const updatedTasks = tasks.map((task) => (task.id === currentTask.id ? updatedTask : task));

    setTasks(updatedTasks);
  };

  const deleteCurrentTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    setTasks(filteredTasks);
  };

  return (
    <li className={styles.task}>
      <div className={activateCompletedStatus().check} onClick={updateCompletedStatusOfCurrentTask}>
        <div className={styles.checkBtnInner} />

        <svg className={styles.checkBtnIcon}>
          <use href='./assets/icons/sprite.svg#completed' />
        </svg>
      </div>

      <input
        type='text'
        className={activateCompletedStatus().input}
        defaultValue={currentTask.text}
        onChange={updateTextOfCurrentTask}
        required
      />
      <svg className={activateInputError()}>
        <use href='./assets/icons/sprite.svg#warning' />
      </svg>

      <svg className={styles.deleteBtn} onClick={() => deleteCurrentTask(currentTask.id)}>
        <use href='./assets/icons/sprite.svg#delete-task' />
      </svg>
    </li>
  );
};

export default TaskItem;
